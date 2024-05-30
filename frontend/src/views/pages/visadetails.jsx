import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axiosClient from '../../../axios_client';
import { useStateContext } from '../../context/ContextProvider';
import visasideimage from '../../image/visadetails.jpg';
import visasideimagetwo from '../../image/background.jpg';
import visasideimagethree from '../../image/travel.jpg';
import visasideimagefour from '../../image/travelTwo.jpg';
import register from '../../image/register.png';
export default function visadetails() {
  const { visatypeslug, visaslug } = useParams();
  const [visadetails, setVisaDetails] = useState({});
  const [countriesdetails, setCountriesDetails] = useState({});
  const [visa, setVisa] = useState({});
  const { renderHtml } = useStateContext();
  const [similarcountries, setSimilarCountries] = useState([]);



  const fetchData = async () => {
    const res = await axiosClient.get(`frontend/${visatypeslug}/${visaslug}`);
    const { visadetails, countriesHavingSimilarVisa, countryHavingOtherVisaType } = res.data;
    setCountriesDetails(visadetails.countries[0]);
    setVisaDetails(visadetails);
    setVisa(visadetails.countries[0].visas[0]);
    setSimilarCountries(countriesHavingSimilarVisa.countries);

  }

  useEffect(() => {
    fetchData();
  }, [visaslug]);




  return (
    <>
      <div className="bg-slate-100 flex flex-col space-y-16 text">
        <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-96 text-white overflow-hidden">
          <div class="absolute inset-0">
            <img src="https://images.unsplash.com/photo-1716872491368-cbef5a6b0532?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Background Image" class="object-cover object-center w-full h-full" />
            <div class="absolute inset-0 bg-black opacity-50"></div>
          </div>

          <div class="relative z-10 flex flex-col justify-center  h-full p-20 ">
            <h1 class="text-5xl font-bold leading-tight mb-4">Welcome {countriesdetails.name} {visadetails.name} Service</h1>
            {/* <p class="text-lg text-gray-300 mb-8">Planning a trip to {countriesdetails.name}? Get your {countriesdetails.name} eVisa now! The process is quick and easy with just 3 simple steps. Whether you're visiting for tourism, business, study, or other purposes, our streamlined application ensures you get your visa hassle-free. Apply today and embark on your {countriesdetails.name}!</p> */}
            <a href="#" class="bg-blue-600 w-fit hover:text-gray-900 hover:bg-blue-300 py-2 px-6  text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg text-white">Apply Now</a>
          </div>

        </div>




        {/* document required section */}
        <div className="container  p-4 mx-auto flex  space-x-48 ">
          <div className=" w-1/2">
            <h1 className="text-3xl text-nowrap text-blue-600 font-semibold">
              Visa Application Process for {countriesdetails.name} Visa
            </h1>
            <div className='text-gray-800 whitespace-normal dark:text-gray-400 visa_description text' dangerouslySetInnerHTML={{ __html: visa.working_process }} />

          </div>
          <div className=" border-none w-fit rounded-md p-8 space-x-6 text-white font-semibold text-xl flex">
            <img src={visasideimage}  className=' object-cover w-1/2 h-96  rounded-md'></img>
            <img src={visasideimagetwo} className='object-cover w-1/2 h-96 mt-52 rounded-md' ></img>
          </div>
        </div>
        <div className="container  p-4 mx-auto flex  space-x-48 ">
          <div className=" w-1/2">
            <h1 className="text-3xl text-nowrap text-blue-600 font-semibold">
              Required documents for {countriesdetails.name} Visa 
            </h1>
            <div className='text-gray-800 whitespace-normal dark:text-gray-400 visa_description text' dangerouslySetInnerHTML={{ __html: visa.document_required }} />

          </div>
          <div className='flex flex-col'>
          <div className=" border-none w-fit rounded-md p-8 space-x-6 text-white font-semibold text-xl flex">
            <img src={visasideimagethree}  className='object-cover rounded-md w-1/2 h-96'></img>
            <img src={visasideimagefour} className='object-cover rounded-md w-1/2 h-96 mt-52' ></img>
          </div>
            <div className=" w-fit bg-blue-600 border-none rounded-md p-8 text-white font-semibold text-xl">
            <div className="flex flex-col ">
              <h1 className='text-nowrap'>Apply For Moldova Invitation</h1>
              <div className="px-12 py-8">
                <img
                  className="object-fill h-[10rem] w-[9rem]"
                  src={register}
                />
              </div>
              <button className="bg-red-600 border-none rounded-md p-4">
                Apply Now
              </button>
            </div>
              
            </div>
          
          </div>
        </div>
        {/* Eligible Countries */}
        <div className="p-8 container mx-auto flex flex-col space-y-8 ">
          <h1 className="text-center text-3xl font-semibold">
            Eligible Countries
          </h1>
          <hr class="w-48 h-1 mx-auto my-4border-0 rounded md:my-10 " />
          <ul className="flex flex-col  flex-wrap h-[44rem]">
            {similarcountries.map((item, index) => (
              <li>
                <div className="flex flex-col items-center">
                  <img src={`http://localhost:8000/image/country/${item.image}`} className="w-16 h-10"></img>
                  <span>{item.name}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </>
  )
}
