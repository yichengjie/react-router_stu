import React,{Component} from 'react' ;
import {Link} from 'react-router-dom' ;
function Navbar(){
    //<Link to="/">Home</Link>
    return (
        <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-6" aria-expanded="false">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="#">Brand</a>
                </div>

                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-6">
                    <ul className="nav navbar-nav">
                        <li className="active"><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><a href="#">Link</a></li>
                    </ul>
                </div>
            </div>
    </nav>
    ) ;
}

export default Navbar ;