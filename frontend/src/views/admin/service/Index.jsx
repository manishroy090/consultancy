import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosClient from '../../../../axios_client';
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Index() {
    const [services, setServices] = useState([]);
    const fetchData = async ()=>{
      const res = await axiosClient.get('service/index');
      setServices(res.data);
    }
  
    useEffect(()=>{
      fetchData();  
    },[]);
  
    const deleteAction = (id)=>{
        axiosClient.get(`service/delete/${id}`);
   
    }
  return (
    <div>
        <div className="relative overflow-x-auto  sm:rounded-lg bg-gray-100 shadow-xl p-4">
        <div classNameName="flex  justify-between pr-24 ">
          <div className="pb-4 bg-gray-100  dark:bg-gray-900">
            <label htmlFor="table-search" className="sr-only">
              Search
            </label>
            <div className="relative mt-1">
              <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="table-search"
                className="block pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search for items"
              />
            </div>
          </div>
          <Link to="/dashboard/services/create">
            <button
              type="button"
              className="font-semibold text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Add
            </button>
          </Link>
        </div>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500  ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
            
              <th scope="col" className="px-6 py-3">
                Sn
              </th>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Image
              </th>
              <th scope="col" className="px-6 py-3">
                Icon
              </th>
              <th scope="col" className="px-6 py-3">
                Service type
              </th>

              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {services.map((item,index)=>(

          
            <tr key={index} className=" border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="w-4 p-4 ">
                     {index+1}
              </td>

              <td className="w-4 p-4 ">
                     {item.title}
              </td>
              <td className="w-4 p-4 ">
              <img src={`http://localhost:8000/image/service/${item.image}`} className="w-16 md:w-32 max-w-full max-h-full" alt="Apple Watch"/>

              </td>
              <td className="w-4 p-4 ">
              <img src={`http://localhost:8000/image/service/${item.icon}`} className="w-16 md:w-32 max-w-full max-h-full" alt="Apple Watch"/>

              </td>

              <td className="w-4 p-4 ">
                     {item.specialoffer}
              </td>

              <td className="w-4 p-4 ">
              <Link
                      to={`/dashboard/services/edit/${item.id}`}
                      className="font-medium text-blue-600 bg-slate-200 p-2 hover:bg-black hover:text-white rounded-md dark:text-blue-500 hover:underline"
                    >
                      <EditIcon
                   
                      ></EditIcon>
                    </Link>
                    <Link C
                      href="#"
                      className="font-medium text-red-600 bg-slate-200 p-2 hover:bg-black hover:text-white rounded-md dark:text-blue-500 hover:underline"
                    >
                      <DeleteIcon
                        onClick={deleteAction.bind(this, item.id)}
                      ></DeleteIcon>
                    </Link>
              </td>
             
             
             
            </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}