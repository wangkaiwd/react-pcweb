import React, { Component } from 'react';
import BaseIcon from '@/components/baseIcon'
import classNames from 'classnames'
import styles from './index.module'
import { CSSTransition } from 'react-transition-group'
class Header extends Component {
  state = {
    expand: false
  }
  onFocus = () => {
    this.setState({ expand: true })
  }
  onBlur = () => {
    this.setState({ expand: false })
  }
  render() {
    const { expand } = this.state
    return (
      <div className={styles.header}>
        <img className={styles.logo} src={require('images/logo.png')} alt="" />
        <div className={styles.headerNav}>
          <div className={styles.left}>
            <div className={classNames(styles.navItem, styles.active)}>首页</div>
            <div className={styles.navItem}>下载App</div>
            <CSSTransition
              in={expand}
              timeout={300}
              classNames={{
                enter: styles.changeEnter,
                enterActive: styles.changeEnterActive,
                enterDone: styles.changeEnterDone,
                exit: styles.changeExit,
                exitActive: styles.changeExitActive,
                exitDone: styles.changeExitDone
              }}
            >
              <div className={styles.inputBox}>
                <input
                  className={styles.input}
                  type="text"
                  placeholder="搜索"
                  onFocus={this.onFocus}
                  onBlur={this.onBlur}
                />
                <div className={styles.searchWrapper}>
                  <BaseIcon className={styles.searchIcon} name="search" />
                </div>
              </div>
            </CSSTransition>
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
