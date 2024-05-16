import "./App.css";
import { useState, useEffect } from "react";
import ContactList from "./components/ContactList";
import SelectedContact from "./components/SelectedContact";

function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);

  if (!selectedContactId) {
    return (
      <div>
        <ContactList setSelectedContactId={setSelectedContactId} />
      </div>
    );
  }

  if (selectedContactId) {
    return (
      <div>
        <SelectedContact
          selectedContactId={selectedContactId}
          setSelectedContactId={setSelectedContactId}
        />
      </div>
    );
  }
}

export default App;
