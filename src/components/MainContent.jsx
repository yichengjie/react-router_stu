import React,{Component} from 'react' ;
import {withRouter} from 'react-router-dom' ;
import outputJson from './data/output.json' ;
class MainContent extends Component{
    constructor(props){
        super(props) ;
        this.state ={
            inputValue:'',
            outputValue:''
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
    handleQuery = (event) => {
        this.setState({outputValue:outputJson}) ;
    }
    render(){
        const {location} = this.props ;
        let {name} = location.state ;
        //console.info('location: ' , location) ;
        const outputValue = this.state.outputValue ;
        return (
            <div className="main-edit-container">
                <textarea className="inputTextarea" 
                    value={this.state.inputValue}
                    onInput={this.handleInput}></textarea>
                <br/>
                <br/>
                <button className="btn btn-primary main-btn" onClick={this.handleQuery}>GO</button>
                <br/>
                <br/>
                <pre className="output-region">
                    {outputValue ? JSON.stringify(this.state.outputValue,null,2) : ''}
                </pre>
            </div>
        ) ;
    }
}

export default withRouter(MainContent) ;