import React from "react";
import PropTypes from "prop-types";

const Filter = ({ filter, onChange }) => (
  <>
    <p>Find contacts by name</p>
    <input type="text" name="filter" value={filter} onChange={onChange} />
  </>
);

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
