import React from 'react'
import './App.css'

const App = () => {
  return (
    <div className="container">
      <h1>Counter App with React and Redux</h1>
      <div className="content">
        <a className="square_btn">Minus</a>
        <input  className="input-area" type="text" value="0" />
        <a  className="square_btn">Plus</a>
      </div>
    </div>
  )
}

export default App
