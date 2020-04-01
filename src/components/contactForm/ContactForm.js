import React, { Component } from "react";
import css from "../contactForm/ContactForm.module.css";
import { v4 as uuidv4 } from "uuid";
import Alert from "../alert/Alert";
import { CSSTransition } from "react-transition-group";
import slide from "../transition/slide.module.css";

export default class ContactForm extends Component {
  state = {
    name: "",
    number: "",
    isExist: false
  };

  handleSubmit = async event => {
    const { contacts } = this.props.props;
    await event.preventDefault();
    const phoneBookItem = {
      name: this.state.name,
      number: this.state.number,
      id: uuidv4()
    };

    if (contacts.some(contact => contact.name === this.state.name)) {
      await this.setState({ isExist: true });
    }
    if (this.state.name && this.state.number && !this.state.isExist) {
      await this.props.addContact(phoneBookItem);
    }

    if (contacts.some(contact => contact.name === this.state.name)) {
      this.setState({ isExist: true });
    }
    this.setState({
      name: "",
      number: ""
    });
    setTimeout(() => {
      this.setState({ isExist: false });
    }, 2000);
  };
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit} className="form">
          <div className="nameInput">
            <span className={css.name}>Name</span>
            <input
              className="nameInput"
              type="text"
              name="name"
              onChange={this.handleChange}
              value={name}
            />
          </div>
          <div>
            <span className={css.number}>Number</span>
            <input
              type="tel"
              name="number"
              onChange={this.handleChange}
              value={number}
            />
          </div>
          <div>
            <button className={css.button} type="submit">
              ADD contact
            </button>
          </div>
        </form>
        {this.state.isExist && (
          <CSSTransition
            in={this.state.isExist}
            timeout={1000}
            classNames={slide}
            unmountOnExit
          >
            <Alert />
          </CSSTransition>
        )}
      </>
    );
  }
}
