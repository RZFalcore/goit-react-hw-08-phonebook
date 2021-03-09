import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { contactsActions, contactsSelectors } from "../../redux/contacts";

const Filter = ({ filter, onChange }) => (
  <>
    <p>Find contacts by name</p>
    <input
      type="text"
      name="filter"
      value={filter}
      onChange={(e) => onChange(e.target.value)}
    />
  </>
);

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  filter: contactsSelectors.getFilter(state),
});

const mapDispatchToProps = {
  onChange: contactsActions.filterContactAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
