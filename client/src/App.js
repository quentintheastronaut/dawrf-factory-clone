import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <div className="Body">
          <Switch>
            <Route path="/">
              <Home />
            </Route>
            
          </Switch>
        </div>
    </Router>
    </div>
  );
}

export default App;
