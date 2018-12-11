import React, { Component } from 'react';
import styles from './index.module.scss'
import PropTypes from "prop-types";
class BaseIcon extends Component {
  render() {
    const { name, onClick } = this.props
    return (
      <div className={styles.iconWrapper} onClick={onClick}>
        <svg className={styles.icon} aria-hidden="true">
          <use xlinkHref={`#js-${name}`}></use>
        </svg>
      </div >
    );
  }
}
BaseIcon.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func
};
export default BaseIcon;
