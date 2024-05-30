import React,{useState,useEffect} from 'react';
import axiosClient from '../../../../axios_client';
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useStateContext } from '../../../context/ContextProvider';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function index() {
  const [counter ,setCounter] = useState(0);
  const [country, setCountry] = useState({});
  const [errorList, setError] = useState({});
  const [courses, setCourses] = useState([]);
  const [updateId, setUpdateId] = useState();
  const [isedit ,setIsEdit] = useState(false);
  const {setNotification} = useStateContext();

  const fetchData = async () => {
    try {
      const res = await axiosClient.get(`course/index`);
      setCourses(res.data);
    } catch (error) {
   
    }
  };

  useEffect(() => {
    fetchData();
  }, [counter]);

  

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    axiosClient.post("/course/store", data).then((res) => {
      if (res.data.status === 200) {
        event.target.reset();
        setNotification("Country created successfully",'');
     
      } else {
        setError(res.data.validator_err);
      }
    });
  };



const deleteAction = (id)=>{
    axiosClient.get(`course/delete/${id}`).then((response)=>{
      setNotification(response.data.message,'delete');
      setCounter(counter+1)
       }).catch(()=>{
        setNotification('something went wrong','delete');
       });
}



  return (

    <div className="flex justify-between overflow-x-auto  sm:rounded-lg bg-gray-100 shadow-xl p-4">
       
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
            <span className='bg-blue-600 h-full p-3 text-white fontstyle font-semibold rounded-md fontstyle text-sm'>Add Course</span>
          </Link>          </div>
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
                  id
                </th>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {courses.map((item, index) => (
                <tr
                  key={index}
                  className=" border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td className="w-4 p-4 hidden">
                    <div className="flex items-center">
                      <input
                        id="checkbox-table-search-1"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label htmlFor="checkbox-table-search-1" className="sr-only">
                        checkbox
                      </label>
                    </div>
                  </td>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {index + 1}
                  </th>
                  <td className="px-6 py-4">{item.name}</td>
                 

                  <td className="px-6 py-4 flex space-x-8">
                    <Link
                      to={`edit/${item.id}`}
                      className="font-medium text-blue-600 bg-slate-200 p-2 hover:bg-black hover:text-white rounded-md dark:text-blue-500 hover:underline"
                    >
                      <EditIcon
                 
                      ></EditIcon>
                    </Link>
                    <Link
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
        <div>

        
        </div>
   
      </div>
  )
}
