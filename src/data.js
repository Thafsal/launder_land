import {AiOutlineHome  ,AiOutlineContacts, AiOutlineLogout} from 'react-icons/ai';
import {MdOutlineAddShoppingCart, MdOutlineLibraryBooks} from 'react-icons/md';

export const links = [
    {
        name: "HOME",
        icon: <AiOutlineHome/>,
        path: '/'
    },
    {
        name: "ABOUT",
        icon: <MdOutlineLibraryBooks/>,
        path: '/about'
    },
    {
        name: "CART",
        icon: <MdOutlineAddShoppingCart/>,
        path: '/bookings'
    },
    {
        name: "CONTACT",
        icon: <AiOutlineContacts/>,
        path: '/contact'
    },
    {
        name: "LOGOUT",
        icon: <AiOutlineLogout/>,
        path: '/logout'
    }
]

