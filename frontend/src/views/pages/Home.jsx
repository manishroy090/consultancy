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
  const {textFilter} = useStateContext();


     const settings = {
       dots: true,
       infinite: true,
       speed: 500,
       slidesToShow: 3,
       slidesToScroll: 3,
       autoplaySpeed: 2000,
       autoplay: true,
       focusOnSelect: true,
     };

     const fetchData = async ()=>{
      const res = await axiosClient.get('frontend/home')
      const  {teammembers,blogs,testimonials,offers,aboutus,aboutdetails,patners} = res.data;
      setAboutusDetails(aboutdetails);
      setOffers(offers);
      setBlogs(blogs);
      setPatners(patners);
      setTestimonials(testimonials);
      setTeammembers(teammembers);
      setAboutus(aboutus);
    
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
      <div className="container relative mx-auto sm:p-32  p-8   flex sm:flex-row flex-col sm:space-x-60 bg-red-600">
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
                  {aboutusdetails.map((item)=>(

                  <li>{item.title}</li>
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
      <div className="container mx-auto text-center relative sm:p-28  p-8 bg-blue-600">
        <h1 className="text-red-600 text-2xl font-semibold text-nowrap">
          Service We provide
        </h1>

        <span className="sm:text-3xl text-xs mt-4 font-semibold text-nowrap">
          Explore Our Visa Citizenship & Immigration Service
        </span>
        <div className=" flex flex-col sm:flex-row  sm:space-x-8 space-y-32">
            <div className="relative">
              <div className="">
                <img className="object-fill h-56 w-[19rem]" src={Serviceone} />
              </div>
              <div className="flex flex-col -translate-y-20 translate-x-3 top-[9rem] left-[1rem]">
                <div className="bg-red-600 w-24 p-4 text-center">
                  <FlightTakeoffIcon
                    variant="contained"
                    className="text-white "
                    style={{ fontSize: "3rem" }}
                  ></FlightTakeoffIcon>
                </div>
                <div className="bg-white card w-[17rem] p-4  text-center">
                  <span className="font-bold ">Student Visa</span>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="">
                <img className="object-fill h-56 w-[19rem]" src={Servicetwo} />
              </div>
              <div className="flex flex-col absolute top-[9rem] left-[1rem]">
                <div className="bg-red-600 w-24 p-4 text-center">
                  <EngineeringIcon
                    className="text-white"
                    style={{ fontSize: "3rem" }}
                  ></EngineeringIcon>
                </div>
                <div className="bg-white card w-[17rem] p-4  text-center">
                  <span className="font-bold ">Business Visa</span>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="">
                <img
                  className="object-fill h-56 w-[19rem]"
                  src={Servicethree}
                />
              </div>
              <div className="flex flex-col absolute top-[9rem] left-[1rem]">
                <div className="bg-red-600 w-24 p-4 text-center">
                  <BusinessCenterIcon
                    className="text-white"
                    style={{ fontSize: "3rem" }}
                  ></BusinessCenterIcon>
                </div>
                <div className="bg-white card w-[17rem] p-4  text-center">
                  <span className="font-bold ">Worker Visa</span>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="">
                <img className="object-fill h-56 w-[19rem]" src={Servicefour} />
              </div>
              <div className="flex flex-col absolute top-[9rem] left-[1rem]">
                <div className="bg-red-600 w-24 p-4 text-center">
                  <FlightTakeoffIcon
                    className="text-white"
                    style={{ fontSize: "3rem" }}
                  ></FlightTakeoffIcon>
                </div>
                <div className="bg-white card w-[17rem] p-4  text-center">
                  <span className="font-bold ">Tourist Visa</span>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </div>
        </div>
      </div>
      <div className="container  mx-auto flex flex-col sm:flex-row justify-start sm:bg-orange-50 mt-24">
        <div  className="order-last sm:order-first">
          <img src={icon} className="object-fill h-80 sm:h-[32rem]"></img>
          <div className="flex  space-x-5 bg-white-600 card bg-red-600">
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
          <div className="grid  hidden sm:block grid-cols-2 gap-6 mt-8  w-[40rem]">
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
            <div className="flex  space-x-5 bg-white-600 card ">
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
      <div className="sepecial h-96    flex flex-col justify-center items-center mt-80">
        <h1 className="text-center sm:text-white font-semibold text-red-600">
          Special Care Services
        </h1>
        <span className="text-center text-4xl sm:text-white font-semibold text-black">
          We Provide Special Care To Make Easy Your Dream
        </span>

        <div className="flex space-x-8 mt-8 flex-col sm:flex-row">
          <div className="bg-red-600">
            <div>
              <img className="object-fill h-52 z-30 " src={imgone} />
            </div>
            <div className="bg-red-600 text-white text-center p-4 flex justify-between text-xl font-semibold">
              IELTS Course
              <ArrowForwardIcon></ArrowForwardIcon>
            </div>
          </div>
          <div className="bg-red-600">
            <div>
              <img className="object-fill h-52 z-30 " src={imgtwo} />
            </div>
            <div className="bg-red-600 text-white text-center p-4 flex justify-between text-xl font-semibold">
              IELTS Course
              <ArrowForwardIcon></ArrowForwardIcon>
            </div>
          </div>
          <div className="bg-red-600">
            <div>
              <img className="object-fill h-52 z-30 " src={imgthree} />
            </div>
            <div className="bg-red-600 text-white text-center p-4 flex justify-between text-xl font-semibold">
              IELTS Course
              <ArrowForwardIcon></ArrowForwardIcon>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex  space-x-32 mt-96 flex-col sm:flex-row p-8">
        <div className="w-[40%]">
          <span className="text-red-600 sm:text-2xl text-xl text-nowrap font-bold">Why Choose Us</span>
          <h1 className="sm:text-5xl text-sm text-nowrap font-bold">
            Some Reasons People Like Our concultancy
          </h1>
          <p className="mt-8 bg-red-600  text-justify w-80">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, animi
            blanditiis doloremque debitis, aliquid perspiciatis culpa ipsa minus
            totam alias eum reprehenderit voluptate cum, nam molestias
            reiciendis ducimus! Quas, saepe?
          </p>
          <div className="flex flex-col  m-6  space-y-8">
            <div className="flex justify-center pl-32">
              <span className="text-center">
                <img className="object-fill h-24 " src={whyusiconone} />
              </span>
              <div className="flex flex-col m-4 p">
                <span className="text-xl font-bold bg-red-600 text-nowrap">
                  Direct Online Interview
                </span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                  mollitia inventore sit
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex  w-2/4 0 p-2 flex-wrap relative">
          <div className="w-1/2">
            <img className="object-fill h-96 w-[18rem]" src={whyusne} />
          </div>
          <div className="w-1/2 absolute top-10 left-[19.5rem]">
            <img className="object-fill h-[18rem] w-[57rem]" src={whyustwo} />
          </div>

          <div className="w-2/4 absolute left-[19.5rem] top-[22rem]">
            <img className="object-fill h-96 w-[57rem]" src={whyusthree} />
            <div className="w-full bg-red-600 h-48 absolute top-[4rem] right-[17rem] p-8 text-white">
              <span className="text-xl font-bold">10m + Trusted customer</span>
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
      <div className="container text-center items-center mx-auto mt-32">
        <h1 className="text-red-600 text-xl font-semibold">Team Member</h1>
        <span className="text-4xl font-semibold  ">
          Meet Our Experience Visa Consultant
        </span>
        <div className="mt-16   space-x-6">
          <Slider {...settings}>
            {teammembers.map((item,index)=>(
       
        <div className=" rounded-tl-md rounded-br-md  relative">
         
          <img className="object-cover h-72 w-96" src={`http://localhost:8000/image/teammember/${item.image}`} />
          <div className="absolute p-4 text-black bottom-1  font-semibold  backdrop-opacity-10 backdrop-invert bg-white/30  w-96 flex flex-col">
          <span className="first-letter:text-3xl">{item.title}</span>
          <span className="">{item.designation}</span>
          </div>
       
          </div>
       
      ))}
      </Slider>
      
        </div>
      </div>
      <div className="flex   mt-20 ">
        <div className=" flex flex-col space-y-6 items-center  w-fit">
          <h1 className="text-xl text-red-600 font-semibold self-start ml-48 pl-1">
            Your Favorite's Destination
          </h1>
          <span className="text-4xl font-semibold w-1/2">
            Skilled Visa's In Global Immigration Summit
          </span>
          <span className="w-1/2">
            These Cases are perfectly Simple and easy to distinguish. In a free
            hour, when our power of choice is untrammelled
          </span>
          <ul className="about_list self-start ml-48 ">
            <li>Faster & Reliable Execution</li>
            <li>Accurate & Expert Advice</li>
          </ul>
          <button className="bg-red-600 text-white p-5 mt-4 self-start ml-48">
            Get Free Consulting{" "}
            <KeyboardArrowRightIcon></KeyboardArrowRightIcon>
          </button>
        </div>
        <div className="flex">
          <form className=" p-10 card w-fit">
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
            <div className="flex space-x-4">
              <div className="flex flex-col  p-1  mt-8 w-80 border rounded border-red-600 static z-10">
                <div className=" bg-white p-2  w-fit bottom-7 left-8  z-20 relative">
                  <h1 className=" text-xl font-semibold  ">Phone</h1>
                </div>

                <input type="text" className="border-none absolute"></input>
              </div>
              <div className="flex flex-col  p-1 mt-8 w-80 border rounded border-red-600 static z-10">
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
        <span className="w-96 text-4xl font-bold">
          3 Step Follow You Can Get Your visa Easily
        </span>
        <div className="flex space-x-10">
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
          <span className=" text-4xl font-semibold">
            Let's Explore Why People Say About Our Services
          </span>
          {testimonials.length>0 ?  (
             testimonials.map((item,index)=>(

         
              <div className="flex space-x-16 mt-8">
                <div className="">
                  <img
                    src={testimonialiconthree}
                    className="object-fill absolute h-[32rem] z-40 left-60 top-[6rem]"
                  ></img>
                  <div className="bg-orange-100 h-80 w-96 absolute left-60 top-72 z-30"></div>
                  <img
                    src={testimonialiconfive}
                    className="object-fill absolute h-[14rem] z-40 left-[6rem] top-[27rem]"
                  ></img>
                </div>
                <div className="   w-[40rem] p-4 card">
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
        <img src={testimonialicontwo} className="absolute bottom-[1rem]"></img>
      </div>
      <div className="container text-center space-y-10 items-center mx-auto mt-72 mb-44 ">
        <h1 className="font-bold text-red-600 text-xl">News & Blog</h1>
        <span className="text-3xl font-bold ">Read Our Latest News & Blog</span>
      {blogs.length>0 ? (
         <div className="">
         <Slider {...settings}>
        {blogs.map((item,index)=>(
        
           <div key={index} className="relative">
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
          <div className="flex space-x-11">
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