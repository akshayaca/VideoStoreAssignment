import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'; // Import HashRouter
import Header from './Header';
import BaseComponent from './BaseComponent';
import MovieAndTVShowListing from './MovieAndTVShowListing';
import DetailsPage from './DetailsPage';
import Footer from './Footer';
import '../css/App.css';

const App = () => {
  return (
    <Router basename="/"> {/* Use HashRouter and set the basename (if needed) */}
      <div className="App min-h-screen flex flex-col">
        <Header />
        <main className="bg-black flex-grow">
          <Switch>
            <Route exact path="/">
              <BaseComponent />
            </Route>
            <Route path="/moviestvlisting">
              <MovieAndTVShowListing />
            </Route>
            <Route path="/details/:id">
              <DetailsPage />
            </Route>
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
