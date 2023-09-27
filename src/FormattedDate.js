import React from "react";

export default function FormattedDate(props) {
  let weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  let weekDay = weekDays[props.date.getDay()];
  let dayOfMonth = props.date.getDate();
  let hours = props.date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let month = months[props.date.getMonth()];

  let year = props.date.getFullYear();
  return (
    <div className="FormattedDate">
      {weekDay} {dayOfMonth} {month}
      <div>
        {hours}:{minutes}/ {year}
      </div>
    </div>
  );
}
