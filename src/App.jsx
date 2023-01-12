// import React from 'react';
// import { Cart, FlexContent, Footer, Hero, Login, Navbar, Sales, Stories } from './components';
// import { heroapi, popularsales, toprateslaes, highlight, sneaker, story, footerAPI } from './data/data.js';

// const App = () => {
//   return (
//    <>
//       <Login/>
//       <Navbar/>
//       <Cart />
//       <main className='flex flex-col gap-16 relative'>
//         <Hero heroapi={heroapi} />
//         <Sales endpoint={popularsales} ifExists />
//         <FlexContent endpoint={highlight} ifExists />
//         <Sales endpoint={toprateslaes} />
//         <FlexContent endpoint={sneaker} />
//         <Stories story={story} />
//       </main>
//       <Footer footerAPI={footerAPI} />
//    </>
//   )
// }
// App.js

import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import App1 from './App1';
import Login from './components/Login';

class App extends Component {
  render() {
    return (
    <Router>
        <div>
          <h2>Welcome to React Router Tutorial</h2>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/body'} className="nav-link"> Body </Link></li>
            {/* <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
            <li><Link to={'/about'} className="nav-link">About</Link></li> */}
          </ul>
          </nav>
          <hr />
          
          <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/">
            <App1 />
          </Route>
              {/* <Route exact path='/body' component={App1} /> */}
              {/* <Route path='/contact' component={Contact} />
              <Route path='/about' component={About} /> */}
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;