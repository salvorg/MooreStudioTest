import React from 'react';
import LandingButton from "../buttons/LandingButton";
import CardCounter from "../counter/CardCounter";

interface Props {
    image: string;
    description: string;
    weight: number;
    price: number;
}

const RecommendedCard: React.FC<Props> = ({image, description, weight, price}) => {
    return (
        <div className="w-[290px] h-[420px] p-4 rounded-xl bg-white">
            <div
                className="w-[258px] h-[204px] rounded-xl overflow-hidden bg-cover bg-center"
                style={{backgroundImage: `url(${image})`}}
            >
            </div>
            <p className="mt-4 text-base text-black font-semibold">{description}</p>
            <p className="mt-1 text-xs text-txtGrey">Вес: {weight} кг</p>
            <div className="flex justify-between items-center text-txtOlive">
                {price}
                <CardCounter />
            </div>
            <LandingButton className="w-[258px] border border-borderGrey mt-4">В корзину</LandingButton>
        </div>
    );
};

export default RecommendedCard;