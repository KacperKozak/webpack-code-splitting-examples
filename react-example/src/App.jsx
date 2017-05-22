import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
} from 'react-router-dom';

import styles from './App.css';
import Home from './pages/Home';
import IPA from './pages/IPA';
import Admin from './pages/Admin';
import Logo from './components/Logo';

const App = () => (
  <Router>
    <div className={styles.app}>
      <nav className={styles.nav}>
        <Logo />
        <NavLink exact to="/">Home</NavLink>
        <NavLink to="/Ale">Ale</NavLink>
        <NavLink to="/porter">Porter</NavLink>
        <NavLink to="/ipa">IPA</NavLink>
        <NavLink to="/stout">Stout</NavLink>
        <NavLink to="/admin">(admin)</NavLink>
      </nav>
      <div className={styles.main}>
        <Route exact path="/" component={Home} />
        <Route path="/ipa" component={IPA} />
        <Route path="/admin" component={Admin} />
      </div>
    </div>
  </Router>
);

export default App;
