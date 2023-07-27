import React, { useState } from "react";
import EventEditForm from "./EventEditForm";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat);

function EventCard({
  id,
  name,
  location,
  date,
  handleEditEvent,
  handleDelete,
}) {
  const [isEdit, setIsEdit] = useState(false);

  function convertToLocaleDate(date) {
    const [day, month, year] = date.split("/");
    return `${year}-${month}-${day}`;
  }

  function convertDateToAbbrevation(date) {
    console.log(date);
    const dateObject = dayjs(date, "DD/MM/YYYY");
    const dayOfWeekAbbreviation = dateObject.format("ddd");
    const dayOfMonth = dateObject.format("DD");

    return {
      dayOfMonth,
      dayOfWeekAbbreviation,
    };
  }

  const { dayOfMonth, dayOfWeekAbbreviation } = convertDateToAbbrevation(date);

  return (
    <>
      <div className="events__card__date">
        <span className="acc">{date}</span>
        <span>{dayOfWeekAbbreviation}</span>
        <span>{dayOfMonth}</span>
      </div>
      <div className="events__card__name">{name}</div>
      <div className="events__card__location">{location}</div>
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
      {isEdit && (
        <EventEditForm
          name={name}
          location={location}
          date={convertToLocaleDate(date)}
          cancel={setIsEdit}
          handleFormEditEvent={(e, data) => {
            handleEditEvent(e, data);
            setIsEdit(false);
          }}
        />
      )}
    </>
  );
}

export default EventCard;
