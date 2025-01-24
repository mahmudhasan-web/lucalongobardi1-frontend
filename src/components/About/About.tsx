import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import "./About.css"

const About = () => {
    return (
        <div className=" lg:text-2xl md:text-xl text-lg lg:w-[75%] md:[90%] w-full lg:px-0 py-5 px-2 transition-all duration-1000">
            <h1 className="lg:text-3xl md:text-2xl text-xl  font-bold mb-4 flex gap-5"> <FaChevronRight className='font-extrabold my-auto rotate-90' /> About Us</h1>
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
            <p className="">
                That&apos;s the challenge we&apos;re solving—to make healthy living effortless, accessible, and powered by AI.
            </p>
        </div>
    );
};

export default About;