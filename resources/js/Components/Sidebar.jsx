import React from 'react';
import { FaUsers } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";



export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='logo-container'>
                <h1>Euro Dream</h1>
            </div>

            <div className='sidebar-drop-down-menu'>

                <div className='sidebar-drop-downitem'>
                    <FaUsers />
                    <a href='#home' className='active'>Dashboard</a>
                </div>

                <div className='sidebar-drop-downitem'>

                    <FaUsers className='sidebar-drop-downitem' />
                    <a href='#users'>Users Management</a>
                </div>


                <div className='sidebar-drop-downitem'>
                    <CgWebsite className='sidebar-drop-downitem' />
                    <a href='#users'>CMS Management</a>

                </div>


            </div>



        </div>
    )
}
