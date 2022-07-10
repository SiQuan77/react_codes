import React, { Component } from 'react'
import axios from 'axios'
import PubSub from 'pubsub-js'

export default function Search(){
  const [Search_value,setSearch_value] = React.useState('')

  let search = ()=> {
    // 1. 获取用户输入
    const value = Search_value

    // 2. 校验数据
    if(!value.trim()) return alert('please input a word')
    PubSub.publish('status', {isFirst:false, isLoading:true})

    // 3. 发送请求获取数据
    axios.get(`https://api.github.com/search/users?q=${value}`).then(
      response => {
        const {items} = response.data
        // 请求成功后，通知list存储用户数据, 更改isLoading
        PubSub.publish('status', {users:items, isLoading:false})
      },
      error => {
        console.log(error);
        // 请求失败后，存储错误信息、将isLoading变为false
        // 注意：此处的error是一个对象，真正的错误信息在error.message
        PubSub.publish('status', {errorMsg:error.message, isLoading:false})
        }
    )
  }
    return (
      <section className="jumbotron">
          <h3 className="jumbotron-heading">Search Github Users</h3>
          <div>
            <input type="text" onChange={(event)=>{setSearch_value(event.target.value)}} placeholder="enter the name you search"/>&nbsp;
            <button onClick={search}>Search</button>
            </div>        
        </section>
    )
}
