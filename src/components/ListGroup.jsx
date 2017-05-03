import React,{Component} from 'react'; 

function ListGroup(){

    return(
        <div className="list-group">
            <a href="#" className="list-group-item active">
                SIH测试工具
            </a>
            <a href="#" className="list-group-item">OC附加服务</a>
            <a href="#" className="list-group-item">ABR附加服务</a>
            <a href="#" className="list-group-item">组件测试平台</a>
            <a href="#" className="list-group-item">规则中心</a>
        </div>
    ) ;
}

export default ListGroup ;