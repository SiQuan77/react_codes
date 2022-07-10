import React from 'react';
import {useLocation, useSearchParams} from "react-router-dom";

function Detail(props) {
    const {state:{id,title,content}} = useLocation()//从location对象中获得state对象

    return (
        <ul>
            <li>{id}</li>
            <li>{title}</li>
            <li>{content}</li>
        </ul>
    );
}

/**
使用params传递参数
 function Detail(props) {
    const {id,title,content} = useParams()
    return (
        <ul>
            <li>{id}</li>
            <li>{title}</li>
            <li>{content}</li>
        </ul>
    );
}
 使用search传递参数
function Detail(props) {
    const [search,setsearch] = useSearchParams()
    return (
        <ul>
            <li>{search.get('id')}</li>
            <li>{search.get('title')}</li>
            <li>{search.get('content')}</li>
        </ul>
    );
}

**/




export default Detail;