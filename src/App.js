import React, { Component } from 'react';
import styles from './App.module'
import Header from '@/layout/header'
class App extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Header />
      </div>
    );
  }
}

export default App;
