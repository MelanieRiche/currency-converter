import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Header = ({ amount, setAmount }) => {
  let currency;
  if (amount > 1) {
    currency = 'euros';
  }
  else {
    currency = 'euro';
  }
  return (
    <header className="header">
      <h1 className="header-title">Converter</h1>
      <p className="header-amount">
        <input
          value={amount}
          className="header-input"
          type="number"
          onInput={(event) => {
            setAmount(event.target.value);
          }}
        />
        {currency}
      </p>
    </header>
  );
};

Header.propTypes = {
  amount: PropTypes.number,
  setAmount: PropTypes.func.isRequired,
};

Header.defaultProps = {
  amount: 1,
};

export default Header;
