import React from 'react';
import PropTypes from 'prop-types';

import Currency from './Currency';
import './style.scss';

const Currencies = ({
  listOfCurrencies,
  changeCurrency,
  searchedValue,
  changeSearchedValue,
}) => (
  <section className="currencies">
    <input
      value={searchedValue}
      className="currencies-title"
      placeholder="Chercher une devise"
      onChange={(event) => {
        changeSearchedValue(event.target.value);
      }}
    />
    <ul className="currencies-list">
      {listOfCurrencies.map((currency) => (
        <Currency key={currency.name} name={currency.name} changeCurrency={changeCurrency} />
      ))}
    </ul>
  </section>
);

Currencies.propTypes = {
  listOfCurrencies: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
  })).isRequired,
  changeCurrency: PropTypes.func.isRequired,
  searchedValue: PropTypes.string.isRequired,
  changeSearchedValue: PropTypes.func.isRequired,
};

export default Currencies;
