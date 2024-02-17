import styles from "./Contacts.module.css";


const Contacts = ({ items,  deleteContact}) => {

    const elements = items.map(({ id, name, number }) => <li key={id}>{name}: {number}.
        <button onClick={()=>  deleteContact (id)} className="styles.remove" type="button">Dealete</button>
    </li>)
    return (
  
        
        <div className="styles.wrapper">
         <ul>
          {elements}
        </ul>     
        </div>
      
    )
}
export default Contacts;