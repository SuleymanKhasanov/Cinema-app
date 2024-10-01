import './styles/App.css';
import { BrowserRouter as Router } from 'react-router-dom/cjs/react-router-dom.min';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Sidebar from '../widgets/Sidebar/Sidebar';
import Home from '../pages/Home/Home';
import Search from '../pages/Search/Search';
import Movies from '../pages/Movies/Movies';
import Series from '../pages/Series/Series';
import Anime from '../pages/Anime/Anime';
import History from '../pages/History/History';

function App() {
  return (
    <Router>
      <Sidebar />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/search">
            <Search />
          </Route>
          <Route exact path="/movies">
            <Movies />
          </Route>
          <Route exact path="/series">
            <Series />
          </Route>
          <Route exact path="/anime">
            <Anime />
          </Route>
          <Route exact path="/history">
            <History />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
