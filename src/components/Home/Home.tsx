'use client'
// import Image from 'next/image';
import React from 'react';
// import logo from '@/assists/Vector 2.png'
import "./Home.css"

const Home = () => {
    return (
        <div className=" lg:w-[55%] md:[85%] lg:h-[485px] h-fit lg:px-0 px-2 overflow-hidden">

        <img src={`/Vector 2.png`} className="w-72 mt-10" alt="logo"></img>
  
        <p id='home_slide' className="md:text-3xl text-2xl mt-16">We are creating a next-generation platform where <strong>AI agents</strong> can deliver a science-backed <strong>healthy diet</strong> in just one click.</p>
  
      </div>
    );
};

export default Home;