import './App.css';
import { Home } from './components/Home';
import { Learn } from './components/Learn';
import { NavBar } from './components/NavBar';
import { Partners } from './components/Partners';
import { Tracker } from './components/Tracker';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/learn' component={Learn} />
        <Route exact path='/tracker' component={Tracker} />
        <Route exact path='/partners' component={Partners} />
      </Switch>
    </Router>
  );
}

export default App;
