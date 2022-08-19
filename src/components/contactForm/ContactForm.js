import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {

  const onNameChange = (e) =>{
    setName(e.target.value);
  }

  const onPhoneChange = (e) =>{
    setPhone(e.target.value);
  }

  const onEmailChange = (e) =>{
    setEmail(e.target.value);
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <p>Name:</p>
      <input 
        onChange ={onNameChange}
        value = {name}
        type="text" />
      <p>Phone Number:</p>
      <input 
      onChange ={onPhoneChange}
      value = {phone}
      type="tel"
      pattern = '^[2-9]\d*' />
      <p>Email:</p>
      <input 
      onChange ={onEmailChange}
      value = {email}
      type="email" />
      <input 
      type='submit'
      />
    </form>
  );
};
