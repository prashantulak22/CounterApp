import React from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux';
import { numDecrease, numIncrease } from './Actions/Action';

const App = () => {
  const myState = useSelector(state => state.counterNumber);
  const dispatch = useDispatch()
  return (
    <div className="container">
      <h1>Counter App with React and Redux</h1>
      <div className="content">
        <a className="square_btn" onClick={() => dispatch(numDecrease())}>Minus</a>
        <input className="input-area" type="text" value={myState} />
        <a className="square_btn" onClick={() => dispatch(numIncrease())}>Plus</a>
      </div>
    </div>
  )
}

export default App
