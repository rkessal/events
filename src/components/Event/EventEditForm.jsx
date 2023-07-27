import React, { useState } from "react";

function EventEditForm({
  setIsEdit,
  handleFormEditEvent,
  name,
  location,
  date,
}) {
  const [newName, setNewName] = useState(name);
  const [newLocation, setNewLocation] = useState(location);
  const [newDate, setNewDate] = useState(date);
  return (
    <div className="events__edit__wrapper">
      <form
        className="events__edit"
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
            autoComplete="off"
            id="name"
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="location">Location</label>
          <input
            autoComplete="off"
            id="location"
            type="text"
            value={newLocation}
            onChange={(e) => setNewLocation(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="date">Date</label>
          <input
            autoComplete="off"
            id="date"
            type="date"
            value={newDate}
            onChange={(e) => setNewDate(e.target.value)}
          />
        </div>
        <div>
          <button onClick={() => setIsEdit(false)}>Cancel</button>
          <button type="submit">Edit</button>
        </div>
      </form>
    </div>
  );
}

export default EventEditForm;
