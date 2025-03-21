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
                         <img src="2919906.png" alt="" />
                       </div>
                    </div>
                     <div className="Details">
                       <div className="detail1">
                        <label htmlFor=""></label>
                        <input type="text" value="Suyash"placeholder='First Name'/>
                        <input type="text" placeholder='Middle Name'/>
                        <input type="text" value="Soni"placeholder='Last Name'/>
                       </div>
                       <div className="detail1">
                        <input type="text"value="14th main HSR Layout" placeholder='Address'/>
                        <input type="text" value="Banglore"placeholder='City'/>
                        <input type="text" value="India"placeholder='Country' />
                       </div>
                       <div className="detail1">
                        <select name="" id="">
                          <option value="">Male</option>
                          <option value="">Female</option>
                          <option value="">Other</option>

                        </select>
                        <input type="text"value="Suyashsoni1052@gmail.com" placeholder='Email'/>
                        <input type="text"value="7987185536" placeholder='Contact Number' />
                       </div>
                       <div className="detail1">
                        <button id='Save'>Save</button>
                        <button id='Edit'>Edits</button>
                        <button id ="logout"onClick={handleLogout}>Logout</button>
             
                       </div>
                     </div>
               </div>
         </div>

     </div>

   

    </div>
  )
}

export default Profile