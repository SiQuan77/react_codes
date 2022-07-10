import React, { Component } from 'react'
import Search from './components/Search'
import List from './components/List'
import './components/List/index.css'

export default function App(){

  const [users,setusers] = React.useState([])
  const [isFirst,setisFirst] = React.useState(true)
  const [isLoading,setisLoading] = React.useState(false)
  const [errorMsg,seterrorMsg] = React.useState('')

  function updateobj(obj){
    setusers(obj.users)
    setisFirst(obj.isFirst)
    setisLoading(obj.isLoading)
    seterrorMsg(obj.errorMsg)
  }

  let updateAppState = (obj) =>{
    updateobj(obj)
  }

  // saveUsers = (userArr)=>{
  //   this.setState({users:userArr})
  // }
    return (
      <div className="container">
        <Search updateAppState={updateAppState}/>
        <List users={users} isFirst={isFirst} isLoading={isLoading} errorMsg={errorMsg}/>
      </div>
    )
}
/**
 export default class App extends Component {

  state = {
    users:[], // 存储用户信息
    isFirst:true, // 是否为初始展示
    isLoading:false, // 标识是否为加载中
    errorMsg:'' // 存储错误信息
  }

  updateAppState = (obj) =>{
    this.setState(obj) // 借用属性名和属性值相同的特点写的简写方式
  }

  // saveUsers = (userArr)=>{
  //   this.setState({users:userArr})
  // }

  render() {
    return (
      <div className="container">
        <Search updateAppState={this.updateAppState}/>
        <List {...this.state}/>
      </div>
    )
  }
}
 * **/