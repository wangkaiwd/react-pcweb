import React, { Component } from 'react';
import styles from './index.module'
class Header extends Component {
  render() {
    return (
      <div className={styles.header}>
        <a href="javascript:;">
          <img src={require('@/assets/images/logo.png')} alt="" />
        </a>

      </div>
    );
  }
}

export default Header
