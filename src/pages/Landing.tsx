import React from 'react';
import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import CategoriesSection from "../components/sections/CategoriesSection";
import RecommendedSection from "../components/sections/RecommendedSection";

const Landing = () => {
    return (
        <div>
            <HeroSection />
            <AboutSection />
            <CategoriesSection />
            <RecommendedSection />
        </div>
    );
};

export default Landing;