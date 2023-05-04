import React from "react";
import Contact from "./Contacts";

export default function ContactList({ contactList, deleteFromList }) {
  const List = contactList.map((contact) => {
    return (
      <Contact
        key={contact.id}
        name={contact.name}
        email={contact.email}
        deleteFromList={() => deleteFromList(contact.id)}
      />
    );
  });

  return (
    <div className="contact--list">
      {List.length !== 0 && <h1>Contact List</h1>}
      {List.length !== 0 && <hr />}
      {List}
    </div>
  );
}
