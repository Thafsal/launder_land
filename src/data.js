import {AiOutlineHome  ,AiOutlineContacts, AiOutlineLogout} from 'react-icons/ai';
import {MdOutlineAddShoppingCart} from 'react-icons/md';
import {BsCurrencyDollar} from 'react-icons/bs'

export const links = [
    {
        name: "HOME",
        icon: <AiOutlineHome/>,
        path: '/'
    },
    {
        name: "PRICING",
        icon: <BsCurrencyDollar/>,
        path: '/pricing'
    },
    {
        name: "CART",
        icon: <MdOutlineAddShoppingCart/>,
        path: '/cart'
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

