import React from 'react'
import './index.css'


export default function Footer(props) {

    function checkAll(event){
        props.checkAbove(event.target.checked)//传真假值给这个函数
        console.log("测试一下event")
        console.log(event)
    }
    function clearAllDone(){
        if(window.confirm("确定删除全部已完成的任务吗？")){
            if (props.todos.length > 0){
                props.clearDone()
            }else {
                alert("抱歉，没有可删除的任务")
            }
        }
    }

    const {todos} = props
    const doneCount =
        todos.reduce((preValue,current)=>{
            return preValue + (current['done'] === true ? 1 : 0)
        },0)
    const all = todos.length

    return (
        <div className="todo-footer">
            <label>
                <input
                    type="checkbox"
                    checked={all === doneCount && all > 0}
                    onChange={checkAll}/>
            </label>
            <span>
          <span>已完成{doneCount}</span> / 全部{all}
        </span>
            <button className="btn btn-danger" onClick={clearAllDone}>清除已完成任务</button>
        </div>
    )
}



// export default class Footer extends Component {
//
//   checkAll = (event)=>{
//     this.props.checkAbove(event.target.checked)
//   }
//
//   clearAllDone = ()=>{
//     if(window.confirm('确定删除全部已完成的任务吗？')){
//       if(this.props.todos.length > 0){
//         this.props.clearDone()
//       } else {
//         alert('抱歉，没有可删除的任务')
//       }
//     }
//   }
//
//   render() {
//
//     const {todos} = this.props
//     const doneCount =
//       todos.reduce((preValue,current)=>{
//         return preValue + (current['done'] === true ? 1 : 0)
//       },0)
//     const all = todos.length
//
//     return (
//       <div className="todo-footer">
//         <label>
//           <input
//            type="checkbox"
//            checked={all === doneCount && all > 0}
//            onChange={this.checkAll}/>
//         </label>
//         <span>
//           <span>已完成{doneCount}</span> / 全部{all}
//         </span>
//         <button className="btn btn-danger" onClick={this.clearAllDone}>清除已完成任务</button>
//       </div>
//     )
//   }
// }
