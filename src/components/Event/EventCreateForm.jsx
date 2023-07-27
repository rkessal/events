import React, { useState } from "react";

function EventCreateForm({ handleFormCreateEvent }) {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  return (
    <form
      className="events__create"
      onSubmit={(e) => handleFormCreateEvent(e, { name, location, date })}
    >
      <div>
        <label htmlFor="name">Name</label>
        <input
          autoComplete="off"
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="location">Location</label>
        <input
          autoComplete="off"
          id="location"
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="date">Date</label>
        <input
          autoComplete="off"
          id="date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div>
        <button type="submit">Create event</button>
      </div>
    </form>
  );
}

export default EventCreateForm;
