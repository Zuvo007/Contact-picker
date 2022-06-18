import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("test1");
  const [phone, setPhone] = useState("123");

  function openContactPicker() {
    const supported = "contacts" in navigator && "ContactsManager" in window;

    if (supported) {
      getContacts();
    } else {
      alert(
        "Contact list API not supported!. Only for android mobile chrome and chrome version > 80"
      );
    }
  }
  async function getContacts() {
    const props = ["name", "tel"];
    const opts = { multiple: false };

    try {
      const contacts = await navigator.contacts.select(props, opts);
      alert(JSON.stringify(contacts));
      if (contacts && contacts[0]) {
        setName(contacts[0].name[0]);
        setPhone(contacts[0].tel[0]);
      }
    } catch (err) {
      alert(err);
    }
  }

  return (
    <div className="App">
      <div>
        <div>Name: {name} </div>
        <div>Mob No: {phone} </div>
        <button className="mt-10" onClick={() => openContactPicker()}>
          Select contacts
        </button>
      </div>
    </div>
  );
}

export default App;
