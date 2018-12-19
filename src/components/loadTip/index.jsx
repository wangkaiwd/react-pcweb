import React, { Component } from 'react';
import styles from './index.module.scss'
class LoadTip extends Component {
  render() {
    return (
      <div className={styles.loadTip}>
        努力加载中...
      </div>
    );
  }
}

export default LoadTip;
