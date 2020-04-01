import React from "react";
import ContactItem from "../contactIem/ContactItem";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import css from "./ContactList.module.css";
import popTransition from "../transition/popTransition.module.css";
import Filter from "../filter/containerFilter";
const ContactList = ({ state }) => {
  return (
    <TransitionGroup component="ul"  className={css.list}>
      {state.filterr.length > 0
        ? state.filterr.map(contact => (
            <CSSTransition key={contact.id} timeout={250} classNames={popTransition}>
              <ContactItem key={contact.id} contact={contact} />
            </CSSTransition>
          ))
        : state.contacts.map(contact => (
            <CSSTransition  key={contact.id} timeout={250} classNames={popTransition}>
              <ContactItem key={contact.id} contact={contact} />
            </CSSTransition>
          ))}
      {state.contacts.length > 1 && (
        <CSSTransition  timeout={250} classNames={popTransition}>
          <Filter />
        </CSSTransition>
      )}
    </TransitionGroup>
  );
};

export default ContactList;
