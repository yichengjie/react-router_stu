import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom' ;
import Home from './Home.jsx' ;
import About from './About.jsx' ;
import Navbar from './Navbar.jsx' ;
import ListGroup from './ListGroup.jsx' ;


const BasicExample = () => (
  <Router>
    <div className="App">
        <Navbar />
        <div className="main-content">
          <div className ="content-left">
            <ListGroup />
          </div>
          <div className="content-right">
             <Route exact path="/" component={Home}/>
             <Route path="/about" component={About}/>
          </div>
        </div>
    </div>
  </Router>
)
export default BasicExample ;