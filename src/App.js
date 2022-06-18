import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("test1");
  const [phone, setPhone] = useState("123");

  const handleClick = async () => {
    try {
      const supported = "contacts" in navigator && "ContactsManager" in window;
      //console.log(supported);
      if (supported) {
        const props = ["name", "phone"];
        const opts = { multiple: false };
        const contacts = await navigator.contacts.select(props, opts);
        setName(contacts[0]);
      }
    } catch (err) {
      throw err;
    }
  };

  return (
    <div className="App">
      <div>
        <div>Name: {name} </div>
        <div>Phone: {phone} </div>
        <button className="mt-10" onClick={handleClick}>
          Select contacts
        </button>
      </div>
    </div>
  );
}

export default App;
