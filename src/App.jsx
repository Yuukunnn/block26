import './App.css'
import { useState } from 'react'
import { ContactList }  from './components/ContactList'
// import { SelectedContact } from './components/SelectedContact'


function App() {

  const [selectedContactId, setSelectedContactId] = useState(null);

  if (!selectedContactId) {
    return (
      <div>
        <ContactList setSelectedContactId={ setSelectedContactId }/>
      </div>
      );
  }

  if (selectedContactId) {
    return (
      <div>
        Selected Contact View
      </div>
    )
  }

 
}


export default App
