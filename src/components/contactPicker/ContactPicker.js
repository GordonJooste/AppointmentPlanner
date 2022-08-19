import React from "react";

export const ContactPicker = ({contacts, onChange, value}) => {
  
  return (
    <select onChange ={onChange} > 
      <option value="" selected="selected" key='1' >--Please choose an option--</option>
      {contacts.map((contact,index) =>{
        return <option value={contact.name} key={index} >{contact.name}</option>
      })}
    </select>
  );
};
