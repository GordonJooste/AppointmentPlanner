import React, {useState} from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState([]);

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  const addContact = (name, phoneNumber, email) => {
    const item = {name:name,
                  phoneNumber: phoneNumber,
                  email: email};
    setContacts((prev)=>{ return [item, ...prev]});
 };

 const addAppointment = ( title, contact, date,time) =>{
  const appointment = {
                        title: title,
                        contact: contact,
                        date: date,
                        time:time,
  }
  setAppointments((prev)=>{ return [appointment, ...prev]});
 }

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
             
            <ContactsPage contacts = {contacts} addContacts={addContact}/>
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            
            <AppointmentsPage contacts = {contacts} appointments={appointments} addAppointments={addAppointment}/>
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
