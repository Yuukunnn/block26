import React from "react";

const ContactRow = ({ setSelectedContactId, contactValue }) => {
    return (
        <tr
            onClick={()=>{
                setSelectedContactId(contactValue.id)
            }} >
            <td>{ contactValue.name }</td>
            <td>{ contactValue.email }</td>
            <td>{ contactValue.phone }</td>
        </tr>
    )
}


export default ContactRow;