import React from 'react';
import appcss from '../../css/app.css';

export default function TopBar() {
  return (
    <div className='bg-white grid  place-items-end  topbar'>
      

      <div className='dropdowncontainer mx-20'>
        <button className='dropbtn'>Auth User</button>
       
       <div className='dropdown-content'>
       <a href=''>My Profile</a>
       <a href=''>Manage User</a>
       <a href=''>Logout</a>

       </div>
   

      </div>
    </div>
  )
}
