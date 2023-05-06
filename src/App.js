// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import Sugges from './suggestions.js'
import './App.css';
import Modal from './Modal.js'
import './styles/main.scss';
import Header from './header.js'
import Header1 from './header1'
import Post1 from './post1.js'
import Post from './post.js'
function App() {
  return (
    
    <div>
<div style={{zIndex:"5", position:"fixed",width:"100%"}} ><Header/>
<div class="container-lg">
<Header1/>
</div>
</div>
<div class='container-lg'>


<br/>

<div class='row ' style={{marginTop:"100px"}}>
  <div class='col-8'>
  {/* <Modal/> */}
  <Post im='Rectangle5(1).png' id={3} />
  <Post   im='Rectangle5(2).png' id={4}/>
  <Post1 im='Rectangle5.png' key={1} id={1}/>
  <Post1 im='sk.jpg' key={2} id={2}/>
  </div>
  <div class='col-1'></div>
  <div class='col-3'style={{position:"relative"}} >
    <div style={{position:"fixed" ,width:"40%"}}  >
    <Sugges/>
    </div>
  </div>
</div>
</div>

</div>
  );
}

export default App;
