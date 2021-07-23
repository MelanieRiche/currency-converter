import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Toggler = ({ toggleOpen, open }) => (
  <button className="toggler" type="button" onClick={toggleOpen}>
    {open ? 'Fermer' : 'Ouvrir' }
  </button>
);

Toggler.propTypes = {
  toggleOpen: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default Toggler;
