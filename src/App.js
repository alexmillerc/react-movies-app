import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { MovieDetails } from './components/MovieDetails';
import { MoviesList } from './components/MoviesList';
import "./app.css";

const App = () => (
  <>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={(props) => <MoviesList {...props} />} />
        <Route exact path="/movie/:id" render={(props) => <MovieDetails  {...props} />} />
      </Switch>
    </BrowserRouter>
  </>
);
export default App;