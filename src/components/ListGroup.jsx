import React from 'react'; 
import {Link} from 'react-router-dom' ;
function ListGroup(){
    const toLink1 = {pathname: '/main',hash:'1',state: { name:'OC附加服务' }} ;
    const toLink2 = {pathname: '/main',hash:'2',state: { name:'生产后沙峪' }} ;
    const toLink3 = {pathname: '/main',hash:'3',state: { name:'ABR附加服务' }} ;
    const toLink4 = {pathname: '/main',hash:'4',state: { name:'规则中心' }} ;
    return(
        <ul className="list_group">
            <li className="list_item"><Link to={toLink1}>OC附加服务</Link></li>
            <li className="list_item"><Link to={toLink2}>生产后沙峪</Link></li>
            <li className="list_item"><Link to={toLink3}>ABR附加服务</Link></li>
            <li className="list_item"><Link to={toLink4}>规则中心</Link></li>
        </ul>
    ) ;
}

export default ListGroup ;