import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  NavLink
} from 'react-router-dom'

const Home = function() {
    console.info('Home comp ...') ;
    return (
        <div>
            <h2>from comp Home content is : Home</h2>
        </div>
    ) ;
} 

const About = function (){
    console.info('About comp ...') ;
    return (
        <div>
            <h2>from comp About content is : About</h2>
        </div>
    ) ;
} 


function User({match}){
    console.info('User comp ...') ;
    return (
        <div>
            <h3>from comp User content is : {match.params.username}</h3>
        </div>
    ) ;
}

function NoMatch(){
    return (
        <div><h3>from comp NoMatch : 404</h3></div>
    ) ;
}

const Topic = function ({ match }) {
    console.info('Topic --> match : ' ,match) ;
    return  (
        <div>
            <h3>{match.params.topicId}</h3>
        </div>
    ) ;
}

const Topics = function({ match }) {
    console.info('Topics --> match : ' , match) ;
    return  (
        <div>
            <h2>Topics</h2>
            <ul>
                <li>
                    <Link to={`${match.url}/rendering`}>
                        Rendering with React
                    </Link>
                </li>
                <li>
                    <Link to={`${match.url}/components`}>
                        Components
                    </Link>
                </li>
                <li>
                    <Link to={`${match.url}/props-v-state`}>
                        Props v. State
                    </Link>
                </li>
            </ul>

            <Route path={`${match.url}/:topicId`} component={Topic}/>
            <Route exact path={match.url} render={() => (
                <h3>Please select a topic.</h3>
            )}/>
        </div>
    ) ;
}


// only consider an event active if its event id is an odd number
const oddEvent = (match, location) => {
  if (!match) {
    return false
  }

  const eventID = parseInt(match.params.eventID)
  const ret = !isNaN(eventID) && eventID % 2 === 1 ;
  console.info(`eventID : ${eventID} , ret : ${ret}`) ;
  return ret ;
}


const BasicExample = () => (
  <Router>
    <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><NavLink to="/user/yicj" activeClassName="selected" isActive={oddEvent}>User</NavLink></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/topics">Topics</Link></li>
        </ul>

        <hr/>
        <Route exact path="/" component={Home}/>
        <Route path="/user/:username" component={User}/>
        
        <Route path="/about" component={About}/>
        <Route path="/topics" component={Topics}/>
    </div>
  </Router>
)
export default BasicExample ;