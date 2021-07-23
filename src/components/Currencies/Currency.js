import React from 'react';
import PropTypes from 'prop-types';

const Currency = ({ name, changeCurrency }) => (
  <li
    onClick={() => {
      changeCurrency(name);
    }}
    className="currencies-item"
  >
    {name}
  </li>
);

Currency.propTypes = {
  name: PropTypes.string.isRequired,
  changeCurrency: PropTypes.func.isRequired,
};

export default Currency;
