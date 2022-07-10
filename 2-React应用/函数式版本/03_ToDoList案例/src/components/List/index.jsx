import React, { Component } from 'react'
import Item from '../Item'
import "./index.css" 

export default function List(props){
    const {todos,deleteItem,updateItem} = props
    return (
      <ul className="todo-main">
        {
          todos.map((todoObj,index)=>{
            return <Item 
              key={todoObj.id} 
              index={index}
              {...todoObj}
              deleteItem={deleteItem}
              updateItem={updateItem}
            />
          })
        }
      </ul>
    )
}
