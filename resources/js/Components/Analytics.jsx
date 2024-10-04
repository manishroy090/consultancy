import React from 'react';
import { Chart } from "react-google-charts";
import { IoIosNotifications } from "react-icons/io";


const data = [
  ["Year", "Sales", "Expenses"],
  ["2014", 1000, 400],
  ["2015", 1170, 460],
  ["2016", 660, 1120],
  ["2017", 1030, 540],
];

// Material chart options
const options = {
  chart: {
    title: "Company Performance",
    subtitle: "Sales and Expenses over the Years",
  },
};

export default function Analytics() {
  return (

    <div className='grid grid-cols-2 '>


      <div className='grid grid-cols-3 gap-2'>

        <div className='bg-white   base-font-size  shadow-md h-fit rounded-md flex justify-center space-x-4 items-center py-6   text-start  w-3/2'>
          <span className='font-semibold'>Total User: </span>
          <b>27/8</b>
        </div>


        <div className='bg-white   base-font-size  shadow-md h-fit rounded-md flex justify-center space-x-4 items-center py-6   text-start  w-3/2'>
          <span className='font-semibold'>Total Employees</span>
          <b>27/8</b>
        </div>


        <div className='bg-white   base-font-size  shadow-md h-fit rounded-md flex justify-center space-x-4 items-center py-6   text-start  w-3/2'>
          <span className='font-semibold'>Total Applicant : </span>
          <b>27/8</b>
        </div>


        <div className='bg-white font-semibold  base-font-size  shadow-md h-fit rounded-md flex justify-center space-x-4 items-center py-6   text-start  w-3/2'>
          <span>Approved Visas: </span>
          <b>27/8</b>
        </div>


        <div className='bg-white font-semibold  base-font-size  shadow-md h-fit rounded-md flex justify-center space-x-4 items-center py-6   text-start  w-3/2'>
          <span>Pending Visa : </span>
          <b>27/8</b>
        </div>

        <div className='bg-white   base-font-size  shadow-md h-fit rounded-md flex justify-center space-x-4 items-center py-6   text-start  w-3/2'>
          <span>Completed Work : </span>
          <b>27/8</b>
        </div>
        <div className='bg-white   base-font-size  shadow-md h-fit rounded-md flex justify-center space-x-4 items-center py-6   text-start  w-3/2'>
          <span>Completed Work : </span>
          <b>27/8</b>
        </div>
        <div className='bg-white   base-font-size  shadow-md h-fit rounded-md flex justify-center space-x-4 items-center py-6   text-start  w-3/2'>
          <span>Completed Work : </span>
          <b>27/8</b>
        </div>
        <div className='bg-white   base-font-size  shadow-md h-fit rounded-md flex justify-center space-x-4 items-center py-6   text-start  w-3/2'>
          <span>Completed Work : </span>
          <b>27/8</b>
        </div>
        <div className='bg-white   base-font-size  shadow-md h-fit rounded-md flex justify-center space-x-4 items-center py-6   text-start  w-3/2'>
          <span>Completed Work : </span>
          <b>27/8</b>
        </div>
        <div className='bg-white   base-font-size  shadow-md h-fit rounded-md flex justify-center space-x-4 items-center py-6   text-start  w-3/2'>
          <span>Completed Work : </span>
          <b>27/8</b>
        </div>







      </div>


      <div className='bg-white p-8 rounded-md shadow-md ml-5'>
        <Chart
          // Note the usage of Bar and not BarChart for the material version
          chartType="Bar"
          data={data}
          options={options}
        />
      </div>


      <div className='bg-white p-8 rounded-md shadow-md  w-full mt-4 usersvisatypelist overflow-y-auto h-72'>
      <div className='flex items-center justify-between   sticky top-1  '>

<h1>Applicants</h1>
<IoIosNotifications className='place-self-end' />
</div>
        <ul>
          <li className='flex items-center space-x-3 bottom-1 border-b border-black'>
            <img class="w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Rounded avatar" />
            <div className='grid grid-rows-1 grid-cols-2 '>
              <div>
                <span className='font-semibold text-xl'>Manish</span>
                <p><b>Applied Date</b> : 2024/3/4</p>
                <span><b>Visa Types :</b> Nomad Visa</span>
              </div>

              <div className='ml-6'>
                <div>
                  <span className=''><b>Visa Status :</b></span>
                  <span class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300 ml-1">Approved</span>
                </div>

                <div>
                  <p><b>Applied Date :</b> 2024/3/4</p>
                  <span><b>Visa Types :</b> Nomad Visa</span>

                </div>

              </div>



            </div>
          </li>

          <li className='flex items-center space-x-3 bottom-1 border-b border-black'>
            <img class="w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Rounded avatar" />
            <div className='grid grid-rows-1 grid-cols-2 '>
              <div>
                <span className='font-semibold text-xl'>Manish</span>
                <p>Applied Date : 2024/3/4</p>
                <span>Visa Types : Nomad Visa</span>
              </div>

              <div className='ml-6'>
                <div>
                  <span className=''>Visa Status :</span>
                  <span class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300 ml-1">Approved</span>
                </div>

                <div>
                  <p>Applied Date : 2024/3/4</p>
                  <span>Visa Types : Nomad Visa</span>

                </div>

              </div>



            </div>
          </li>


          <li className='flex items-center space-x-3 bottom-1 border-b border-black'>
            <img class="w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Rounded avatar" />
            <div className='grid grid-rows-1 grid-cols-2 '>
              <div>
                <span className='font-semibold text-xl'>Manish</span>
                <p>Applied Date : 2024/3/4</p>
                <span>Visa Types : Nomad Visa</span>
              </div>

              <div className='ml-6'>
                <div>
                  <span className=''>Visa Status :</span>
                  <span class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300 ml-1">Approved</span>
                </div>

                <div>
                  <p>Applied Date : 2024/3/4</p>
                  <span>Visa Types : Nomad Visa</span>

                </div>

              </div>



            </div>
          </li>
          <li className='flex items-center space-x-3 bottom-1 border-b border-black'>
            <img class="w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Rounded avatar" />
            <div className='grid grid-rows-1 grid-cols-2 '>
              <div>
                <span className='font-semibold text-xl'>Manish</span>
                <p>Applied Date : 2024/3/4</p>
                <span>Visa Types : Nomad Visa</span>
              </div>

              <div className='ml-6'>
                <div>
                  <span className=''>Visa Status :</span>
                  <span class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300 ml-1">Approved</span>
                </div>

                <div>
                  <p>Applied Date : 2024/3/4</p>
                  <span>Visa Types : Nomad Visa</span>

                </div>

              </div>



            </div>
          </li>

        </ul>
      </div>

      <div className='bg-white px-4 py-1 rounded-md shadow-md ml-5  mt-4 overflow-y-auto  h-72 applicant-list-scrool'>

        <div className='flex items-center justify-between   sticky top-1  '>

          <h1>Notifications</h1>
          <IoIosNotifications className='place-self-end' />
        </div>

        <div className='grid grid-cols-1  '>
          <div className='grid grid-cols-2 border-b border-black'>

            <div className='mt-4'>
              <p><b>Name:</b><span>Manish</span></p>
              <p><b>Notification:</b><span>Applied For Nomad Visa</span></p>

            </div>

            <div className='mt-4'>
              <p><b>Address:</b><span>Kathmandu</span></p>
              <p><b>Notification:</b><span>Applied For Nomad Visa</span></p>
            </div>


          </div>


          <div className='grid grid-cols-2 border-b border-black'>

            <div className='mt-4'>
              <p><b>Name:</b><span>Manish</span></p>
              <p><b>Notification:</b><span>Applied For Nomad Visa</span></p>

            </div>

            <div className='mt-4'>
              <p><b>Address:</b><span>Kathmandu</span></p>
              <p><b>Notification:</b><span>Applied For Nomad Visa</span></p>
            </div>


          </div>

          <div className='grid grid-cols-2 border-b border-black'>

            <div className='mt-4'>
              <p><b>Name:</b><span>Manish</span></p>
              <p><b>Notification:</b><span>Applied For Nomad Visa</span></p>

            </div>

            <div className='mt-4'>
              <p><b>Address:</b><span>Kathmandu</span></p>
              <p><b>Notification:</b><span>Applied For Nomad Visa</span></p>
            </div>





          </div>


          <div className='grid grid-cols-2 border-b border-black'>

            <div className='mt-4'>
              <p><b>Name:</b><span>Manish</span></p>
              <p><b>Notification:</b><span>Applied For Nomad Visa</span></p>

            </div>

            <div className='mt-4'>
              <p><b>Address:</b><span>Kathmandu</span></p>
              <p><b>Notification:</b><span>Applied For Nomad Visa</span></p>
            </div>





          </div>


          <div className='grid grid-cols-2 border-b border-black'>

            <div className='mt-4'>
              <p><b>Name:</b><span>Manish</span></p>
              <p><b>Notification:</b><span>Applied For Nomad Visa</span></p>

            </div>

            <div className='mt-4'>
              <p><b>Address:</b><span>Kathmandu</span></p>
              <p><b>Notification:</b><span>Applied For Nomad Visa</span></p>
            </div>





          </div>

        </div>
      </div>

    </div>
  )
}
