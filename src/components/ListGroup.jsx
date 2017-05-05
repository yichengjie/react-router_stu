import React from 'react'; 
import {Link} from 'react-router-dom' ;
function ListGroup(){
    /**
     * <Link to={{
        pathname: '/courses',
        search: '?sort=name',
        hash: '#the-hash',
        state: { fromDashboard: true }
        }}/>
     */
    const toLink1 = {pathname: '/main',hash:'1',state: { name:'OC附加服务1' }} ;
    const toLink2 = {pathname: '/main',hash:'2',state: { name:'OC附加服务2' }} ;
    const toLink3 = {pathname: '/main',hash:'3',state: { name:'OC附加服务3' }} ;
    const toLink4 = {pathname: '/main',hash:'4',state: { name:'OC附加服务4' }} ;
    return(
        <ul className="list_group">
            <li className="list_item"><Link to={toLink1}>OC附加服务1</Link></li>
            <li className="list_item"><Link to={toLink2}>OC附加服务2</Link></li>
            <li className="list_item"><Link to={toLink3}>OC附加服务3</Link></li>
            <li className="list_item"><Link to={toLink4}>OC附加服务4</Link></li>
        </ul>
    ) ;
}

export default ListGroup ;