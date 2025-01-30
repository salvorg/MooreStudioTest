import React from 'react';
import LandingTitle from "../ui/LandingTitle";
import CategoriesCard from "../ui/cards/CategoriesCard";
import {cards} from "../../constants";

const CategoriesSection = () => {
    return (
        <div className="bg-cream">
            <div className="max-w-container mx-auto pt-20 pb-40">
                <LandingTitle className="text-coffee text-56">
                    Просмотр товаров
                    <span className="block">по <span className="text-sand">категориям</span></span>
                </LandingTitle>
                <div className="flex space-x-10 mt-10">
                    {cards.map((card) => (
                        <CategoriesCard image={card.image} title={card.title} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CategoriesSection;