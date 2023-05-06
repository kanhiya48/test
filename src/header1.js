import React from 'react'
import {RxTriangleDown} from 'react-icons/rx'
function header1() {
  return (
    <div className='mainh1'>

        <div className='h1left'>
        <span className='navop'><button className='b'>All posts</button></span>
        <span className='navop' ><button className='b'>Article</button></span>
        <span className='navop'><button className='b'>Event</button></span>
        <span className='navop'><button className='b'>Education</button></span>
        <span className='navop'><button className='b'>job</button></span>
        </div>

         <div className='writeapostjoingroup'>
     
         <div className='writeapost' ><span>Write a Post</span><span><RxTriangleDown/></span></div>
         <div className='joinagroup' ><span><img src='vector.png' alt='j '></img></span><span>join Group</span></div>
           
         </div>


    </div>
  )
}

export default header1