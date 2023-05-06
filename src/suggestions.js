import React from 'react'
import { GoLocation} from 'react-icons/go';
import {RxCross1} from 'react-icons/rx'
import {IoMdThumbsUp } from 'react-icons/io'
import {AiOutlineExclamationCircle} from 'react-icons/ai'
 function suggestions() {
  const toggle=false;
  var list=[{image:"sk.jpg",topic:"abcd"},{image:"sk.jpg",topic:"abcd"},{image:"sk.jpg",topic:"abcd"},{image:"sk.jpg",topic:"abcd"}]
  return (
    <div className='mainsugges'>
        <div className='sugges'>
            <div className='locationandcrossinsugges'><GoLocation /></div>
            
            <input placeholder='Enter Your Location' className='inputsugges'></input>

            <div className='locationandcrossinsugges'>

            <RxCross1/>
            </div>
        </div>
            <div className='locationpara' style={{display:'flex',gap:'4px'}}>
              <div ><AiOutlineExclamationCircle/></div>
                your location help us better and personalise euggestions
            </div>

            { toggle &&


            <div className='recomsection' >
              <div  className='recomgroup'>
                <div className='thumb'>
              <IoMdThumbsUp/>
              </div>
           
               
       

                <div className='recom1'> RECOMMENDED GROUPS</div>
              </div>
              {list.map((a)=>{
                return (

              
              <div className='listcont'>

                <div className='recomlist'>
                 <div className='imgtopic' >
              < img  className='recomimage' src={a.image} alt='ndcnd '></img>
              
                  
                  <span className='topic'>{a.topic}</span>
                  </div>
                  <div className='divbutto' >
                  <button className='butto'>Follow</button>
                  </div>
                </div>

              </div>
                )
              })}
              <div className='seemore'>
                see more...
              </div>
            </div>}
    </div>
  )
}

export default suggestions