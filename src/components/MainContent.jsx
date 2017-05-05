import React,{Component} from 'react' ;
import {withRouter} from 'react-router-dom' ;
class MainContent extends Component{
    constructor(props){
        super(props) ;
        this.state ={
            inputValue:'',
            outputValue:{
                    "name": "demo-app",
                    "version": "0.1.0",
                    "private": true,
                    "dependencies": {
                        "bootstrap": "^3.3.7",
                        "prop-types": "^15.5.8",
                        "react": "^15.5.4",
                        "react-dom": "^15.5.4",
                        "react-router-dom": "^4.1.1",
                        "react-transition-group": "^1.1.3"
                    },
                    "devDependencies": {
                        "react-scripts": "0.9.5"
                    },
                    "scripts": {
                        "start": "react-scripts start",
                        "build": "react-scripts build",
                        "test": "react-scripts test --env=jsdom",
                        "eject": "react-scripts eject"
                    }
                }
        } ;
    }
    componentWillReceiveProps(nextProps){
        const {location} = this.props ;
        let {name} = location.state ;
        let templateInfo = '模版字符窜 : ' +  name ;
        this.setState({inputValue:templateInfo}) ;
    }
    handleInput = (event) =>{
        let value = event.target.value ;
        this.setState({inputValue:value}) ;
    }
    render(){
        const {location} = this.props ;
        let {name} = location.state ;
        //console.info('location: ' , location) ;
        return (
            <div className="main-edit-container">
                <textarea className="inputTextarea" 
                    value={this.state.inputValue}
                    onInput={this.handleInput}></textarea>
                <br/>
                <br/>
                <button className="btn btn-primary main-btn">GO</button>
                <br/>
                <br/>
                <pre className="output-region">
                    { JSON.stringify(this.state.outputValue,null,2)}
                </pre>
            </div>
        ) ;
    }
}

export default withRouter(MainContent) ;