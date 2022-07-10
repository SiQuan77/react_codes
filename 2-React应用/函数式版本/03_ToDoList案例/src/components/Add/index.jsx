import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import './index.css'

export default function Add(props) {
    function handleKeyUp(event) {
        //event.keyCode==13代表的就是回车键Enter，意思就是点击回车
        if (event.keyCode === 13){
          if(event.target.value.trim() === ''){
            alert('输入内容不能为空')
          }else {
            const todoObj = {
              id: uuidv4(),//生成唯一的uuid
              name: event.target.value,//获得输入的值
              done: false,//默认是没有做的
            }
            props.add(todoObj)
            event.target.value = ''//清空输入框
          }
        }
    }
    return (
        <div className="todo-header">
          <input type="text" onKeyUp={handleKeyUp} placeholder="请输入你的任务名称，按回车键确认" />
        </div>
    )

}


/**类式组件
 *
 export default class Add extends Component {
  handleKeyUp = (event)=>{
    if(event.keyCode === 13){
      if(event.target.value.trim() === ''){
        alert('输入内容不能为空')
      } else {
        const todoObj = {
          id: uuidv4(),
          name: event.target.value,
          done: false,
        }
        this.props.add(todoObj)
        event.target.value = ''

      }
    }
  }

  render() {
    return (
      <div className="todo-header">
        <input type="text" onKeyUp={this.handleKeyUp} placeholder="请输入你的任务名称，按回车键确认" />
      </div>
    )
  }
}
 * **/