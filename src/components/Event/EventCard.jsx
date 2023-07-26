import React, { useState } from "react";
import EventEditForm from "./EventEditForm";

function EventCard({
  id,
  name,
  location,
  date,
  handleEditEvent,
  handleDelete,
}) {
  console.log(date);
  const [isEdit, setIsEdit] = useState(false);
  function convertToLocaleDate(date) {
    const [day, month, year] = date.split("/");
    return `${year}-${month}-${day}`;
  }
  return (
    <>
      <div>
        <div>Id: {id}</div>
        <div>Name: {name}</div>
        <div>Location: {location}</div>
        <div>Date: {date}</div>
        <button
          type="button"
          onClick={() => {
            setIsEdit(true);
          }}
        >
          Edit
        </button>
        <button
          type="button"
          onClick={() => {
            handleDelete();
          }}
        >
          Delete
        </button>
      </div>
      {isEdit && (
        <div>
          <EventEditForm
            name={name}
            location={location}
            date={convertToLocaleDate(date)}
            handleFormEditEvent={(e, data) => {
              handleEditEvent(e, data);
              setIsEdit(false);
            }}
          />
        </div>
      )}
    </>
  );
}

export default EventCard;
