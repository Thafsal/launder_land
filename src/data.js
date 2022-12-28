import {AiOutlineHome ,AiTwotoneCalendar ,AiOutlineContacts, AiOutlineLogout} from 'react-icons/ai';
import {MdOutlineLibraryBooks} from 'react-icons/md';
import shirt from './images/Shirt.svg';
import Pant from './images/Pant.svg';
import Denim from './images/Denim.svg';
import Blankets from './images/Blanket.svg';
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

export const trnding =[
    {
        id: 1,
        name : "Shirts",
        offer : "Min 50% Off",
        imge : shirt,
        price : "12 rs / item",
        path : '/products'
    },
    {
        id: 2,
        name : "Pants",
        offer : "Min 60% Off",
        imge : Pant,
        price : "13 rs / item",
        path : '/products'
    },
    {
        id: 3,
        name : "Denim / Hoodies",
        offer : "Min 30% Off",
        imge : Denim,
        price : "15 rs / item",
        path : '/products'
    },
    {
        id: 4,
        name : "Blankets",
        offer : "Min 40% Off",
        imge : Blankets,
        price : "30 rs / item",
        path : '/products'
    }
]