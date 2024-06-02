import React,{useState,useEffect,useRef} from 'react';
import logo from "../image/logo.png";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import Home from '../views/pages/Home';
import Footer from './Footer';
import { Collapse } from 'flowbite';
import axiosClient from '../../axios_client'




export default function DefaultLayout() {
  const [visatypes ,setVisaTypes] = useState([]);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRefs = useRef({});

  const fetchData = async ()=>{
    const res = await axiosClient.get('frontend/home');
    const  {visatypes} = res.data;
    setVisaTypes(visatypes);


    
    
  
}

useEffect(() => {
  document.addEventListener('mousedown', handleClickOutside);
    fetchData();
  return () => {
    document.removeEventListener('mousedown', handleClickOutside);
  };
}, [activeDropdown]);

const handleClickOutside = (event) => {
  if (activeDropdown && !dropdownRefs.current[activeDropdown]?.contains(event.target)) {
    setActiveDropdown(null);
  }
};

const handleToggleDropdown = (id) => {
  setActiveDropdown(activeDropdown === id ? null : id);
};
  return (
    <>


      <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 navbar ">
        <div className="ww-full flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
          </a>
          <button data-collapse-toggle="navbar-dropdown" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg xl:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div className="hidden w-full xl:block xl:w-auto" id="navbar-dropdown">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 xl:space-x-8 rtl:space-x-reverse xl:flex-row xl:mt-0 md:border-0 md:bg-white dark:bg-gray-800 xl:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  to="/"
                className="block py-2 px-3 text-white bg-blue-700 rounded xl:bg-transparent xl:text-blue-700 xl:p-0 dark:text-white xl:dark:text-blue-500"
                  aria-current="page"
                >Home</Link>
              </li>
              {visatypes.map((visatype) => (
        <li key={visatype.id} className="relative">
          <button
            id="dropdownNavbarLink"
            data-dropdown-toggle={`dropdownNavbar_${visatype.id}`}
            className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 xl:hover:text-blue-700 md:p-0 md:w-auto dark:text-white xl:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
            onClick={() => handleToggleDropdown(visatype.id)}
          >
            {visatype.name}
            <svg
              className="w-2.5 h-2.5 ms-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>

          <div
            id={`dropdownNavbar_${visatype.id}`}
            ref={(el) => (dropdownRefs.current[visatype.id] = el)}
            className={`absolute z-50 ${activeDropdown === visatype.id ? '' : 'hidden'} font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}
          >
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
              {visatype.countries.map((item, index) => (
                <li key={index}>
                  <Link
                    to={`/${visatype.slug}/${item.slug}`}
                    className="block px-4 text-nowrap py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </li>
      ))}
              <li>
                <Link
                  to="/blogs"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 xl:hover:text-blue-700 md:p-0 dark:text-white xl:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >Blogs</Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 xl:hover:text-blue-700 md:p-0 dark:text-white xl:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >Contact</Link>
              </li>
              <li>
                <Link to="/login" className="text-center self-center  font-semibold">  Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>

    </>

  )
}
