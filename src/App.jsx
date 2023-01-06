import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Check from "./components/Check/Check"
import "./style.scss"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";


function App() {
  const[basket,setBasket]=useState([])
 
  
  return (
    <div className="App">
      <Header basket={basket} setBasket={setBasket}/>
     <main><Check basket={basket} setBasket={setBasket}/></main>
     <Footer/>
     <ToastContainer 
     position= "bottom-left"
     autoClose={5000}
     hideProgressBar={false}
     newestOnTop={false}
     closeOnClick
     rtl={false}
     pauseOnFocusLoss
     draggable
     pauseOnHover />
    </div>
  )
}

export default App
