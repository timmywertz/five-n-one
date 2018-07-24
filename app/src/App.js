import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Colors from "./pages/colors";
import ColorForm from "./pages/colors/form";
import Buzzwords from "./pages/buzzwords";
import BuzzwordForm from "./pages/buzzwords/form";
import Names from "./pages/starwars";
import Cookies from "./pages/fortune-cookies";
import Emojis from "./pages/emojis";
import EmojiForm from "./pages/emojis/form";

const Menu = props => {
  return (
    <div>
      <h1>Five in One</h1>
      <ul>
        <li>
          <Link to="/colors">Colors</Link>
        </li>
        <li>
          <Link to="/buzzwords">BuzzWords</Link>
        </li>
        <li>
          <Link to="/starwars">Star Wars Names</Link>
        </li>
        <li>
          <Link to="/fortune-cookies">Fortune Cookies</Link>
        </li>
        <li>
          <Link to="/emojis">Emojis</Link>
        </li>
      </ul>
    </div>
  );
};

const App = props => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Menu} />
          <Route exact path="/colors" component={Colors} />
          <Route path="/colors/new" component={ColorForm} />
          <Route exact path="/buzzwords" component={Buzzwords} />
          <Route path="/buzzwords/new" component={BuzzwordForm} />
          <Route exact path="/starwars" component={Names} />
          <Route exact path="/fortune-cookies" component={Cookies} />
          <Route exact path="/emojis" component={Emojis} />
          <Route path="/emojis/new" component={EmojiForm} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
