import React, { useEffect, useState } from "react";
import { Timestamp } from "firebase/firestore/lite";
import EventCreateForm from "./EventCreateForm";
import EventCard from "./EventCard";
import { Event } from "../../services/event";

//TODO:
//add image + description for each event
//add detailed view for each event
//add routing (ssr? client?)
//add auth (firebase builtin auth)
//hosting (firebase hosting)

function Events() {
  const [events, setEvents] = useState([]);
  const eventService = new Event();

  async function createEvent(event) {
    try {
      return eventService.createEvent(event);
    } catch (e) {
      console.log(e);
    }
  }

  async function getEvents() {
    try {
      const events = await eventService.getEvents();
      setEvents(events);
    } catch (e) {
      console.log(e);
    }
  }

  async function editEvent(eventId, event) {
    try {
      return eventService.editEvent(eventId, event);
    } catch (e) {
      console.log(e);
    }
  }

  async function deleteEvent(eventId) {
    try {
      return eventService.deleteEvent(eventId);
    } catch (e) {
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
  }

  async function handleFormCreateEvent(e, { name, location, date }) {
    e.preventDefault();
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
    <div className="events__container">
      <section className="events__wrapper">
        <article className="events__create__wrapper">
          <h1>Create event</h1>
          <EventCreateForm
            handleFormCreateEvent={(e, data) => handleFormCreateEvent(e, data)}
          />
        </article>
        <article className="events__list__wrapper">
          <h1>Events list</h1>
          <div className="events__list">
            {events &&
              events.map((event) => (
                <div className="events__card" key={event.id}>
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
        </article>
      </section>
    </div>
  );
}

export default Events;
