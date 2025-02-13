import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
// import qus1 from '@/assists/Frame 1618873847.png'
// import qus2 from '@/assists/Frame 1618873848.png'
// import image1 from '@/assists/Vector 6 (1).png'
// import Image from 'next/image';
import "./Problem.css"
import TypingText from '../Test';

const Problem = () => {
    return (
        <section className='lg:text-3xl md:text-2xl text-xl relative py-2 px-2'>
            <div className=" relative z-50 lg:w-[75%] md:w-[90%] w-full">
            <h1 className=" lg:text-3xl md:text-2xl text-xl font-bold mb-4 flex md:gap-5 gap-3 text-color">
                <FaChevronRight className="font-extrabold lg:text-4xl md:text-3xl text-2xl rotate-90 my-auto" /> The Problem
            </h1>
            <p className="mb-6 flex gap- text-color">
                <img src={`/Vector 6 (1).png`} alt='image1' className='lg:w-7 w-5 my-auto'></img>
                Confusion about healthy eating.
            </p>
            <p className="mb-6 flex gap-2 text-color">
            <img src={`/Vector 6 (1).png`} alt='image1' className='lg:w-7 w-5 my-auto'></img>
                Lack of personalized nutrition guidance.
            </p>
            <p className="mb-6 flex gap-2 text-color">
            <img src={`/Vector 6 (1).png`} alt='image1' className='lg:w-7 w-5 my-auto'></img>
                No easy way to match diet with taste.
            </p>
            <p className="mb-6 flex gap-2 text-color">
            <img src={`/Vector 6 (1).png`} alt='image1' className='lg:w-7 w-5 my-auto'></img>
                Lack of personal motivation and convenience.
            </p>
            <p className="mb-6 flex gap-2 text-color">
            <img src={`/Vector 6 (1).png`} alt='image1' className='lg:w-7 w-5 my-auto'></img>
                Accessibility of healthy options.
            </p>
            <TypingText text="TThere is no easy way to match your health and your taste and simplify your daily eating routines to be happy and healthy at the same time." speed={30}></TypingText>
        </div>
        <div className='flex absolute top-[20%] right-[18%]'>
            <img src={`/Frame 1618873847.png`} className='lg:w-52 md:w-48 w-40' alt='qu1'></img>
            <img src={`/Frame 1618873847.png`} className='lg:w-52 md:w-48 w-40 -ml-16' alt='qu1'></img>
            <img src={`/Frame 1618873848.png`} className='lg:w-52 md:w-48 w-40 -ml-16' alt='qu1'></img>
        </div>
        </section>
    );
};

export default Problem;