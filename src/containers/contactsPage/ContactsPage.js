import React,{useState, useEffect} from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = (props) => {
  const [name, setName] = useState('');
  const [email,setEmail] = useState('');
  const [phone, setPhone] = useState('');
  let [Problem, setProblem] = useState('');
  const contacts = props.contacts;


  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(isDuplicateName(props.contacts)){
      console.log('name is duplicate, go away');
    }
    else{
      props.addContacts(name, phone, email);
      //clear data
      setName('');
      setEmail('');
      setPhone('');
    }
  };

  const isDuplicateName =(array) =>{
    const bool = array.filter(contact =>{
      return (contact.name === name);
    });
    if(bool.length>0){
      return true;
    };
    return false;
  }

  useEffect(()=>{
    
    const bool = isDuplicateName(contacts);
    if(bool){
      console.log('duplicate name!');
      setProblem((<h3>Duplicate name</h3> ));
    }
    else{
      setProblem('');
    }
    
    // if its true, duplicate detected! need to indicate this somewhere!
    
  }, [name])

  return (
    <div>
      <section>
        { Problem }
        <h2>Add Contact</h2> 
        <ContactForm name={name} setName={setName} email={email} setEmail={setEmail} phone={phone} setPhone={setPhone} handleSubmit={handleSubmit} />
      </section>
      <hr />
      <section>
      <h2>Contacts</h2>
        <TileList list = {props.contacts} />
      </section>
    </div>
  );
};
