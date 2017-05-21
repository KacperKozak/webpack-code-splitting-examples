import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
} from 'react-router-dom';

import styles from './App.css';
import Async from './Async';
import Home from './pages/Home';
import IPA from './pages/IPA';
import Logo from './components/Logo';

const App = () => (
  <Router>
    <div className={styles.app}>
      <nav className={styles.nav}>
        <Logo />
        <NavLink exact to="/">Home</NavLink>
        <NavLink to="/american-pale-ale">American Pale Ale</NavLink>
        <NavLink to="/porter">Porter</NavLink>
        <NavLink to="/ipa">IPA</NavLink>
        <NavLink to="/stout">Stout</NavLink>
      </nav>
      <Async load={import('./components/Test')} example="heello example">
        <p>Loading</p>
      </Async>
      <Async load={import('./components/Test2')} example="heello example 2">
        <p>Loading2</p>
      </Async>
      <div className={styles.main}>
        <Route exact path="/" component={Home} />
        <Route path="/ipa" component={IPA} />
      </div>
    </div>
  </Router>
);

export default App;
