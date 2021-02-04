import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Views/Home';
import About from './Views/About';

function App() {
  return (
    <div className = "relative pb-10 min-h-screen bg-blue-900">
      <Router>
        <Header />
        <div className = "p-3">
        {/* <div> */}
          <Switch>
            <Route exact path="/newsfeed">
              <Home />
            </Route>
            <Route path="/newsfeed/about">
              <About />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
