/* eslint-disable class-methods-use-this */
import React from 'react';

import currencies from 'src/data/currencies';
import Header from 'src/components/Header';
import Currencies from 'src/components/Currencies';
import Amount from 'src/components/Amount';
import Toggler from 'src/components/Toggler';

import './style.scss';

class Converter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      amount: 1,
      currency: 'United States Dollar',
      searchedCurrency: '',
    };
    this.toggleOpen = this.toggleOpen.bind(this);
    this.setCurrency = this.setCurrency.bind(this);
    this.setAmount = this.setAmount.bind(this);
    this.setSearchedCurrency = this.setSearchedCurrency.bind(this);
  }

  componentDidMount() {
    this.pageTitleEffect();
    this.handleWindowEscapeEffect();
  }

  componentDidUpdate() {
    this.pageTitleEffect();
  }

  // eslint-disable-next-line react/sort-comp
  pageTitleEffect() {
    const { currency } = this.state;
    document.title = `Converter: € > ${currency}`;
  }

  handleWindowEscapeEffect() {
    window.addEventListener('keyup', (event) => {
      if (event.code === 'Escape') {
        this.toggleOpen();
      }
    });
  }

  setSearchedCurrency(searchedCurrency) {

    this.setState({
      searchedCurrency,
    });
  }

  setAmount(newAmount) {
    this.setState({
      amount: Number(newAmount),
    });
  }

  setCurrency(newCurrency) {
    this.setState({
      currency: newCurrency,
    });
  }

  // eslint-disable-next-line react/sort-comp
  toggleOpen() {
    const { open } = this.state;
    this.setState({
      open: !open,
    });
  }

  // eslint-disable-next-line class-methods-use-this
  convert(baseAmount, currencyName) {
    const currentCurrency = currencies.find((testedCurrency) => (
      testedCurrency.name === currencyName
    ));
    const { rate } = currentCurrency;
    return Math.round(baseAmount * rate * 100) / 100;
  }

  /**
   * Get currencies filtered by a searched value
   * @param {array} listOfCurrencies - A list of currencies
   * @param {string} searchedValue - The searched value
   * @return {array} a new array of filtered values
   */
  // eslint-disable-next-line class-methods-use-this
  getFilteredCurrencies(listOfCurrencies, searchedValue) {
    if (searchedValue === '') {
      return listOfCurrencies;
    }
    const loweredSearchValue = searchedValue.toLowerCase();

    const results = listOfCurrencies.filter((currency) => (
      currency.name.toLowerCase().includes(loweredSearchValue)
    ));
    return results;
  }

  render() {
    // destructuring
    const {
      amount,
      currency,
      open,
      searchedCurrency,
    } = this.state;

    const convertedAmount = this.convert(amount, currency);
    const filteredCurrencies = this.getFilteredCurrencies(currencies, searchedCurrency);

    return (
      <div className="converter">
        <Header amount={amount} setAmount={this.setAmount} />
        <Toggler toggleOpen={this.toggleOpen} open={open} />
        {open && (
          <Currencies
            listOfCurrencies={filteredCurrencies}
            changeCurrency={this.setCurrency}
            searchedValue={searchedCurrency}
            changeSearchedValue={this.setSearchedCurrency}
          />
        )}
        <Amount amount={convertedAmount} currency={currency} />
      </div>
    );
  }
}

export default Converter;
