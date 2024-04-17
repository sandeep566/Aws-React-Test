// Home.jsx
import React from 'react';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import home from "../images/home.png"

const Home = () => {

  return(
      <>
        <Header/>
           <div className='container'>
             
             <div className='row mt-5'>
               <div className='col-7 col-xs-12 mt-5 p-3'>
                  <h1>Sample Home Page</h1>
                  <p className='mt-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
               </div>
               <div className='col-5 col-xs-12'>
                  <img src={home} alt={home} />
               </div>
             </div>

           </div>
        <Footer/>
      </>
   )
};

export default Home;
