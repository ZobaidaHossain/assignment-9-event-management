import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Services from "./Services";
import Footer from "./Footer";
import Gallary from "./Gallary";
import Special from "./Special";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

<link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />

const Home = () => {
  AOS.init();
    const news=useLoaderData();
    console.log(news);
    return (
        <div>
           <Banner></Banner>
         <div className="grid justify-items-center m-5 ">
         <button className="btn btn-neutral rounded-none ">OUR SERVICES</button> 
         </div>
        
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 " data-aos="fade-up">
  {/* SERVICE container */}
  {news.map((aNews) => (
    <div key={aNews._id} className="flex ">
      <Services news={aNews} />
    </div>
  ))}
</div>
<div className="grid justify-items-center m-5 ">
         <button className="btn btn-neutral rounded-none ">Special SERVICES</button> 
         <p className="m-3 text-xl font-bold">We provide these special services:</p>
<Special></Special>
         </div>
         <div className="grid justify-items-center m-5  ">
         <button className="btn btn-neutral rounded-none ">Gallery</button> 
         <Gallary></Gallary>
         </div>
<div>
  <Footer></Footer>
</div>


            </div>
       
    );
};

export default Home;