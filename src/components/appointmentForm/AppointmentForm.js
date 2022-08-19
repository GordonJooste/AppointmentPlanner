import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const onTitleChange = (e) =>{
    setTitle(e.target.value);
  }

  const onTimeChange = (e) =>{
    setTime(e.target.value);
  }

  const onDateChange = (e) =>{
    setDate(e.target.value);
  }
  const onContactChange = (e) =>{
    setContact(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit} >
      <p>Title</p>
      <input 
        onChange ={onTitleChange}
        value = {title}
        type="text" />
      <p>Date</p>
      <input 
      onChange ={onDateChange}
      min ={getTodayString}
      value = {date}
      type="date"
      pattern = '^[2-9]\d*' />
      <p>Time</p>
      <input 
      onChange ={onTimeChange}
      value = {time}
      type="time" />
      <ContactPicker contacts={contacts} onChange={onContactChange} value={contact}/>
      <input 
      type='submit'
      />
    </form>
  );
};
