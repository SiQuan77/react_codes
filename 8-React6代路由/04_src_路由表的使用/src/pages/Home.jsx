import React,{useState} from 'react';
import {Navigate} from "react-router-dom";

//当sum变为2时，重定向至About组件
function Home(props) {
    const [sum,setsum] =  useState(1)
    return (
        <div>
            <h3>我是Home的内容</h3>
            {sum === 2 ? <Navigate to={"/about"}/> : <h4>当前的sum值为{sum}</h4>}
            <button onClick={()=>setsum(2)}>点我将sum变为2</button>
        </div>
    );
}

export default Home;