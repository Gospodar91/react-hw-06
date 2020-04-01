import { connect } from "react-redux";
import ContactList from './ContactList'
const mapStateToProps = state => ({
    state: state.contacts
  });
  
  export default connect(mapStateToProps)(ContactList);
  