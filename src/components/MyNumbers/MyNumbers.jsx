import { Component } from "react";
import { nanoid } from 'nanoid'
import styles from "./My-numbers.module.css";




const INITIAL_STATE = {
    name: "",
    number: "",
};
  
class Phonebook extends Component {

    contactNameId = nanoid();
    contactNumberId = nanoid();

    state = {...INITIAL_STATE}

    handleChange = ({target}) => {
        const { name, value } = target;
        this.setState({
            [name]:value
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit({ ...this.state });
        // this.reset;
    
    }

    reset() {
            this.setState({...INITIAL_STATE})
    }

    render() {
        const { contactNameId, contactNumberId, handleSubmit, handleChange } = this;
        const { name, number } = this.state;
        return (

            <form onSubmit={handleSubmit} className={styles.form} >
                <div className={styles.formGroup}>
                    <label htmlFor={contactNameId} >Name</label>
                    <input value={name} required name="name" onChange={handleChange} id={contactNameId} placeholder="Name" />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor={contactNumberId}>Number</label>
                    <input type="tel" value={number} required name="number" onChange={handleChange} id={contactNumberId} placeholder="Number" />
                   
                </div>
                <button type="submit">Add contact</button>
            </form>
        )

    }
}
export default Phonebook;