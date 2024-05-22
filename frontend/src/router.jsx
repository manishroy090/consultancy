import {Navigate, createBrowserRouter} from "react-router-dom";
import Login from "./views/pages/Login";
import Signup from "./views/pages/Register";
import Notfound from "./views/pages/Notfound";
import DefaultLayout from "./components/DefaultLayout";
import GuestLayout from "./components/GuestLayout";
import Blogs from "./views/pages/Blogs";
import Home from "./views/pages/Home";
import Contact from "./views/pages/Contact";
import Country from './views/admin/country/index';
import Visatype from './views/admin/visatype/index';
import Visa from './views/admin/visa/index';
import  Offer from './views/admin/offer/Index';
import Aboutus from './views/admin/about/Index';
import Services from './views/admin/service/Index'
import Add from './views/admin/service/Add';
import Edit from './views/admin/service/Edit';
import Whyus from './views/admin/whyus/index';
import Teammember from './views/admin/teammember/Index';
import  Testimonial from './views/admin/testimonial/Index';
import  NewsBlog from './views/admin/newsblogs/Index';
import AboutDetail from "./views/admin/about/AboutDetail";
import Patner from "./views/admin/patner/index"; 


const router = createBrowserRouter([
    {
        path:'/',
        element:<DefaultLayout/>,
        children:[
            {
              path:'/',
              element:<Home to="/"/>
            },
            {
                path:'/blogs',
                element:<Blogs/>
            },
            {
                path:'/contact',
                element:<Contact/>
            },
            {
                path:'/login',
                element:<Login/>
            }
           
        ]
    },
    {
        path:'dashboard',
        element:<GuestLayout/>,
        children:[
            {
                path:'country',
                element:<Country/>
            },{
                path:'visatype',
                element:<Visatype/>
            },
            {
                path:'visa',
                element:<Visa/>
            },
            {
                path:'offer',
                element:<Offer/>
            },
            {
                path:'aboutus',
                element:<Aboutus/>
            },
            {
                path:'aboutus/details/:id',
                element:<AboutDetail/>
            },
            {
                path:'services',
                element:<Services/>
            },
            {
                path:'services/create',
                element:<Add/>
            },
            {
                path:'services/edit/:id',
                element:<Edit/>
            },
            {
                path:'whyus',
                element:<Whyus/>
            },
            {
                path:'teammember',
                element:<Teammember/>
            },
            {
                path:'testimonials',
                element:<Testimonial/>
            },
            {
                path:'newsblogs',
                element:<NewsBlog/>
            },
            {
                path:'patner',
                element:<Patner/>
            }
        ]
    },
,
{
    path:'/',
    element:<Notfound/>
}
])

export default router