import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import "./About.css"
import TypingText from '../Test';


const About = () => {



    return (
        <div className=" lg:text-3xl md:text-2xl text-xl lg:w-[75%] md:[90%] w-full lg:px-0 py-2 px-2 transition-all duration-1000">
            <h1 className="lg:text-3xl md:text-2xl text-xl  font-bold mb-4 flex md:gap-5 gap-3 text-color"> <FaChevronRight className='font-extrabold lg:text-4xl md:text-3xl text-2xl rotate-90 my-auto' /> About Us</h1>
            <p className=" mb-6">
                Modern AI is set to revolutionize how people interact with nutrition and wellness in their daily lives.
            </p>
            <p className=" mb-6">
                For the first time, intelligent agent-driven platforms like Nutrigenix will empower individuals to achieve
                personalized, science-backed healthy eating habits as seamlessly as having a personal dietitian on call.
            </p>
            <p className=" mb-6">
                But this transformation requires removing significant barriers. We need intuitive interfaces, a reimagined approach
                to data privacy, and a robust platform that simplifies the creation and deployment of AI-driven nutrition solutions.
            </p>
            {/* <TypingText text='BBut this transformation requires removing significant barriers. We need intuitive interfaces, a reimagined approach
                to data privacy, and a robust platform that simplifies the creation and deployment of AI-driven nutrition solutions.' speed={10}></TypingText> */}
            {/* <p className="">
                That&apos;s the challenge we&apos;re solving—to make healthy living effortless, accessible, and powered by AI.
            </p> */}
            <TypingText text="TThat's the challenge we're solving—to make healthy living effortless, accessible, and powered by AI." speed={30}></TypingText>
        </div>
    );
};

export default About;