import React,{useState,useEffect} from 'react';
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import axiosClient from '../../../../axios_client';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useStateContext } from '../../../context/ContextProvider';

export default function Index() {
  const [offerlist, setOfferList] = useState([]);
  const [counter,setCounter] = useState(0);
  const {setNotification} = useStateContext();

  const fetchData = async ()=>{
    try {
      const data = await axiosClient.get('offer/index');
      setOfferList(data.data);
    } catch (e) {
   
    }
    
  }

  useEffect(()=>{
    fetchData();
 

   },[counter])


  const handleDelete = (id)=>{

    axiosClient.get(`offer/delete/${id}`).then((resonse)=>{
      setNotification(resonse.data.message,'delete');
      setCounter(counter+1);

    }).catch(()=>{
      setNotification("something Went Wrong",'delete');
    })
  }
  return (
    <div className="flex  overflow-x-auto  sm:rounded-lg bg-gray-100 shadow-xl p-4">
    <div className="w-1/2 bg-white overflow-x-auto  sm:rounded-lg p-8 border-none  rounded-md shadow-sm">
      <div className="flex  justify-between pr-24 ">
        <div className="pb-4 ">
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
        <Link to='create'>
        <span className='bg-blue-600 h-full p-3 text-white fontstyle font-semibold rounded-md fontstyle text-sm'>Add offer</span>
          </Link>
      </div>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500  ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="p-4 hidden">
              <div className="flex items-center ">
                <input
                  id="checkbox-all-search"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor="checkbox-all-search" className="sr-only">
                  checkbox
                </label>
              </div>
            </th>
            <th scope="col" className="px-6 py-3">
              Sn
            </th>
            <th scope="col" className="px-6 py-3">
              Title
            </th>
            <th scope="col" className="px-6 py-3">
              Icon
            </th>

            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {offerlist.map((item,index)=>(
            <tr key={index} className=" border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="w-4 p-4">
              {index+1}
            </td>
           
            <td className="px-6 py-4">{item.title}</td>
            <td className="px-6 py-4">
            <img src={`http://localhost:8000/image/offer/${item.icon}`} className="w-16 md:w-32 max-w-full max-h-full" alt="Apple Watch"/>
            </td>

            <td className="px-6 py-4 flex space-x-8">
              <Link
                to={`edit/${item.id}`}
                className="font-medium text-blue-600 bg-slate-200 p-2 hover:bg-black hover:text-white rounded-md dark:text-blue-500 hover:underline"
              >
                <EditIcon
           
                ></EditIcon>
              </Link>
              <Link
                onClick={handleDelete.bind(this, item.id)}
                href="#"
                className="font-medium text-red-600 bg-slate-200 p-2 hover:bg-black hover:text-white rounded-md dark:text-blue-500 hover:underline"
              >
                <DeleteIcon
             
                ></DeleteIcon>
              </Link>
            </td>
          </tr>

          ))}
          
        </tbody>
      </table>

    </div>
    <div>
   
    </div>
  </div>
  )
}
