import React,{Component} from 'react' ;
import {withRouter} from 'react-router-dom' ;
class MainContent extends Component{
    constructor(props){
        super(props) ;
    }
    render(){
        const {location} = this.props ;
        let {name} = location.state ;
        //console.info('location: ' , location) ;
        return (
            <div>hello world {name}</div>
        ) ;
    }
}

export default withRouter(MainContent) ;