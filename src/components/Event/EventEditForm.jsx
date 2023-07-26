import React, { useState } from "react";

function EventEditForm({ handleFormEditEvent, name, location, date }) {
  const [newName, setNewName] = useState(name);
  const [newLocation, setNewLocation] = useState(location);
  const [newDate, setNewDate] = useState(date);
  console.log("new Date", newDate);
  return (
    <form
      onSubmit={(e) =>
        handleFormEditEvent(e, {
          name: newName,
          location: newLocation,
          date: newDate,
        })
      }
    >
      <div>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="location">Location</label>
        <input
          id="location"
          type="text"
          value={newLocation}
          onChange={(e) => setNewLocation(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          value={newDate}
          onChange={(e) => setNewDate(e.target.value)}
        />
      </div>
      <div>
        <button type="submit">Edit form</button>
      </div>
    </form>
  );
}

export default EventEditForm;
