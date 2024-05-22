import { useState ,useEffect} from "react"; 

import logo from "../../image/logo.png";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import bannerone from "../../image/Banner/bannerone.jpg";
import bannertwo from "../../image/Banner/bannertwo.jpg";
import bannerthree from "../../image/Banner/bannerthree.jpg";
import aboutimgone from "../../image/image1.png";
import aboutimage2 from "../../image/image2.jpg";
import checkpng from "../../image/check.png";
import abouticonfive from "../../image/icon/iconfive.png";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import AddIcon from "@mui/icons-material/Add";
import Serviceone from "../../image/serivces/serviceone.jpg";
import Servicetwo from "../../image/serivces/s2.jpg";
import Servicethree from "../../image/serivces/service3.png";
import Servicefour from "../../image/serivces/s4.png";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import EngineeringIcon from "@mui/icons-material/Engineering";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import icon from "../../image/country/icon.png";
import austrailiaflag from "../../image/country/Flag_of_Australia_converted.svg-ezgif.com-webp-to-png-converter.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import dubaiflag from "../../image/country/71eF2qiuU7L._AC_SL1500_.jpg";
import germanyflag from "../../image/country/Flag_of_Germany.svg.png";
import usaflag from "../../image/country/Flag-United-States-of-America-ezgif.com-webp-to-png-converter.png";
import imgone from "../../image/special/background.jpg";
import imgtwo from "../../image/special/Best-Visitor-Visa-Consultation-in-Chandigarh.jpg";
import imgthree from "../../image/special/work.jpg";
import whyusne from "../../image/whyus/whyone.jpg";
import whyustwo from "../../image/whyus/whyustwo.png";
import whyusthree from "../../image/whyus/whyusthree.webp";
import whyusiconone from "../../image/whyus/iconone.png";
import whyusicontwo from "../../image/whyus/icontwo.png";
import airhostess from "../../image/contactus/women.png";
import testimonialiconone from "../../image/testimonials/discover-1.png";
import testimonialicontwo from "../../image/testimonials/df.png";
import testimonialiconthree from "../../image/testimonials/why-1-1.png";
import testimonialiconfour from "../../image/testimonials/NicePng_quotation-marks-png_739585.png";
import client from "../../image/teamember/memberthree.jpg";
import testimonialiconfive from "../../image/testimonials/Excellence-in-Immigration-1.png";
import blogServiceone from "../../image/serivces/serviceone.jpg";
import PersonIcon from "@mui/icons-material/Person";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import partnerimgone from '../../image/partners/cl1.png'
import partnerimgtwo from "../../image/partners/cl3.png";
import partnerimgthree from "../../image/partners/cl5.png";

import axiosClient from '../../../axios_client'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Carousel } from "flowbite-react";
import { useStateContext } from '../../context/ContextProvider';

export default function Home() {  
  const [offers,setOffers] = useState([]);
  const [blogs,setBlogs] = useState([]);
  const [testimonials,setTestimonials] = useState([]);
  const [teammembers,setTeammembers] = useState([]);
  const [aboutus ,setAboutus] = useState({});
  const [patners ,setPatners] = useState([]);
  const [aboutusdetails ,setAboutusDetails] = useState([]);
  const {textFilter,getHeading} = useStateContext();
  const [services,setServices] = useState([]);
  const [specialservices,setSpecialServices]= useState([]);
  const [whyus, setWhyus] = useState({});


     const settings = {
       dots: true,
       infinite: true,
       speed: 500,
       slidesToShow: 3,
       slidesToScroll: 3,
       autoplaySpeed: 2000,
       autoplay: true,
       focusOnSelect: true,
       responsive: [
       
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
       
      ]
     };


 

     const fetchData = async ()=>{
      const res = await axiosClient.get('frontend/home');
      const  {teammembers,blogs,testimonials,offers,aboutus,aboutdetails,patners,services,specialservices,whyus} = res.data;
      setAboutusDetails(aboutdetails);
      setOffers(offers);
      setBlogs(blogs);
      setPatners(patners);
      setTestimonials(testimonials);
      setTeammembers(teammembers);
      setAboutus(aboutus);
      setServices(services);
      setSpecialServices(specialservices);
      setWhyus(whyus)
  }
    
    useEffect(()=>{
      fetchData();
    },[
  
    ]);
  

    

  return (
    <>
      <div className=" sm:h-96 xl:h-80 2xl:h-[50vh] border-none  bg-blue-600">
        <Carousel>   
        <img src={bannerone} alt="..." className="object-cover" />
        <img src={bannertwo} alt="..." />
        <img src={bannerthree} alt="..." />
        </Carousel>      

    </div>
       
      <div className="offer text-white bg-black flex flex-col justify-center items-center space-y-4 p-14">
        <span className="mt-8 text-xl">What We Offer</span>
        <h1 className="text-xl sm:text-3xl text-nowrap font-semibold">
          Professional Offer For Immigrate
        </h1>
        <div className="container p-12 pt-24  flex flex-wrap space-y-16 sm:space-x-24  sm:space-y-0  ">
    
          {offers.length>0 ? (
              offers.map((item,index)=>(
                <div className="w-96 sm:w-/4 relative p-4 flex flex-col  space-y-4 offercard cardone py-12">
                  <div className=" w-20 absolute  border-none rounded-full  bottom-36 sm:bottom-[9rem]">
                    <img src={`http://localhost:8000/image/offer/${item.icon}`} className="object-fit h-20 rounded-full "></img>
                  </div>
      
                  <div className="flex flex-col  mt-4">
                    <span className="text-2xl">
                         {item.title}
                    </span>
                    <span className="mt-2 ">
                      {textFilter(item.description,150)}
                    </span>
                  </div>
                </div>
                ))
               

          ) : (
            <div className="w-full text-center font-semibold">
              No Offer Yet
              </div>
            

          )}
         
        
        </div>
        {/* <img src={iconfive} className="object-fill "></img> */}
      </div>
      <div className="container relative mx-auto sm:p-32  p-8   flex sm:flex-row flex-col sm:space-x-60 ">
        <div className="order-last sm:order-first">
          <div className="">
            <img className="object-fill sm:h-96 sm:w-[72rem] h-72  w-60" src={aboutimgone} />
          </div>
          <div className="absolute bg-red-600   border-none rounded-full p-2 sm:left-16 sm:bottom-32 bottom-[1rem] left-4">
            <img className="object-fill sm:h-20 h-12 " src={abouticonfive} />
          </div>
          <div className="bg-sky-300  absolute sm:left-80 sm:bottom-8 bottom-[1rem]  left-[8rem]">
            <img
              className="object-fill sm:h-[16rem] sm:w-[23rem] h-30 w-48 "
              src={aboutimage2}
            />
          </div>
        </div>
        <div className="flex flex-col space-y-2 ">
          <span className="text-2xl text-red-500 font-semibold">About us</span>
          <h1 className="text-3xl font-semibold">
            {aboutus.title}
          </h1>
          <p className=" mt-8">
           {textFilter(aboutus.description,250)}
          </p>
          <div className="flex">
            <div className="flex  space-x-10">
              <div className="parent flex flex-col space-y-10">
                <ul className="about_list text-nowrap">
                {aboutus && aboutus.description && getHeading(aboutus.description,8).map((item,index)=>(
              <li> {textFilter(item)}</li>
                ))}
         
                </ul>
                <button className="self-start bg-red-600 p-4 text-white  ">
                  Learn More
                  <KeyboardArrowRightIcon></KeyboardArrowRightIcon>
                </button>
              </div>

              {/* <div className="flex flex-col bg-slate-300  w-40 text-center pb-1 h-40 ">
                <hr className="h-1    bg-red-600 border-0 dark:bg-red-700  "></hr>
                <span className="mt-4 text-xl font-bold">We 're</span>
                <span className="text-4xl flex justify-center items-center text-red-600 font-semibold ">
                  25 <AddIcon></AddIcon>
                </span>
                <span className=" font-bold w-32  ">Years Of Experience</span>
              </div> */}
            </div>
            <div></div>
          </div>
        </div>
      </div>{" "}
      <div className="container mx-auto text-center relative sm:p-28  p-8 ">
        <h1 className="text-red-600 text-2xl font-semibold text-nowrap">
          Service We provide
        </h1>

        <span className="sm:text-3xl text-xs mt-4 font-semibold text-nowrap">
          Explore Our Visa Citizenship & Immigration Service
        </span>
        <div className=" flex flex-col sm:flex-row  sm:space-x-8 sm:space-y-0 space-y-32 sm:mt-8">
        {services.map((item,index)=>(
            <div className="relative">
              <div className="">
                <img className="object-fill h-56 w-[19rem]" src={`http://localhost:8000/image/service/${item.image}`} />
              </div>
              <div className="flex flex-col -translate-y-20 translate-x-3 top-[9rem] left-[1rem]">
                <div className="bg-red-600 w-24 p-4 text-center">
                <img className="object-fill" src={`http://localhost:8000/image/service/${item.icon }`} />
                </div>
                <div className="bg-white card w-[17rem] p-4  text-center">
                  <span className="font-bold ">{item.title}</span>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </div> 
          ))}
         
        </div>
      </div>
      <div className="container  mx-auto flex flex-col sm:flex-row justify-start sm:bg-orange-50 mt-24 sm:mt-0">
        <div  className="order-last sm:order-first">
          <img src={icon} className="object-fill h-80 sm:h-[32rem]"></img>
          <div className="flex sm:hidden space-x-5 bg-white-600 card bg-red-600">
              <div className="flex  space-x-5 p-2">
                <img
                  class="rounded-full w-[4rem] h-16 "
                  src={austrailiaflag}
                  alt="image description"
                />

                <span className="self-center text-white">Australia</span>
              </div>
              <div className="bg-blue-600 h-10 w-[4rem]  text-white flex justify-center items-center">
                <ArrowForwardIcon></ArrowForwardIcon>
              </div>
            </div>
        </div>
        <div>
          <h1 className="text-red-600 text-2xl font-semibold">
            Choose Country
          </h1>
          <span className="text-4xl  font-semibold">
            Immigration Choose Your Country
          </span>
          <div className="sm:grid hidden   grid-cols-2 gap-6 mt-8  w-[40rem]">
            <div className="flex  space-x-5 bg-white-600 card ">
              <div className="flex  space-x-5 p-2">
                <img
                  class="rounded-full w-[4rem] h-16 "
                  src={austrailiaflag}
                  alt="image description"
                />

                <span className="self-center">Australia</span>
              </div>
              <div className="bg-red-600 h-10 w-[4rem]  text-white flex justify-center items-center">
                <ArrowForwardIcon></ArrowForwardIcon>
              </div>
            </div>
            <div className="flex flex-row space-x-5 bg-white-600 card ">
              <div className="flex  space-x-5 p-2">
                <img
                  class="rounded-full w-[4rem] h-16 "
                  src={dubaiflag}
                  alt="image description"
                />

                <span className="self-center">Australia</span>
              </div>
              <div className="bg-red-600 h-10 w-12  text-white flex justify-center items-center">
                <ArrowForwardIcon></ArrowForwardIcon>
              </div>
            </div>
            <div className="flex  space-x-5 bg-white-600 card ">
              <div className="flex  space-x-5 p-2">
                <img
                  class="rounded-full w-[4rem] h-16 "
                  src={germanyflag}
                  alt="image description"
                />

                <span className="self-center">Australia</span>
              </div>
              <div className="bg-red-600 h-10 w-12  text-white flex justify-center items-center">
                <ArrowForwardIcon></ArrowForwardIcon>
              </div>
            </div>
            <div className="flex  space-x-5 bg-white-600 card ">
              <div className="flex  space-x-5 p-2">
                <img
                  class="rounded-full w-[4rem] h-16 "
                  src={usaflag}
                  alt="image description"
                />

                <span className="self-center">Australia</span>
              </div>
              <div className="bg-red-600 h-10 w-12 mb-4  text-white flex justify-center items-center">
                <ArrowForwardIcon></ArrowForwardIcon>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sepecial h-96    flex flex-col justify-center items-center mt-80 sm:mt-8">
        <h1 className="text-center sm:text-white font-semibold text-red-600">
          Special Care Services
        </h1>
        <span className="text-center text-4xl sm:text-white font-semibold text-black">
          We Provide Special Care To Make Easy Your Dream
        </span>

     

        <div className="flex sm:space-x-8 mt-8 space-y-9 sm:space-y-0 flex-col sm:flex-row">

        {specialservices.map((item,index)=>(
          <div className="">
            <div>
              <img className="object-fill h-52 z-30 w-full " src={`http://localhost:8000/image/service/${item.image}`} />
            </div>
            <div className="bg-red-600 text-white text-center p-4 flex justify-between text-xl font-semibold">
               {item.title}
              <ArrowForwardIcon></ArrowForwardIcon>
            </div>
          </div>
               ))}
        </div>
   
      </div>
      <div className="container mx-auto flex  sm:space-x-32 mt-96 sm:mt-32 flex-col sm:flex-row p-8 sm:p-0">
 

      
        <div className="w-[40%]">
          <span className="text-red-600 sm:text-2xl text-xl text-nowrap font-bold">Why Choose Us</span>
          <h1 className="sm:text-5xl text-sm text-nowrap sm:text-wrap font-bold">
          {whyus.title}
          </h1>
         
          {textFilter(whyus.description,277)}
          <div className="flex flex-col  m-6  space-y-8">
          <ul className="about_list">
          {whyus && whyus.description && getHeading(whyus.description,8).map((item,index)=>(
              <li> {textFilter(item)}</li>
                ))}
                 </ul>
          </div>
   
        </div>
           
        <div className=" flex flex-col w-96 sm:w-2/4 0 sm:p-2 flex-wrap relative">
          <div className="sm:w-1/2 w-72 ">
            <img className="object-fill sm:h-96 h-52 w-40 sm:w-[18rem]" src={whyusne} />
          </div>
          <div className="sm:w-1/2 absolute sm:top-10 sm:left-[19.5rem] left-44 top-6">
            <img className="object-fill sm:h-[18rem] sm:w-[57rem] h-40 w-36" src={whyustwo} />
          </div>

          <div className="sm:w-2/4 absolute sm:left-[19.5rem] sm:top-[22rem] top-48 left-44">
            <img className="object-fill sm:h-96 sm:w-[57rem] h-52 w-36" src={whyusthree} />
            <div className="sm:w-full bg-red-600 sm:h-48 h-32 absolute sm:top-[4rem] top-8 right-32 sm:right-[17rem] sm:p-8 p-4 text-white">
              <span className="sm:text-xl text-sm font-bold text-nowrap">10m + Trusted customer</span>
              <div class="mt-3 flex -space-x-2 overflow-hidden">
                <img
                  class="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <img
                  class="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <img
                  class="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                  alt=""
                />
                <img
                  class="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <img
                  class="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container text-center items-center mx-auto mt-96">
        <h1 className="text-red-600 text-xl font-semibold">Team Member</h1>
        <span className="sm:text-4xl font-semibold  ">
          Meet Our Experience Visa Consultant
        </span>
        <div className="mt-16   space-x-6">
          <Slider {...settings}>
            {teammembers.map((item,index)=>(
       
        <div className=" rounded-tl-md rounded-br-md  relative ">
         
          <img className="object-fit  h-72 sm:w-96 " src={`http://localhost:8000/image/teammember/${item.image}`} />
          <div className="absolute sm:p-4 text-black bottom-1  font-semibold  backdrop-opacity-10 backdrop-invert  w-96 flex flex-col">
          <span className="first-letter:text-3xl">{item.title}</span>
          <span className="">{item.designation}</span>
          </div>
       
          </div>
       
      ))}
      </Slider>
      
        </div>
      </div>
      <div className="flex  mt-20 w-full">
        <div className="p-20 flex-col space-y-6  items-center  hidden sm:flex w-2/5">
          <h1 className="text-4xl  font-semibold self-start text-red-600 ">
            Contact Us
          </h1>
          <span className="text-3xl font-semibold self-start ">
          Call Eurodream Today to Schedule Your Consultation
          </span>
          <span className="text-wrap w-1/2  self-start w-full">
          Our team is here to make the process simple and straightforward for you.
           Whether you're exploring work opportunities abroad or planning your study journey overseas, 
           we're dedicated to guiding you through every step of the way.
            Contact us now to schedule your appointment and unlock a world of possibilities.
          </span>
          <ul className="about_list self-start ">
            <li>Phone: +1 (123) 456-7890 </li>
            <li>Email: info@eurodream.com</li>
            <li>Address: 1234 Dream Street, Eurocity, EU</li>
          </ul>
          <button className="bg-red-600 text-white p-5 mt-4 self-start ">
            Get Free Consulting
            <KeyboardArrowRightIcon></KeyboardArrowRightIcon>
          </button>
        </div>
        <div className="flex w-3/5">
          <form className=" p-8 card">
            <h1 className="text-red-600">Team Member</h1>
            <span className="text-4xl font-semibold">
              Fell Free to Contact Us
            </span>

            <div className="flex flex-col  mt-8 w-full  border rounded border-red-600 static z-10 p-1">
              <div className=" bg-white  w-fit bottom-7 p-2 h-fit left-8 relative z-20">
                <h1 className=" text-xl font-semibold   ">Name</h1>
              </div>

              <input type="text" className="border-none absolute "></input>
            </div>
            <div className="flex flex-col sm:flex-row sm:space-x-4">
              <div className="flex flex-col  p-1  mt-8 sm:w-80 w-full border rounded border-red-600 static z-10">
                <div className=" bg-white p-2  w-fit bottom-7 left-8  z-20 relative">
                  <h1 className=" text-xl font-semibold  ">Phone</h1>
                </div>

                <input type="text" className="border-none absolute"></input>
              </div>
              <div className="flex flex-col  p-1 mt-8 sm:w-80 w-full border rounded border-red-600 static z-10">
                <div className=" bg-white p-2  w-fit bottom-7 left-8 relative z-20">
                  <h1 className=" text-xl font-semibold   ">Email</h1>
                </div>

                <input type="text" className="border-none absolute"></input>
              </div>
            </div>
            <div className="flex flex-col p-1  mt-8 w-full  border rounded border-red-600 static z-10">
              <div className=" bg-white p-2  w-fit bottom-7 left-8 relative z-20">
                <h1 className=" text-xl font-semibold   ">Subject</h1>
              </div>

              <input type="text" className="border-none absolute"></input>
            </div>
            <div className="flex flex-col  mt-8  border rounded border-red-600 static p-1 w-full z-10">
              <div className=" bg-white w-fit bottom-5 px-2 left-8 relative z-20">
                <h1 className=" text-xl font-semibold ">Message</h1>
              </div>
              <textarea className="border-none"></textarea>
            </div>
            <button className="bg-black text-white p-3 mt-6 font-semibold">
              Send Message
            </button>
          </form>
          <img src={airhostess} className="h-3/4  mt-12 relative hidden sm:block" />
        </div>
      </div>
      <div className="container flex flex-col items-center mx-auto mt-32 space-y-8">
        <h1 className="text-red-600 text-xl font-bold">Working Process</h1>
        <span className="sm:w-96 sm:text-4xl font-bold">
          3 Step Follow You Can Get Your visa Easily
        </span>
        <div className="flex flex-col sm:flex-row sm:space-x-10 space-y-10">
          <div className="flex flex-col items-center bg-white card p-4">
            <span className="text-red-600 font-bold">Step o1</span>
            <span className="w-96 text-2xl font-bold">
              completed Online Registration
            </span>
            <p className="w-96">
              These cases are prefectly simple and easy to distinuguish
            </p>
          </div>

          <div className="flex flex-col items-center bg-white card p-4">
            <span className="text-red-600 font-bold">Step o1</span>
            <span className="w-96 text-2xl font-bold">
              completed Online Registration
            </span>
            <p className="w-96">
              These cases are prefectly simple and easy to distinuguish
            </p>
          </div>

          <div className="flex flex-col items-center bg-white card p-4">
            <span className="text-red-600 font-bold">Step o1</span>
            <span className="w-96 text-2xl font-bold">
              completed Online Registration
            </span>
            <p className="w-96">
              These cases are prefectly simple and easy to distinuguish
            </p>
          </div>
        </div>
      </div>
      <div className="relative">
        <img src={testimonialiconone} className=" left-[85rem] absolute"></img>

        <div className="container mx-auto flex flex-col items-center mt-32">
          <span className="text-red-600 text-2xl font-semibold">
            Our Testimonials
          </span>
          <span className="sm:text-4xl font-semibold">
            Let's Explore Why People Say About Our Services
          </span>
          {testimonials.length>0 ?  (
             testimonials.map((item,index)=>(
              <div className="flex flex-col sm:space-x-16 space-y-96  sm:space-y-0 mt-8">
                <div className="">
                  <img
                    src={testimonialiconthree}
                    className="object-fill absolute sm:h-[32rem] w-52 sm:w-auto z-40 sm:left-60 sm:top-[6rem] left-24"
                  ></img>
                  <div className="bg-orange-100 sm:h-80 sm:w-96 w-52 h-32 absolute sm:left-60 sm:top-72 left-24 top-60 z-30"></div>
                  <img
                    src={testimonialiconfive}
                    className="object-fill absolute h-[14rem] z-40 sm:left-[6rem] sm:top-[27rem] left-1 top-52"
                  ></img>
                </div>
                <div className="sm:w-[40rem] w-96 p-4 card">
                  <img src={testimonialiconfour} className="object-fill h-8"></img>
                  <p className="test-wrap m-4">
                   {item.description}
                  </p>
                  <hr class="h-px my-8 bg-black border-0 dark:bg-black"></hr>
                  <div className="flex">
                    <img class="inline-block h-14 w-14 rounded-full" src={`http://localhost:8000/image/testimonial/${item.image}`} />
                    <div className="flex flex-col ml-8">
                      <span>Auther</span>
                      <span>{item.name}</span>
                    </div>
                  </div>
                </div>
              </div>
               ))

          ): (

            <div className="flex space-x-16 mt-8">
               No Testimonial Yet
              </div>
          )}
         
        </div>
        <img src={testimonialicontwo} className="absolute sm:bottom-[1rem] bottom-72 left-72"></img>
      </div>
      <div className="container text-center space-y-10 items-center mx-auto mt-72 mb-44 ">
        <h1 className="font-bold text-red-600 text-xl">News & Blog</h1>
        <span className="sm:text-3xl font-bold text-nowrap ">Read Our Latest News & Blog</span>
      {blogs.length>0 ? (
         <div className="">
          
          
         <Slider {...settings}>
        {blogs.map((item,index)=>(
        
           <div key={index} className="relative ml-8 sm:ml-0">
             <div className="w-20 absolute left-[15rem] flex flex-col text-center card">
               <span className="bg-red-600 font-bold text-xl p-2 text-white ">
                 26
               </span>
               <span className="bg-white p-2 text-xl font-bold">Nov</span>
             </div>
             <div className="">
               <img className="object-fill h-56 w-76" src={`http://localhost:8000/image/blogs/${item.image}`} />
             </div>

             <div className="flex flex-col -translate-y-6  w-80 bg-white  card ">
               <div className="p-4  text-center flex space-x-4">
                 <span>
                   <PersonIcon></PersonIcon>
                   Mr.beast
                 </span>
                 <span>
                   <ModeCommentIcon></ModeCommentIcon>
                   Comment(5)
                 </span>
               </div>
               <div className=" w-[19rem] p-4  text-center ">
                 <span className="font-bold  ">{item.title.substring(0, 30)}</span>
                 <p>
                  {item.description.substring(0, 100)}
                 </p>
               </div>
             </div>
           </div>
         
       ))}
       </Slider>
          
       </div>

       ) : (

        <div>
          No Blogs Yet
        </div>
        )}
       
    
      </div>
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex space-x-4 justify-center">
          <hr class="h-1 w-96 my-8 bg-red-600"></hr>
          <h1 className="self-center text-2xl font-semibold">patners</h1>{" "}
          <hr class="h-1 w-96 my-8 bg-red-600"></hr>
        </div>
        <div className="flex space-x-16 p-8">
          <div className="flex flex-col sm:flex-row  space-y-8 sm:space-y-0 sm:space-x-11">
            {patners.map((item,index)=>(


        
            <img
              className="object-fill h-[6rem] w-[12rem]"
              src={`http://localhost:8000/image/patner/${item.image}`}
            />

          ))}
          </div>
        </div>
      </div>
 
    </>
  );
}