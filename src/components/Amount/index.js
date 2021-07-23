import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Amount = ({ amount, currency }) => (
  <section className="amount">
    <p className="amount-number">{amount}</p>
    <p className="amount-currency">{currency}</p>
  </section>
);

Amount.propTypes = {
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};

export default Amount;
