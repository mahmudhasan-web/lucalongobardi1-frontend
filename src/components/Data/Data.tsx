import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import "./Data.css"
import TypingText from '../Test';

const Data = () => {
    return (
        <div  className="lg:text-3xl md:text-2xl text-xl py-2 px-2 lg:w-[85%] w-full">
            <h1 className="lg:text-3xl md:text-2xl text-xl font-bold mb-4 flex md:gap-5 gap-3 text-color">
                <FaChevronRight className="font-extrabold lg:text-4xl md:text-3xl text-2xl rotate-90 my-auto" /> Data
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2  gap-6 my-10">
                {/* Card 1 */}
                <div className="bg-white p-6 shadow-md rounded-md text-left">
                    <h2 className="md:text-2xl text-xl  mb-2">Obesity Cost in US</h2>
                    <p className="lg:text-4xl md:text-3xl text-2xl font-bold mb-2">$173B</p>
                    <p className="text-gray-500 text-lg">Healthcare Cost (CDC)</p>
                </div>
                {/* Card 2 */}
                <div className="bg-white p-6 shadow-md rounded-md text-left">
                    <h2 className="md:text-2xl text-xl  mb-2">Obesity Prevalence</h2>
                    <p className="lg:text-4xl md:text-3xl text-2xl font-bold mb-2">42.4%</p>
                    <p className="text-gray-500 text-lg">of Americans (CDC 2020)</p>
                </div>
                {/* Card 3 */}
                <div className="bg-white p-6 shadow-md rounded-md text-left">
                    <h2 className="md:text-2xl text-xl  mb-2">Cost of T2 Diabetes</h2>
                    <p className="lg:text-4xl md:text-3xl text-2xl font-bold mb-2">$327B</p>
                    <p className="text-gray-500 text-lg">in US per year (ADA 2018)</p>
                </div>
                {/* Card 4 */}
                <div className="bg-white p-6 shadow-md rounded-md text-left">
                    <h2 className="md:text-2xl text-xl  mb-2">T2 Diabetes Prevalence</h2>
                    <p className="lg:text-4xl md:text-3xl text-2xl font-bold mb-2">9.5%</p>
                    <p className="text-gray-500 text-lg">of Americans (CDC 2021)</p>
                </div>
                {/* Card 5 */}
                <div className="bg-white p-6 lg:col-span-2 shadow-md rounded-md text-left">
                    <h2 className="md:text-2xl text-xl  mb-2">Unknown Food Intolerances</h2>
                    <p className="lg:text-4xl md:text-3xl text-2xl font-bold mb-2">65%</p>
                    <p className="text-gray-500 text-lg">of Americans (NIH 2021)</p>
                </div>
            </div>
            <div className="lg:w-[90%]">
                
                <TypingText text="UUnknown food intolerances have a significant impact on society and lifestyle." speed={30}></TypingText>
            </div>
        </div>
    );
};

export default Data;