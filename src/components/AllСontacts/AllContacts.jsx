import { Component } from "react";
import { nanoid } from "nanoid";
import MyNumbers from '../MyNumbers/MyNumbers';
import Contacts from '../Contacts/Contacts';
import Filter from "components/Filter/Fillter";
import styles from "./All-contacts.module.css"



class AllContacts extends Component{
state = {
  contacts: [
    {id:nanoid(), name: 'Rosie Simpson', number: '459-12-56'},
    {id:nanoid(), name: 'Hermione Kline', number: '443-89-12'},
    {id:nanoid(), name: 'Eden Clements', number: '645-17-79'},
    {id:nanoid(), name: 'Annie Copeland', number: '227-91-26'},
  ],
  name: '',
  number: ''
    }
    addContact = (data) => {
        const { name, number } = data;
        const normalizedName = name.toLowerCase();
        const normalizedNumber = number.toLowerCase();
        const { contacts } = this.state;

        const duplicate = contacts.find(item => {
            const normalizedCurrentName = item.name.toLowerCase();
            const normalizedCurrentNumber = item.number.toLowerCase();
            return (normalizedCurrentName === normalizedName && normalizedCurrentNumber === normalizedNumber);

        })
        if (duplicate) {
          return  alert (`${name} is already in contacts`)
        }
        this.setState(({contacts}) => {
            const newContactc = {
                id: nanoid(),
                ...data,
            }
            return {
              contacts:  [...contacts, newContactc]
            }
            
            
})
    }
    
    deleteContact = (id) => {
        this.setState(({ contacts }) => {
            const newContacts = contacts.filter(item = item.id !== id);

            return {
                contacts: newContactcs,
            }
    })
}

render() {
    const { contacts } = this.state;
    const { addContact,  deleteContact  } = this;
        return (
            <div>
                <h1>Phonebook</h1>
                <MyNumbers onSubmit={addContact} />
                <Filter />
                <h2>Contacts</h2>
                <Contacts items={contacts}  deleteContact={ deleteContact } />
              
        </div>
    )
}
}
export default AllContacts
