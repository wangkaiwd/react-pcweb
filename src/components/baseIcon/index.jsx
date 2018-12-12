import React, { Component } from 'react';
import styles from './index.module.scss'
import PropTypes from "prop-types";
import classNames from 'classnames'
class BaseIcon extends Component {
  render() {
    const { name, onClick, className } = this.props
    return (
      <span className={classNames(styles.iconWrapper, className)} onClick={onClick}>
        <svg className={styles.icon} aria-hidden="true">
          <use xlinkHref={`#js-${name}`}></use>
        </svg>
      </span>
    );
  }
}
BaseIcon.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string
};
BaseIcon.defaultProps = {
  className: ''
}
export default BaseIcon;
