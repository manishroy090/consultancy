import React,{useState,useEffect} from 'react';
import axiosClient from '../../../../axios_client';
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useStateContext } from '../../../context/ContextProvider';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function index() {
  const [country, setCountry] = useState({});
  const [errorList, setError] = useState({});
  const [countries, setCountries] = useState([]);
  const [updateId, setUpdateId] = useState();
  const [isedit ,setIsEdit] = useState(false);
  const {setNotification} = useStateContext();

  const fetchData = async () => {
    try {
      const res = await axiosClient.get(`/index`);
      setCountries(res.data);
    } catch (error) {
   
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleOnChange = (event) => {
    setCountry((prevCountry) => ({
      ...prevCountry,
      [event.target.name]: event.target.value,
    }));
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    axiosClient.post("/country", data).then((res) => {
      if (res.data.status === 200) {
        event.target.reset();
        setNotification("Country created successfully",'');
     
      } else {
        setError(res.data.validator_err);
      }
    });
  };

  const editCountry = (id) => {
    axiosClient.get(`/edit/${id}`).then((res) => {
      let editdata = res.data;
     document.getElementById("name").setAttribute('value',editdata.name);
      document.getElementById("image").setAttribute("value", editdata.image);
            document
              .getElementById("submitbutton")
              .innerText ="Update";

                    document.getElementById("formheading").innerText = "Edit";
                    setIsEdit(true);

                    setUpdateId(editdata.id);

    });
  };

  function update(event){
    event.preventDefault();
    const data = new FormData(event.target);
    axiosClient.post(`update/${updateId}`, data).then((response)=>{
       if (response.data.status === 200) {
         event.target.reset();
         setNotification("Country update successfully",'');
       } else {
         setError(response.data.validator_err);
       }
    });
  }

const deleteAction = (id)=>{
    axiosClient.post(`/delete/${id}`).then((response)=>{
      setNotification("Country delete successfully",'delete');

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
                  Name
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
              {countries.map((item, index) => (
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
                  <td className="px-6 py-4">
                  <img src={`http://localhost:8000/image/country/${item.image}`} className="w-16 md:w-32 max-w-full max-h-full" alt={item.title}/>
                  </td>

                  <td className="px-6 py-4 flex space-x-8">
                    <Link
                      href="#"
                      className="font-medium text-blue-600 bg-slate-200 p-2 hover:bg-black hover:text-white rounded-md dark:text-blue-500 hover:underline"
                    >
                      <EditIcon
                        onClick={editCountry.bind(this, item.id)}
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

          <form
            className="max-w-sm mx-auto shadow-xl p-8 bg-white border-none rounded-md"
            onSubmit={isedit ? update : handleOnSubmit}
          >
            <h4 className="text-2xl font-bold dark:text-white" id="formheading">
              Create
            </h4>

            <div className="mb-5 flex flex-col">
              <label
                htmlFor="large-input"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={handleOnChange}
              />
              <span className="text-red-600 self-center mt-2" id="name">
                {errorList.name}
              </span>
            </div>

            <div className="mb-5 flex flex-col">
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                htmlFor="user_avatar"
              >
                Country flag
              </label>
              <input
                name="image"
                className="block w-full  text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                aria-describedby="user_avatar_help"
                onChange={handleOnChange}
                id="image"
                type="file"
              />
              <span className="text-red-600 self-center mt-2">
                {errorList.image}
              </span>
            </div>
            <button
              id="submitbutton"
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Submit
            </button>
         
            <button
              type="button"
              className="text-white bg-red-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Cancel
            </button>
          </form>
        </div>
   
      </div>
  )
}