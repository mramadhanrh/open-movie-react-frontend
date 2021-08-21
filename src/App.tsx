import { FC } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail';

const App: FC = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/:movieId" component={MovieDetail} />
    </Switch>
  </Router>
);

export default App;
