import About from "../pages/About";
import Home from "../pages/Home";
import Message from '../pages/Message'
import News from '../pages/News'
import {Navigate} from "react-router-dom";
import React from "react";


export default [
    {
        path:'/about',
        element:<About/>
    },
    {
        path:'/home',
        element: <Home/>,
        children:[
            {
                path:'news',
                element:<News/>
            },
            {
                path:'message',
                element: <Message/>
            },
            //重定向默认显示news子组件
            {
                path:'/home/',
                element: <Navigate to={"./news"}/>
            }
        ]
    },
    {
        path:'/',
        element: <Navigate to={"/about"}/>
    }
]