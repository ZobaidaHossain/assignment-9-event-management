import React from 'react';

import Footer from "../Pages/Home/Footer";

const About = () => {
    return (
        <section className="about-us m-10 md:m-1">
         <div className="grid justify-items-center m-5  ">
         <button className="btn btn-neutral rounded-none ">About Us</button> 
         
         </div>
        <p className='text-2xl font-semibold text-justify'>
          Opshory Planner & Event Management Limited is a renowned and target-oriented venture led by a group of skilled and dedicated personnel. With a wealth of experience in organizing numerous illustrious weddings and events, we take pride in turning dreams into reality.

          Our team is committed to delivering unparalleled excellence in event planning and execution. From intimate weddings to grand corporate events, we approach each project with precision, creativity, and a deep understanding of our clients' unique needs.
       
          At Opshory, we believe in the power of meticulous planning, attention to detail, and the magic of creativity to transform any occasion into a memorable experience. Our talented professionals work closely with clients to curate events that reflect individual styles and preferences, ensuring a personalized touch in every aspect.
       
          What sets us apart is not just our organizational skills but our passion for creating extraordinary moments. We strive for perfection in every detail, from venue selection and décor to catering and entertainment. Our comprehensive event management services cover everything needed to make your special day truly exceptional.
        
          Opshory Wedding Planner & Event Management Limited is not just a service; it's a commitment to making your dreams come true. Join us in the journey of crafting unforgettable memories that last a lifetime.
        </p>

        <div className="grid justify-items-center m-5  ">
         <button className="btn btn-neutral rounded-none ">Services</button> 
         
         </div>

        <div className="form-control mt-5 mb-7">
  <label className="label cursor-pointer">
    <span className="label-text font-extrabold text-4xl mr-2">Wedding Planning</span> 
    <input type="checkbox" checked="checked" className="checkbox" />
  </label>
  <label className="label cursor-pointer">
    <span className="label-text font-extrabold text-4xl mr-2">Event Management</span> 
    <input type="checkbox" checked="checked" className="checkbox" />
  </label>
  <label className="label cursor-pointer">
    <span className="label-text font-extrabold text-4xl mr-2">
Decoration </span> 
    <input type="checkbox" checked="checked" className="checkbox" />
  </label>
  <label className="label cursor-pointer">
    <span className="label-text font-extrabold text-4xl mr-2">Catering</span> 
    <input type="checkbox" checked="checked" className="checkbox" />
  </label>
</div>
<Footer></Footer>
      </section>


    );
    
};

export default About;