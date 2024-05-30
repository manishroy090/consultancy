import React, { useState, useEffect } from 'react';
import imageicon from '../../../image/image.png';
import ImageUpload from '../../../components/ImageUpload';
import axiosClient from '../../../../axios_client';
import { useParams } from 'react-router-dom';
import { useStateContext } from '../../../context/ContextProvider';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';



export default function Edit() {
  const navigate = useNavigate();

  const [errorList, setError] = useState({});
  const [country, setCountry] = useState({});
  const { setNotification } = useStateContext();


  const { id } = useParams()

  const handleOnChange = (event) => {
    setCountry((country) => ({
      ...country,
      [event.target.name]: event.target.value
    }))

  }
  const editCountry = async () => {
    try {
      const response = await axiosClient.get(`/edit/${id}`);
      setCountry(response.data);
      document.getElementById('image_preview_image').setAttribute('src', `http://localhost:8000/image/country/${response.data.image}`);

    } catch (error) {

    }

  };

  useEffect(() => {
    editCountry();
  }, [
    id
  ]);


  function update(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    axiosClient.post(`update/${id}`, data).then((response) => {
      if (response.data.status === 200) {
        event.target.reset();
        setNotification(response.data.message, '');
        setError({});
        navigate('/dashboard/country')

      } else {
        setError(response.data.validator_err);
      }
    }).catch((error) => {

      setNotification("Failed to update country", 'delete');
    });
  }
  return (
    <div>
      <form onSubmit={update}
        className="w-fit  mx-auto shadow-xl  bg-white border-none rounded-md "

      >
        <h4 className="text-2xl font-bold text-white  px-8 dark:text-white bg-blue-600 w-full border-t rounded-md-t" id="formheading">
          Create
        </h4>
        <div className=' p-8'>
          <div className="mb-5 flex flex-col w-full">
            <label
              htmlFor="large-input"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Name
            </label>
            <input
              onChange={handleOnChange}
              value={country.name || ' '}
              type="text"
              id="name"
              name="name"
              className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

            />
            <span className="text-red-600 self-center mt-2 italic" id="name">
            {country ? errorList.name : " " || ''}
            </span>
          </div>
          <ImageUpload name="image" lable="Image" />
          <span className="text-red-600 self-center italic">
            {country ? errorList.image : " " || ''}
          </span>


          <div className='flex space-x-3 w-full'>
            <div className="mb-5 flex flex-col w-96">
              <label
                htmlFor="large-input"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Meta Title
              </label>
              <input
                onChange={handleOnChange}
                type="text"
                id="name"
                name="meta_title"
                className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

              />
            
            </div>

            <div className="mb-5 flex flex-col w-96">
              <label
                htmlFor="large-input"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Meta Keywords
              </label>
              <input
                onChange={handleOnChange}
                type="text"
                id="name"
                name="meta_keyword"
                className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

              />
            
            </div>
          </div>


          <div className="mb-5 flex flex-col w-full">
            <label
              htmlFor="large-input"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Meta Description
            </label>
            <textarea
              onChange={handleOnChange}
              type="text"
              id="name"
              name="meta_description"
              className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

            />
        
          </div>

          <div className="mb-5 flex flex-col w-full">
            <label
              htmlFor="large-input"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Meta Scheama
            </label>
            <textarea
              onChange={handleOnChange}
              type="text"
              id="name"
              name="meta_schema"
              className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

            />
           
          </div>

          <button
            id="submitbutton"
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Submit
          </button>

          <Link to='/dashboard/country'>
          <button
            type="button"
            className="text-white bg-red-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Cancel
          </button>
          </Link>
        </div>
      </form>
    </div>
  )
}
