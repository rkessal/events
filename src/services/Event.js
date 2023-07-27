import { app } from "@utils/firebase/config";
import {
  addDoc,
  getDocs,
  getFirestore,
  collection,
  doc,
  getDoc,
  setDoc,
  deleteDoc,
} from "firebase/firestore/lite";

export class Event {
  constructor() {
    if (!this.db) this.db = getFirestore(app);
    this.events = "events";
  }

  getEvents() {
    return getDocs(collection(this.db, this.events))
      .then(({ docs }) => docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      .catch((e) => e);
  }

  getEvent(eventId) {
    return getDoc(doc(this.db, this.events, eventId))
      .then((doc) => ({ id: doc.id, data: doc.data() }))
      .catch((e) => e);
  }

  createEvent(event) {
    return addDoc(collection(this.db, this.events), event)
      .then((_) => true)
      .catch((e) => e);
  }

  async editEvent(eventId, event) {
    const _event = await this.getEvent(eventId);
    return setDoc(doc(this.db, this.events, eventId), {
      ..._event,
      ...event,
    })
      .then((_) => true)
      .catch((e) => e);
  }

  deleteEvent(eventId) {
    return deleteDoc(doc(this.db, this.events, eventId))
      .then((_) => true)
      .catch((e) => e);
  }
}
