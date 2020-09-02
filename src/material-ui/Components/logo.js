import React from "react";
import Gazıok1 from './images/gazıok1.svg'; // Path to your icons.svg
import PropTypes from 'prop-types';


const Gazıok1 = ({ name, color, size }) => (
  <svg className={`icon icon-${name}`} fill={color} width={size} height={size}>
    <use xlinkHref={`${Icons}#icon-${name}`} />
  </svg>
);

Gazıok1.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.number
};

export default Gazıok1;