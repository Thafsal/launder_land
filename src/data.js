import {AiOutlineHome  ,AiOutlineContacts, AiOutlineLogout} from 'react-icons/ai';
import {MdOutlineAddShoppingCart} from 'react-icons/md';
import {BsCurrencyDollar} from 'react-icons/bs';


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

export const price = [
    {
        id:1,      
        name : "Regular Bag",
        amount : "RS. 500",
        size : "6 KG",
        delivery : "Home",
        includes : "Ironing",
        fragrance : "Perfume",
        time : "12 Hours"
    },
    {
        id:2,
        name : "Mediume Bag",
        amount : "RS. 800",
        size : "12 KG",
        delivery : "Home",
        includes : "Ironing",
        fragrance : "Perfume",
        time : "10 Hours"
    },
    {
        id:3,
        name : "Large Bag",
        amount : "RS. 1000",
        size : "15 KG",
        delivery : "Home",
        includes : "Ironing",
        fragrance : "Perfume",
        time : "8 Hours"
    },
    {
        id:4,
        name : "Extra Large Bag",
        amount : "RS. 1500",
        size : "30 KG",
        delivery : "Home",
        includes : "Ironing,Detergent",
        fragrance : "Perfume",
        time : "8 Hours"
    }
]

