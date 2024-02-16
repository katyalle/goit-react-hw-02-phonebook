import { Component } from "react";
import MyNumbers from './MyNumbers/MyNumbers';
import Contacts from './Contacts/Contacts';
import styles from "./All-contacts.module.css"


class AllContacts extends Component{
    state = {
  contacts: [],
  name: ''
}
render() {
    const { names } = this.state;
        return (
            <div>
        <MyNumbers/>
        <Contacts items={ names} />
        </div>
    )
}
}
export default AllContacts
