import React from 'react';
import './Profile.css';
import { useNavigate } from 'react-router-dom';

function Profile({userLogined,setUserLogined}) {
   
     const navigate =useNavigate();
    function handleLogout(){
         localStorage.removeItem("userLogined");
           setUserLogined(false)
           navigate('/Login');
    }
  return (
    <div>
      
     <div id="profilemain">
          <div id="head">
          <i class="ri-heart-3-fill"></i>
              <h1>Just Beign Me.!!</h1>
              <i class="ri-heart-3-fill"></i>
          </div>
         <div id="Middle">
               <div id="MiddleProfile">
                    <div id="MiddleProfiletop">
                       <div id="Circle">
                        
                       </div>
                    </div>
               </div>
         </div>

     </div>

   
      {/* <button onClick={handleLogout}>Logout</button> */}

    </div>
  )
}

export default Profile