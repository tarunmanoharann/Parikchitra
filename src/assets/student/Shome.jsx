import React from 'react'
import Snav from './s_components/Snav'
import Sfooter from './s_components/Sfooter'
import Scourses from './s_components/Scourses'


function Shome() {
  return (
    <div className='Shome-main'>
     <Snav/>

     <main className='main-content'>

      <Scourses/>

     </main>

     
    </div>
  )
}

export default Shome