import React, { Component } from 'react'
import Search from './components/Search'
import List from './components/List'
import './components/List/index.css'

export default function  App(){
    return (
      <div className="container">
        <Search/>
        <List/>
      </div>
    )
}
