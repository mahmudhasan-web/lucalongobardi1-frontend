import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import "./Token.css"

const Token = () => {
    return (
        <div className="lg:text-2xl md:text-xl text-lg py-5">
        <h1 className="lg:text-3xl md:text-2xl text-xl font-bold mb-6 flex gap-5">
        <FaChevronRight className="font-extrabold rotate-90" />Token
        </h1>
        <p className="lg:text-2xl md:text-xl text-lg  mb-8">
            <span className="font-bold">NUTRIGENIX </span>Token (NGX) is crafted to power the AI-driven nutritional ecosystem,
            serving as a catalyst for engagement, personalization, and long-term adherence to healthy eating habits. It
            harmonizes convenience, wellness, and digital innovation, empowering users to seamlessly integrate health-focused
            choices into their lifestyles.
        </p>

        {/* Section 1 */}
        <div className="mb-6">
            <h2 className="lg:text-3xl md:text-2xl text-xl font-bold mb-2">Dynamic Loyalty & Rewards</h2>
            <p className="">
                Users can earn NGX as they order through the platform, maintain consistency with personalized nutrition plans,
                and refer new clients. This incentivizes healthy habits and platform stickiness.
            </p>
        </div>

        {/* Section 2 */}
        <div className="mb-6">
            <h2 className="lg:text-3xl md:text-2xl text-xl font-bold mb-2">Tiered Access & Benefits</h2>
            <p className="">
                Holding a specific amount of NGX unlocks tiered benefits such as enhanced DNA-based nutritional analyses,
                priority support, exclusive food pairings, and bespoke AI-driven wellness insights.
            </p>
        </div>

        {/* Section 3 */}
        <div className="mb-6">
            <h2 className="lg:text-3xl md:text-2xl text-xl font-bold mb-2">Customizable Meal Experiences</h2>
            <p className="">
                NGX holders gain the ability to tailor and upgrade their meal selections, access premium ingredients, and introduce
                personalized meal customizations that align with evolving tastes and dietary needs.
            </p>
        </div>

        {/* Call to Action */}
   
    </div>
    );
};

export default Token;