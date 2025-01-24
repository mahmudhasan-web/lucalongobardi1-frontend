'use client'
import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { IoChatbubblesOutline } from 'react-icons/io5';
import "./Navbar.css"

const routes = [
  { id: 1, name: "About Us" },
  { id: 2, name: "The Problem" },
  { id: 3, name: "Data" },
  { id: 4, name: "Food and Nutritions" },
  { id: 5, name: "Token" },
]

const Navbar = () => {

  return (
    <div id='nav_slide' className='space-y-5 pb-5'>
      <ul className='space-y-3 '>
        {
          routes.map((e) => <button  key={e.id} className='flex gap-3 lg:text-3xl md:text-2xl text-xl'> <FaChevronRight className='font-extrabold' /> <li>{e.name}</li></button>)
        }
      </ul>

      <button>  <h1 className='flex gap-3 lg:text-3xl text-2xl'>Nutrigenix/agents  <span className='text-lg my-auto'><FaChevronRight className='font-extrabold' /></span>  <span className='text-xl my-auto text-yellow-700 '><IoChatbubblesOutline /></span></h1></button>
    </div>
  );
};

export default Navbar;