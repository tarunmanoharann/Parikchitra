
import React from 'react'
import './Choice.css'
import { useNavigate } from 'react-router-dom'
import Footer from './Footer'

function Choice() {


const nav = useNavigate()
  return (
    <>
    <div className='main-container'>

<ul className="box">
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
</ul>

<div className='title'>
  <h1>Parikchitra</h1>
</div>

<div className='choice-container'>

<div className='choice'>
  <button onClick={()=>nav("/slogin")}>Student</button>
  <button>Teacher</button>
</div>

</div>

</div>

<Footer/>

    </>
  )
}

export default Choice


