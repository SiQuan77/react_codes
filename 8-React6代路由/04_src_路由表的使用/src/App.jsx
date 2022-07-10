import React, { Component } from 'react'
import {NavLink,Navigate,useRoutes} from "react-router-dom";
import routes from './routes';

export default function  App(){
    //将注册路由的部分用路由表进行表示，路由表可以生成以前写的<Routes>包裹<Route>的结构
/**第一种写法
    const Routes_table = useRoutes([
        {
            path:'/about',
            element:<About/>
        },
        {
            path:'/home',
            element: <Home/>
        },
        {
            path:'/',
            element: <Navigate to={"/about"}/>
        }
    ])
 **/
    //第二种写法，由外部文件生成路由信息
    const Routes_table = useRoutes(routes)
    return (
    <div>
        <div className="row">
            <div className="col-xs-offset-2 col-xs-8">
                <div className="page-header"><h2>React Router Demo</h2></div>
            </div>
        </div>
        <div className="row">
            <div className="col-xs-2 col-xs-offset-2">
                <div className="list-group">
                    {/*路由链接*/}
                    <NavLink className="list-group-item" to={"/about"}>About</NavLink>
                    <NavLink className="list-group-item" to={"/home"}>Home</NavLink>
                </div>
            </div>
            <div className="col-xs-6">
                <div className="panel">
                    <div className="panel-body">
                    {/* 注册路由*/}
                        {Routes_table}
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
