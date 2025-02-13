'use client'
// import Image from 'next/image';
import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
// import image from '@/assists/Vector 6.png'
import "./Food.css"
import TypingText from '../Test';

const Food = () => {
    return (
        <div className="lg:text-3xl md:text-2xl text-xl lg:w-[75%] md:[90%] w-full py-2 px-2 relative">
            <h1 className="lg:text-3xl md:text-2xl text-xl font-bold mb-6 flex md:gap-5 gap-3 text-color">
                <FaChevronRight className="font-extrabold lg:text-4xl md:text-3xl text-2xl rotate-90 my-auto" /> Food and Nutrition
            </h1>
            <p className=" font-semibold mb-8">
                Starting from the user DNA we determine the optimal food and nutritional supplements and through a Large Language
                Model we provide a complete food lifestyle support from a single meal to a complete month or year of planning.
            </p>

            {/* Section 1 */}
            <div className="mb-6">
                <h2 className=" font-bold mb-2">Eat what is good for your genes</h2>
                <p className="">
                    Our AI Algorithm analyzes your DNA and understands what is good for your health.
                </p>
            </div>

            {/* Section 2 */}
            <div className=''>
                <div className='relative z-50'>
                    <div className="mb-6">
                        <h2 className=" font-bold mb-2">Dinner and Lunch on Autopilot</h2>
                        <p className="">
                            We automate food ordering and delivery based on your needs and taste.
                        </p>
                    </div>

                    {/* Section 3 */}
                    <div className="mb-6">
                        <h2 className=" font-bold mb-2">Convenience meets customization</h2>
                        <p className="">
                            Personalize your meals with a perfect balance of health and flavor.
                        </p>
                    </div>

                    {/* Section 4 */}
                    <div className="mb-6">
                        {/* <h2 className=" mb-2">Convenience meets customization</h2> */}
                        <p className="">
                            Our AI algorithm discovers delicious, unexpected food options and restaurants tailored to your dietary needs.
                        </p>
                    </div>

                    {/* Section 5 */}
                    <div className="mb-6">
                        {/* <h2 className=" font-bold mb-2">Easy Meal Planning</h2> */}
                        <TypingText text="WWe plan your meal for a day, a week, or a month. You can change whenever you want, and the rest we do it all." speed={30}></TypingText>
                        {/* <p className="">
                            We plan your meal for a day, a week, or a month. You can change whenever you want, and the rest we do it all.
                        </p> */}
                    </div>
                </div>
                <div className='absolute top-[30%] right-[5%] opacity-50'>
                    <img src={`/Vector 6.png`} alt='image' className='lg:w-64 w-56'></img>
                </div>
            </div>

        </div>
    );
};

export default Food;