import Header from './components/Header/Header'
import Routing from './components/Routing/Routing'
import Footer from './components/Footer/FooterPage'
import { commerce } from '././lib/commerce';
import { useEffect, useState } from 'react';

function App() {
  const [products,setProducts] = useState([]);

  const fetchProducts = async ()=> {
    const { data } = await commerce.products.list();

    setProducts(data);
  }

  useEffect(() => {

    fetchProducts();

  },[])

  console.log(products);
  
  return (
    <div className="App">
     <Header/>
     <Routing/>
     <Footer/>
    </div>
  );
}

export default App;
