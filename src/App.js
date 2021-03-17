import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
import Header from "./components/common/Header";
import JournalistDetail from "./components/Journalist/JournalistDetail";
import JournalistList from "./components/Journalist/JournalistList";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/search-media">
            <JournalistList />
          </Route>
          <Route path="/journalist/:id">
            <JournalistDetail />
          </Route>
          <Route path="*">
            <Route
              render={() => <Redirect to={{ pathname: "/search-media" }} />}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
