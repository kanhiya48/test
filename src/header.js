import React, { useRef } from 'react'
import {RxTriangleDown} from 'react-icons/rx'
import {AiOutlineEye, AiOutlineSearch} from 'react-icons/ai'
function header() {


  function togglePassword() {
    var passwordField = document.getElementById("password");
    if (passwordField.type === "password") {
      passwordField.type = "text";
    } else {
      passwordField.type = "password";
    }
  }

// const modalRef = useRef(null);



      
  var toggle1=true
  return (<div>
    <div className='header'>
        <div>
            <img src='whole.png' alt='cjknj'></img>
        </div>
        <div className='search'><span><AiOutlineSearch/></span><span><input width='500px'  placeholder=' Search for your favorite groups in ATG' className='headerinput'></input></span></div>
        <div><span className='createaccount'><a data-toggle="modal" href="#exampleModal" role="button" aria-expanded="false" aria-controls="exampleModel"><button style={{backgroundColor:"white",borderStyle:"none"}}
  >Create account.</button></a></span><span className='itsfree'>It's free!</span><span><RxTriangleDown/></span></div>


    </div>
    {toggle1 &&
         <div className='poster'>
       <img className='poster' src='Rectangle2.png' alt='hj' ></img>
         </div>}

<div   className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
  <div className="modal-dialog modal-lg" >
    <div className="modal-content" style={{padding:"20px"}}>
   <div className='modalhead'>
   Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼
   </div>
   <div style={{width:"100%",display:"flex"}}>
    <div style={{marginTop:"25px",marginBottom:"25px",width:"50%"}}>
        <h2>CREATE ACCOUNT</h2>
        <div  style={{width:"100%"}}>
        <div style={{display:"flex"}}>
            <input style={{width:"50%" ,padding:"6px"}} placeholder='First Name'></input>
            <input style={{width:"50%",padding:"6px"}} placeholder='Last Name'></input>
        </div>
        <div style={{width:"inherit",}}>
            <input style={{width: "inherit",padding:"6px"}} placeholder='Email'></input>
            
            <div style={{width:"inherit",display:"flex"}}>
            <input className='inputactive'  placeholder='Password' style={{borderRightStyle:"none" ,width:"100%",padding:"6px"}} type="password" id="password" name="password"></input>
  <button style={{borderLeftStyle:"none",backgroundColor:"white"}} type="button" onClick={()=>{togglePassword();}}><span><AiOutlineEye/></span></button></div>
            <input style={{width: "inherit",padding:"6px"}} placeholder='Confirm Password'></input>
            
        </div>
        <button className='createaccount1'>Create Account</button>

        <button className='facebooklogin'><span style={{padding:"10px"}}><img src='f.png' alt='jvfnf'></img></span>Sign up with Facebook</button>
        <button className='facebooklogin'><span style={{padding:"10px" }}><img style={{backgroundColor:"white",  width:"16px",height:"16px"}}  src='g.png' alt='jvfnf'></img></span>Sign up with Google</button>
        </div>
    </div>
    <div style={{width:"50%"}}>
        <div className='abc'>
    <span  className='modalp'>Already have an account? </span>
    <span className='modalp1'><a data-toggle="modal" href="#exampleModal1" role="button" aria-expanded="false" aria-controls="exampleModel1"><button style={{backgroundColor:"white",borderStyle:"none",color:"#2F6CE5"}}>Sign In</button></a></span>
    </div>
    <div>
        <img src='gr.png' alt='bhbh'></img>

    </div>
    <div className='lastdiv'>
    By signing up, you agree to our Terms & conditions, Privacy policy
    </div>
    </div>
   </div>

   
    </div>
  </div>
</div>


       
<div className="modal fade" id="exampleModal1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
  <div className="modal-dialog modal-lg" >
    <div className="modal-content" style={{padding:"20px"}}>
   <div className='modalhead'>
   Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼
   </div>
   <div style={{width:"100%",display:"flex"}}>
    <div style={{marginTop:"25px",marginBottom:"25px",width:"50%"}}>
        <h2>Sign In</h2>
        <div  style={{width:"100%"}}>
       
        <div style={{width:"inherit",}}>
            <input style={{width: "inherit",padding:"6px"}} placeholder='Email'></input>
            
            <div style={{width:"inherit",display:"flex"}}>
            <input className='inputactive'  placeholder='Password' style={{borderRightStyle:"none" ,width:"100%",padding:"6px"}} type="password" id="password" name="password"></input>
  <button style={{borderLeftStyle:"none",backgroundColor:"white"}} type="button" onClick={()=>{togglePassword();}}><span><AiOutlineEye/></span></button></div>
            {/* <input style={{width: "inherit",padding:"6px"}} placeholder='Confirm Password'></input> */}
            
        </div>
        <button className='createaccount1'>Sign In</button>

        <button className='facebooklogin'><span style={{padding:"10px"}}><img src='f.png' alt='jvfnf'></img></span>Sign up with Facebook</button>
        <button className='facebooklogin'><span style={{padding:"10px" }}><img style={{backgroundColor:"white",  width:"16px",height:"16px"}}  src='g.png' alt='jvfnf'></img></span>Sign up with Google</button>
        <div ><a className='forgotpassword'>Forgot Password ?</a></div>
        </div>
    </div>
    <div style={{width:"50%"}}>
        <div className='abc'>
    <span  className='modalp'>Don't have account yet ? </span>
    <span className='modalp1'>Create new for free!</span>
    </div>
    <div>
        <img src='gr.png' alt='bhbh'></img>

    </div>
    <div className='lastdiv'>
    By signing up, you agree to our Terms & conditions, Privacy policy
    </div>
    </div>
   </div>

   
    </div>
  </div>
</div>



       




         </div>
  )
}

export default header