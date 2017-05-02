import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BasicExample from './components/BasicExample.jsx' ;
import NoMatch from './components/NoMatch.jsx' ;
import URLParameters from './components/URLParameters.jsx' ;
import CustomLink from './components/CustomLink.jsx' ;
import PreventingTransitions from './components/PreventingTransitions.jsx' ;
import RecursivePaths from './components/RecursivePaths.jsx' ;
import Sidebar from './components/Sidebar.jsx' ;
import AnimatedTransitions from './components/AnimatedTransitions.jsx' ;
import RouteConfig from './components/RouteConfig.jsx' ;
import ModalGallery from './components/ModalGallery.jsx' ;

class App extends Component {
  render() {
    return (
      <div className="App">
        <ModalGallery />
      </div>
    );
  }
}

export default App;
