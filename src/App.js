import "./styles.css";
import Header from "./Components/Header";
import AddContact from "./Components/AddContact";
import ContactList from "./Components/ContactList";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
function App() {
  const initialState = JSON.parse(localStorage.getItem("contactList")) || [];
  const [contactList, setContactList] = useState(initialState);
  const [contact, setContact] = useState({
    name: "",
    email: "",
    id: nanoid()
  });

  useEffect(() => {
    localStorage.setItem("contactList", JSON.stringify(contactList));
  }, [contactList]);

  function handleChange(e) {
    setContact((prevContact) => {
      return {
        ...prevContact,
        [e.target.name]: e.target.value
      };
    });
  }

  function addToList() {
    if (contact.name === "" || contact.email === "") {
      alert("Both Fields are Mandatory");
    } else {
      setContactList((prevContactList) => {
        return [...prevContactList, contact];
      });
      setContact({
        name: "",
        email: "",
        id: nanoid()
      });
    }
  }
  function deleteFromList(id) {
    setContactList((prevContactList) => {
      return prevContactList.filter((contact) => contact.id !== id);
    });
  }

  return (
    <div className="App">
      <Header />
      <AddContact
        handleChange={handleChange}
        name={contact.name}
        email={contact.email}
        addToList={addToList}
      />
      <ContactList contactList={contactList} deleteFromList={deleteFromList} />
    </div>
  );
}

export default App;
