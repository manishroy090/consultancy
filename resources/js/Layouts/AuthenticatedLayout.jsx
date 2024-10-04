import { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link } from '@inertiajs/react';
import Topbar from '../Components/TopBar';
import Sidebar from '@/Components/Sidebar';

export default function Authenticated({ auth, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        
        <div className="bg-gray-100 min-h-screen">

            <Topbar />  
            <Sidebar/>
            <main className='ml-52 px-12 py-5'>{children}</main>
        </div>

        
        

    );
}
