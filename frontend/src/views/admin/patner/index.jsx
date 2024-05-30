import React,{useState,useEffect} from 'react';
import axiosClient from '../../../../axios_client';
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { ErrorSharp } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useStateContext } from '../../../context/ContextProvider';
import ImageUpload from '../../../components/ImageUpload';
import imageicon from '../../../image/image.png';


export default function index() {
  const [patner, setPatner] = useState({});
  const [errors, setErrorList] = useState({});
  const [patners, Setpatners] = useState([]);
  const [isedit ,setIsEdit] = useState(false);
  const {setNotification} = useStateContext();
  const [counter ,setCounter] = useState(0);



  const handleOnChange = (event) => {
    setCountry((prevPatner) => ({
      ...prevPatner,
      [event.target.name]: event.target.value,
    }));
  };

  const fetchData = async () => {
    try {
      const res = await axiosClient.get(`patner/index`);
      Setpatners(res.data);
    } catch (error) {
    }
  };

  useEffect(() => {
    fetchData();
    formRest();
    document.getElementById('formheading').textContent='Create';
    document.getElementById('submitbutton').textContent='Submit';
  }, [counter]);


 

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    axiosClient.post("/patner/store", data).then((response) => {
      if (response.data.status === 200) {
        event.target.reset();
        setNotification(response.data.message,'');
        setCounter(counter+1);
      } else {
        setErrorList(response.data.validator_err);
      }
    }).catch(()=>{
      setNotification('something Went Wrong','delete');

    });
  };

  const handleEdit = (id) => {
    axiosClient.get(`patner/edit/${id}`).then((response)=>{
      setPatner(response.data);
      setIsEdit(true);
      document.getElementById('formheading').textContent='Edit';
      document.getElementById('submitbutton').textContent='Update';
      document.getElementById('image_preview_image').setAttribute('src', `http://localhost:8000/image/patner/${response.data.image}`);

    });

  };


const handleUpdate=(event)=>{
  event.preventDefault();
  const data = new FormData(event.target);
  axiosClient.post(`patner/update/${patner.id}`, data).then((response)=>{
      if (response.data.status === 200) {
        event.target.reset();
        setNotification(response.data.message,'');
        setCounter(counter+1);
   
      } else {
        setErrorList(response.data.validator_err);
      }

  }).catch(()=>{
    setNotification('something Went Wrong','delete');

  })
}

const deleteAction = (id)=>{
    axiosClient.post(`patner/delete/${id}`).then((response)=>{
      setNotification(response.data.message,'delete');
      setCounter(counter+1);

       }).catch(()=>{
        setNotification("Something Went Wrong",'delete');

       });
}

const formRest = ()=>{
  document.getElementById('image_preview_image').setAttribute('src', imageicon);
  setErrorList({});
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
                  id
                </th>
               
                <th scope="col" className="px-6 py-3">
                  Image
                </th>

                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {patners.map((item,index)=>(
         
                <tr key={index}
                 
                  className=" border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td className="w-4 p-4">
                    {index+1}
                  </td>
                 
                
                  <td className="px-6 py-4">
                  <img src={`http://localhost:8000/image/patner/${item.image}`} className="w-16 md:w-32 max-w-full max-h-full" alt="Apple Watch"/>

                  </td>

                  <td className="px-6 py-4 flex space-x-8">
                    <Link
                      onClick={handleEdit.bind(this, item.id)}
                 
                      className="font-medium text-blue-600 bg-slate-200 p-2 hover:bg-black hover:text-white rounded-md dark:text-blue-500 hover:underline"
                    >
                      <EditIcon
                        
                     
                      ></EditIcon>
                    </Link>
                    <Link
                       onClick={deleteAction.bind(this, item.id)}
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
          <form
            className="max-w-sm mx-auto shadow-xl  bg-white border-none rounded-md"
            onSubmit={isedit ? handleUpdate : handleOnSubmit}
          >
            <h4 className="text-xl  text-white fontstyle font-semibold  px-10 py-2 dark:text-white bg-blue-600 w-full border rounded-t-lg" id="formheading">
              Create
            </h4>
            <div className='p-8'>
              <div className='flex flex-col'>
              <ImageUpload name='image' lable="Image"></ImageUpload>
            <span className='text-red-600 italic'>{errors ? errors.image : '' || ''}</span>
              </div>
  
            <button
              id="submitbutton"
              type="submit"
              className="text-white mt-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Submit
            </button>
            <button
             onClick={formRest}
              type="button"
              className="text-white bg-red-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Reset
            </button>
            </div>
          </form>
        </div>
      </div>
  )
}
