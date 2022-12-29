import {AiOutlineHome ,AiTwotoneCalendar ,AiOutlineContacts, AiOutlineLogout} from 'react-icons/ai';
import {MdOutlineLibraryBooks} from 'react-icons/md';

export const links = [
    {
        name: "Home",
        icon: <AiOutlineHome/>,
        path: '/home'
    },
    {
        name: "About",
        icon: <MdOutlineLibraryBooks/>,
        path: '/about'
    },
    {
        name: "Bookings",
        icon: <AiTwotoneCalendar/>,
        path: '/bookings'
    },
    {
        name: "Contact",
        icon: <AiOutlineContacts/>,
        path: '/contact'
    },
    {
        name: "Logout",
        icon: <AiOutlineLogout/>,
        path: '/logout'
    }
]

