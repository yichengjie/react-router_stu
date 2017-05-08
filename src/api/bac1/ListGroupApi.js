export function getListGroupRouteData(){
    return [
        {
            title:'OC附加服务',
            key:'OC附加服务',
            pathname:'/main'
        },
        {
            title:'生产后沙峪',
            key:'生产后沙峪',
            pathname: '/main',
        },
        {
            title:'ABR附加服务',
            key:'ABR附加服务',
            pathname: '/main',
        },
        {
            title:'规则中心',
            key:'规则中心',
            pathname: '/main',
        }
    ] ;
}
//{pathname: '/main',hash:'1',state: { name:'OC附加服务' }},
export function assembleLocationByItem(item){
    const {title,key,pathname} = item ;
    return {
        pathname,
        hash:key,
        state:{name:title}
    } ;
}
export function findItemByHash(list,hash){
    let retObj = list.find(function(item){
        return item.key === hash.substring(1) ;
    }) ;
    return retObj ;
}