import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { MovieDetails } from './components/MovieDetails';
import { MoviesList } from './components/MoviesList';
import Playlist from './components/Playlist';
import "./app.css";

const App = () => (
  <>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={(props) => <MoviesList {...props} />} />
        <Route exact path="/movie/:id" render={(props) => <MovieDetails  {...props} />} />
        <Route exact path="/playlist" render={(props) => <Playlist {...props} />} />
        <Route render={() => <> <strong>Error 404</strong> </>} />
      </Switch>
    </BrowserRouter>
  </>
);
export default App;