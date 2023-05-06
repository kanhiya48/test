import React from 'react'
import { BsThreeDots,BsShareFill} from 'react-icons/bs';
import { FiEye} from 'react-icons/fi';
import { GoLocation} from 'react-icons/go';
import {MdDateRange} from 'react-icons/md';

function post({key,id,im}) {
  var a=`#x${id}`
  var b=`x${id}`
  return (
    <div class="card mb-3">
    <img src={im} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title" >Card title</h5>
      <div className='cardaboutthreedots'>
      <p class="card-text" className='cardabout'>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <div ><a data-toggle="collapse" href={a} role="button" aria-expanded="false" aria-controls="x"><span className='threedots'><BsThreeDots/></span></a>
      
      
      </div><div className='rel'>
      <div className='collapse' id={b}><div className='threebuttonmenu'><p>Edit</p>
      <p>Report</p><p>Other option</p>
      </div></div>
      </div>
      
      
      
      </div>


     



      
      
     <div className='datelocation'>
        <div className='date'><div><MdDateRange/></div><div>date</div></div>
        <div className='location'><div><GoLocation/></div><din>location</din></div>
     </div>
     <div className='viewwebsite'><a href=''><span className='viewwebsitetext'>View Website</span></a></div>
      <div className='smallphotonameeye'>
      <img src='Rectangle 3.png' alt='err'></img>
      
      <p className='cardname'>Sarthak kamra</p>
      <div className='viewseyeshare'>
      <span className='aligncenter'><FiEye/></span>
      <span className='aligncenter views'>1.4 views</span>
      <div className='shareicon'>
      <BsShareFill/>
      </div>
      </div>
      </div>
      
    </div>
  </div>
  )
}

export default post