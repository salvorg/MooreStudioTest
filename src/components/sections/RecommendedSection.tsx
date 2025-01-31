import React from 'react';
import LandingTitle from "../ui/LandingTitle";
import RecommendedCard from "../ui/cards/RecommendedCard";
import {recommended} from "../../constants";
import LandingButton from "../ui/buttons/LandingButton";
import Pagination from "../ui/pagination/Pagination";

const RecommendedSection = () => {
    return (
        <div className="bg-cream2">
            <div className="max-w-container mx-auto py-20">
                <p className="text-txtOlive text-lg font-medium font-montserrat">Вам могут понравится</p>
                <LandingTitle className="relative text-56 text-txtTitle mt-2">
                    Рекомендуемые <span className="block">товары</span>
                    <LandingButton className="absolute bottom-1 right-1">Все товары</LandingButton>
                </LandingTitle>
                <div className="flex space-x-10 mt-8">
                    {recommended.map((card) => (
                        <RecommendedCard
                            key={card.id}
                            image={card.image}
                            description={card.description}
                            weight={card.weight}
                            price={card.price}
                        />
                    ))}
                </div>
                <div className="flex justify-center mt-8">
                    <Pagination/>
                </div>
            </div>
        </div>
    );
};

export default RecommendedSection;