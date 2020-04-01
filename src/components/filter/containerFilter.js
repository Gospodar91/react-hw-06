import { connect } from "react-redux";
import { filterContact } from "../../redux/actions";
import Filter from "./Filter";

export default connect(null, { filterContact })(Filter);
