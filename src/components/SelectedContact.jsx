import React from 'react';
import {useState, useEffect} from 'react';

const SelectedContact = ({selectedContactId, setSelectedContactId}) => {
    const [contact, setContact] = useState('')
    
    useEffect(() => {
        async function fetchContacts(){
            try { 
                const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`)
                const result = await response.json();
                setContact(result);
            } catch (error) {
                console.error(error);
            }
    }
    fetchContacts();
},[selectedContactId, setSelectedContactId]);


return (

    <div>
    <h2>{contact.name}</h2>
    <p>{contact.email}</p>
    <p>{contact.phone}</p>
    <button onClick={() => setSelectedContactId(null)}>Back to Contact List</button>
     </div>
);

}


export default SelectedContact;