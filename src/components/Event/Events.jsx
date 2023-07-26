import React, { useEffect, useState } from "react";
import { app } from "@utils/firebase/config";
import {
  getFirestore,
  collection,
  doc,
  addDoc,
  getDocs,
  getDoc,
  deleteDoc,
  setDoc,
  Timestamp,
} from "firebase/firestore/lite";
import EventCreateForm from "./EventCreateForm";
import EventCard from "./EventCard";

//TODO:
//put firebase functions in different files (firebase/services?)
//add image + description for each event
//add detailed view for each event
//add routing (ssr? client?)
//add auth (firebase builtin auth)
//styling (scss? tailwind?) + responsive
//hosting (firebase hosting)

function Events() {
  const [events, setEvents] = useState([]);
  const db = getFirestore(app);

  async function createEvent(event) {
    try {
      await addDoc(collection(db, "events"), {
        ...event,
      });
      return true;
    } catch (e) {
      console.log(e);
    }
  }

  async function getEvents() {
    try {
      const response = await getDocs(collection(db, "events"));
      const events = response.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      }));
      setEvents(events);
      console.log(events);
      return events;
    } catch (e) {
      console.log(e);
    }
  }

  async function editEvent(eventId, event) {
    try {
      const _event = await getDoc(doc(db, "events", eventId));
      console.log(_event.data());
      await setDoc(doc(db, "events", eventId), {
        ..._event.data(),
        ...event,
      });
      console.log("edit");
      return true;
    } catch (e) {
      console.log(e);
    }
  }

  async function deleteEvent(eventId) {
    try {
      await deleteDoc(doc(db, "events", eventId));
      return Promise.resolve(true);
    } catch (error) {
      console.log(e);
    }
  }

  async function handleEditEvent(e, id, data) {
    e.preventDefault();
    const edit = await editEvent(id, {
      ...data,
      date: Timestamp.fromDate(new Date(data.date)),
      dateUpdated: Timestamp.now(),
    });
    if (edit) getEvents();
    console.log("handleEdit", edit);
  }

  async function handleFormCreateEvent(e, { name, location, date }) {
    e.preventDefault();
    console.log({ name, location });
    const event = await createEvent({
      name,
      location,
      date: Timestamp.fromDate(new Date(date)),
      dateCreated: Timestamp.now(),
      dateUpdated: Timestamp.now(),
    });
    if (event) getEvents();
  }

  async function handleDelete(id) {
    const response = await deleteEvent(id);
    if (response) getEvents();
  }

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <>
      <div>
        <h1>Create event</h1>
        <EventCreateForm
          handleFormCreateEvent={(e, data) => handleFormCreateEvent(e, data)}
        />
      </div>
      <div>
        <h1>Events list</h1>
        <div>
          {events &&
            events.map((event) => (
              <div key={event.id}>
                <EventCard
                  handleEditEvent={(e, data) =>
                    handleEditEvent(e, event.id, data)
                  }
                  handleDelete={() => handleDelete(event.id)}
                  id={event.id}
                  name={event.data.name}
                  location={event.data.location}
                  date={new Date(
                    event.data.date.seconds * 1000
                  ).toLocaleDateString("fr-FR")}
                />
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default Events;
