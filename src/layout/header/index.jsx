import React, { Component } from 'react';
import styles from './index.module'
class Header extends Component {
  render() {
    return (
      <div className={styles.header}>
        <a href="javascript:;">
          <img className={styles.logo} src={require('@/assets/images/logo.png')} alt="" />
        </a>
        <div className={styles.headerNav}>
        
        </div>

      </div>
    );
  }
}

export default Header
