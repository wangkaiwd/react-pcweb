import React, { Component } from 'react';
import BaseIcon from '@/components/baseIcon'
import classNames from 'classnames'
import styles from './index.module'
class Header extends Component {
  render() {
    return (
      <div className={styles.header}>
        <img className={styles.logo} src={require('images/logo.png')} alt="" />
        <div className={styles.headerNav}>
          <div className={styles.left}>
            <div className={classNames(styles.navItem, styles.active)}>首页</div>
            <div className={styles.navItem}>下载App</div>
            <div className={styles.inputBox}>
              <input className={styles.input} type="text" placeholder="搜索" />
              <BaseIcon className={styles.searchIcon} name="search" />
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.navItem}>
              <BaseIcon name="Aa" />
            </div>
            <div className={styles.navItem}>登录</div>
          </div>
        </div>
        <div className={styles.personal}>
          <p className={styles.register}>注册</p>
          <p className={styles.write}>
            <BaseIcon name="pen" />写文章
          </p>
        </div>
      </div>
    );
  }
}

export default Header
