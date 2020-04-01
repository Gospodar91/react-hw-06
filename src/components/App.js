import React, { Component } from "react";
import ContactForm from "./contactForm/containerContactForm";
import ContactList from "./contactList/containerContactList";
import css from "./App.module.css";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import slide from "./transition/slide.module.css";

export default class App extends Component {
  state = {
    isLogo: false
  };

  componentDidMount() {
    this.setState({
      isLogo: true
    });
  }
  render() {
    return (
      <div className={css.container}>
        <TransitionGroup component="div" className="tGrop">
          {this.state.isLogo && (
            <CSSTransition
              in={this.state.isLogo}
              timeout={500}
              classNames={slide}
            >
              <div className={css.phonebook}>
                <h2 className={css.phonebookTitle}> Phonebook</h2>
              </div>
            </CSSTransition>
          )}
          <ContactForm submitContact={this.submitContact} />
          <ContactList />
        </TransitionGroup>
      </div>
    );
  }
}
