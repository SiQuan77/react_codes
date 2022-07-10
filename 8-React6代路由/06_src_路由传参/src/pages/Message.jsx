import React,{useState} from 'react';
import {Link, Outlet} from "react-router-dom";
//因为不需要高亮效果所以只引入Link路由即可

function Message(props) {
    const [messages,setmessages] = useState([
        {id:'001',title:'消息1',content:'锄禾日当午'},
        {id:'002',title:'消息2',content:'汗滴禾下土'},
        {id:'003',title:'消息3',content:'谁知盘中餐'},
        {id:'004',title:'消息4',content:'粒粒皆辛苦'},
    ])
    return (
        <div>
            <ul>
                {
                    messages.map((m)=>{
                        return (
                            <li key={m.id}>
                                {/*这里使用了模板字符串以及params的传参方式*/}
                                {/*1.params传递参数<Link to={`detail/${m.id}/${m.title}/${m.content}`}>{m.title}</Link>*/}
                                {/*2.search传递参数<Link to={`detail?id=${m.id}&title=${m.title}&content=${m.content}`}>{m.title}</Link>*/}
                                {/*3.使用state传递参数*/}
                                <Link
                                to={"detail"}
                                state={{
                                    id:m.id,
                                    title:m.title,
                                    content:m.content
                                }}>{m.title}</Link>
                            </li>
                        )
                    })
                }
            </ul>
            <hr />
            <Outlet/>
        </div>
    );
}

export default Message;