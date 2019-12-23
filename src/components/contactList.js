import React from "react";
import Contact from "./contact"

const person = [
    {
        name :"Anita Sutton",
        avatar : "https://www.erenumerique.fr/wp-content/uploads/2018/11/Super-Mario.jpg",
        status : true
    },
    {
        name : "Jim Goerge",
        avatar : "https://www.erenumerique.fr/wp-content/uploads/2018/11/Super-Mario.jpg",
        status : true
    },
    {
        name : "Mario ",
        avatar : "https://www.erenumerique.fr/wp-content/uploads/2018/11/Super-Mario.jpg",
        status : true
    },
    {
        name : "Momo ",
        avatar : "https://www.erenumerique.fr/wp-content/uploads/2018/11/Super-Mario.jpg",
        status : false
    },
    {
        name :"Winny ",
        avatar : "https://www.erenumerique.fr/wp-content/uploads/2018/11/Super-Mario.jpg",
        status : false
    }

  ];

  const ContactList = () => (
      <div>
          {person.map(item =>(<Contact name={item.name} avatar={item.avatar} status = {item.status} />))}
      </div>
  );

  export default ContactList;