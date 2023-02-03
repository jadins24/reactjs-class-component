import React from 'react'
import './home.css';
const home = (props) => {
  return (
    <div className='home'>
        <div className='home-container'>
        <h1>{props.name}</h1>
        <p>{props.myName}</p>
        <button onClick={()=>props.changeName("tamil")}>click</button>
        </div>
    </div>
  )
}

export default home