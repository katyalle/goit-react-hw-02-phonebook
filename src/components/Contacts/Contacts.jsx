import styles from "./Contacts.module.css"



const Contacts = ({ items }) => {

    const elements = items.map (({id, name, number}) => <li key={id}>(name), (number)</li>)
    return (
  
        
        <div className="styles.wrapper">
         <ul>
          {elements}
        </ul>     
        </div>
      
    )
}
export default Contacts;