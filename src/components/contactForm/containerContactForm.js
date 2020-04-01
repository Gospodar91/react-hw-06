import { addContact } from "../../redux/actions";
import { connect } from "react-redux";
import ContactForm from "./ContactForm";

const mapStateToProps = state => ({
  props: state.contacts
});
export default connect(mapStateToProps, { addContact })(ContactForm);
