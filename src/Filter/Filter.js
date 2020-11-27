import React from "react";

const Filter = ({ filter, onChange }) => (
  <>
    <p>Find contacts by name</p>
    <input type="text" name="filter" value={filter} onChange={onChange} />
  </>
);

export default Filter;
