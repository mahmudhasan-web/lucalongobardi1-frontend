import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import qus1 from '@/assists/Frame 1618873847.png'
import qus2 from '@/assists/Frame 1618873848.png'
import image1 from '@/assists/Vector 6 (1).png'
import Image from 'next/image';
import "./Problem.css"
import TypingText from '../Test';

const Problem = () => {
    return (
        <section className='lg:text-3xl md:text-2xl text-xl relative py-2 px-2'>
            <div className=" relative z-50 lg:w-[75%] md:w-[90%] w-full">
            <h1 className=" lg:text-3xl md:text-2xl text-xl font-bold mb-4 flex gap-5">
                <FaChevronRight className="font-extrabold rotate-90" /> The Problem
            </h1>
            <p className="mb-6 flex gap-2">
                <Image src={image1} alt='image1' className='lg:w-7 w-5 my-auto'></Image>
                Confusion about healthy eating.
            </p>
            <p className="mb-6 flex gap-2">
            <Image src={image1} alt='image1' className='lg:w-7 w-5 my-auto'></Image>
                Lack of personalized nutrition guidance.
            </p>
            <p className="mb-6 flex gap-2">
            <Image src={image1} alt='image1' className='lg:w-7 w-5 my-auto'></Image>
                No easy way to match diet with taste.
            </p>
            <p className="mb-6 flex gap-2">
            <Image src={image1} alt='image1' className='lg:w-7 w-5 my-auto'></Image>
                Lack of personal motivation and convenience.
            </p>
            <p className="mb-6 flex gap-2">
            <Image src={image1} alt='image1' className='lg:w-7 w-5 my-auto'></Image>
                Accessibility of healthy options.
            </p>
            <TypingText text="TThere is no easy way to match your health and your taste and simplify your daily eating routines to be happy and healthy at the same time." speed={30}></TypingText>
        </div>
        <div className='flex absolute top-[20%] right-[18%]'>
            <Image src={qus1} className='lg:w-52 md:w-48 w-40' alt='qu1'></Image>
            <Image src={qus1} className='lg:w-52 md:w-48 w-40 -ml-16' alt='qu1'></Image>
            <Image src={qus2} className='lg:w-52 md:w-48 w-40 -ml-16' alt='qu1'></Image>
        </div>
        </section>
    );
};

export default Problem;