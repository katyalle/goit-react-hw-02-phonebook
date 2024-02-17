import { Component } from "react";
import { nanoid } from "nanoid";
import MyNumbers from '../MyNumbers/MyNumbers';
import Contacts from '../Contacts/Contacts';
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
    number: '',
  filter: ''
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
    
    deleteContact = id => {
const {contacts} = this.state;
this.setState({ contacts: contacts.filter(item => item.id !== id)})
    }
    changeFilter = ({ target }) => {
        this.setState({
            filter: target.value
        })
    }
    getfilteredContacts() {
        const { filter, contacts } = this.state;

        const normalizedFilter = filter.toLowerCase();
        
        const filteredContacts = contacts.filter(({name, number}) => {
            const normalizedName = name.toLowerCase();
            const normalizedNumber = number.toLowerCase();
            return (normalizedName.includes(normalizedFilter) || normalizedNumber.includes(normalizedFilter))
        }) 
        return filteredContacts;
    }

render() {
    
    const { addContact, deleteContact, changeFilter } = this;
    const contacts = this.getfilteredContacts()
        return (
            <div>
                <h1>Phonebook</h1>
                <MyNumbers onSubmit={addContact} />
                <h2>Contacts</h2>
               <input onChange={changeFilter} name="filter" placeholder="Search" />
                <Contacts items={contacts}  deleteContact={ deleteContact } />
              
        </div>
    )
}
}
export default AllContacts
