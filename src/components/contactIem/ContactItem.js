import React from "react";
import css from "../contactIem/ContactItem.module.css";
import { connect } from "react-redux";
import {delContact} from '../../redux/actions'
  const ContactItem = ({contact, 

   delContact }) => {



  return (
    <>
      <li key={contact.id} className='phoneListItem'>
        <h3 className={css.name}>{contact.name} </h3>
        <p className={css.number}>{contact.number}</p>
        <button
          className={css.button}
          onClick={()=>delContact(contact.id)}
          type="button"
          
        >
          Delete contact
        </button>
      </li>
    </>
  );
};
const mapStateToProps = state =>({

  state:state

}) 


export default connect(mapStateToProps,{delContact})( ContactItem)
