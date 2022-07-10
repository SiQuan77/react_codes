import React,{useState} from 'react';
import {Navigate, NavLink, Outlet} from "react-router-dom";

//当sum变为2时，重定向至About组件
function Home(props) {
    const [sum,setsum] =  useState(1)
    return (
        <div>
            <h2>Home组件内容</h2>
            <div>
                <ul className="nav nav-tabs">
                    <li>
                        <NavLink className="list-group-item" to={"/home/news"}>News</NavLink>
                    </li>
                    <li>
                        <NavLink className="list-group-item" to={"message"}>Message</NavLink>
                        {/*也可以这么写。写成相对路径的格式，上面写的是绝对的路由路径    */}
                    </li>
                </ul>
                <div>
                    <Outlet/>
                </div>
            </div>
        </div>
    );
}

export default Home;