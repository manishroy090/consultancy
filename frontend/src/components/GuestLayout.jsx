import React from 'react';
import WavingHandIcon from "@mui/icons-material/WavingHand";
import { Routes, Route, Link, useLocation,Outlet } from "react-router-dom";
import FlagIcon from '@mui/icons-material/Flag';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EngineeringIcon from '@mui/icons-material/Engineering';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import ApartmentIcon from '@mui/icons-material/Apartment';


export default function GuestLayout() {
  return (
    <>
     <button
          data-drawer-target="separator-sidebar"
          data-drawer-toggle="separator-sidebar"
          aria-controls="separator-sidebar"
          type="button"
          className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <span className="sr-only">Open sidebar</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            ></path>
          </svg>
        </button>

        <aside
          id="separator-sidebar"
          className=" fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 "
          aria-label="Sidebar"
        >
          <div className="h-full px-3 py-4 overflow-y-auto  dark:bg-gray-800 bg-blue-500 ">
            <ul className="space-y-2 font-medium">
              <li>
                <Link
                  href="#"
                  className="flex items-center p-2 text-white rounded-lg hover:text-black hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <svg
                    className="w-5 h-5 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 21"
                  >
                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                  </svg>
                  <span className="ms-3">Dashboard</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/country"
                  className="flex items-center p-2 text-white rounded-lg hover:text-black hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <FlagIcon></FlagIcon>
                  <span className="flex-1 ms-3 whitespace-nowrap">Contry</span>
                </Link>
              </li>
              <li>
                <Link to="/dashboard/visatype" className='flex items-center p-2 text-white rounded-lg hover:text-black hover:bg-gray-100 dark:hover:bg-gray-700 group'>
                
                 <FlightTakeoffIcon></FlightTakeoffIcon>
                    <span className="flex-1 ms-3 whitespace-nowrap">Visa Type</span>
                 
                </Link>
              </li>

              <li>
                <Link to="/dashboard/visa" className='flex items-center p-2 text-white rounded-lg hover:text-black hover:bg-gray-100 dark:hover:bg-gray-700 group'>
                
                 <FlightTakeoffIcon></FlightTakeoffIcon>
                    <span className="flex-1 ms-3 whitespace-nowrap">Visa</span>
                 
                </Link>
              </li>

              <li>
                <Link to="/dashboard/offer" className='flex items-center p-2 text-white rounded-lg hover:text-black hover:bg-gray-100 dark:hover:bg-gray-700 group'>
                 
                   <LocalOfferIcon></LocalOfferIcon>
                    <span className="flex-1 ms-3 whitespace-nowrap">Offer</span>
                 
                </Link>
              </li>
              <li>
                <Link to="/dashboard/aboutus" className='flex items-center p-2 text-white rounded-lg hover:text-black hover:bg-gray-100 dark:hover:bg-gray-700 group'>
               
                   <LocationCityIcon></LocationCityIcon>
                    <span className="flex-1 ms-3 whitespace-nowrap">About Us</span>
                
                </Link>
              </li>
              <li>
                <Link to="/dashboard/services" className='flex items-center p-2 text-white rounded-lg hover:text-black hover:bg-gray-100 dark:hover:bg-gray-700 group'>
               
                   <EngineeringIcon/>
                    <span className="flex-1 ms-3 whitespace-nowrap">Services</span>
                
                </Link>
              </li>
              <li>
                <Link to="/dashboard/whyus" className='flex items-center p-2 text-white rounded-lg hover:text-black hover:bg-gray-100 dark:hover:bg-gray-700 group'>
               
                   <SupportAgentIcon/>
                    <span className="flex-1 ms-3 whitespace-nowrap">Why us</span>
                
                </Link>
              </li>
              <li>
                <Link to="/dashboard/teammember" className='flex items-center p-2 text-white rounded-lg hover:text-black hover:bg-gray-100 dark:hover:bg-gray-700 group'>
               
                    <SupervisorAccountIcon/>
                    <span className="flex-1 ms-3 whitespace-nowrap">
                      Team member
                    </span>
                
                </Link>
              </li>
              <li>
                <Link to="/dashboard/testimonials" className='flex items-center p-2 text-white rounded-lg hover:text-black hover:bg-gray-100 dark:hover:bg-gray-700 group'>
               
                   <FormatQuoteIcon></FormatQuoteIcon>
                    <span className="flex-1 ms-3 whitespace-nowrap">
                      Testimonials
                    </span>
                 
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/newsblogs"
                  className="flex items-center p-2 text-white rounded-lg hover:text-black hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <NewspaperIcon></NewspaperIcon>
                  <span className="flex-1 ms-3 whitespace-nowrap">New/Blog</span>
                </Link>
              </li>
              <li>
                <Link to="/dashboard/patner" className='flex items-center p-2 text-white rounded-lg hover:text-black hover:bg-gray-100 dark:hover:bg-gray-700 group'>
               
                    <ApartmentIcon></ApartmentIcon>
                    <span className="flex-1 ms-3 whitespace-nowrap">Patner</span>
                 
                </Link>
              </li>
            </ul>
            <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
              <li>
                <Link to="/dashboard/patner" className='flex items-center p-2 text-white rounded-lg hover:text-black hover:bg-gray-100 dark:hover:bg-gray-700 group'>
                   <MiscellaneousServicesIcon/>
                    <span className="ms-3">Site Setting</span>
                
                </Link>
              </li>
            </ul>
          </div>
        </aside>
        <div className="p-4 sm:ml-64">
          Hello Manish <WavingHandIcon></WavingHandIcon>
        </div>
        <div className="p-4 sm:ml-64 ">
          <Outlet />
        </div>
    </>
  )
}
