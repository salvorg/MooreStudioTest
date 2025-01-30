import React from 'react';
import LandingButton from "../buttons/LandingButton";

interface Props {
    image: string;
    description: string;
    weight: number;
    price: number;
}

const RecommendedCard: React.FC<Props> = ({ image, description, weight, price }) => {
    return (
        <div className="w-[290px] h-[420px] p-4 rounded-xl bg-white">
            <div
                className="w-[258px] h-[204px] rounded-xl overflow-hidden bg-cover bg-center"
                style={{backgroundImage: `url(${image})`}}
            >
            </div>
            <p className="mt-4 text-base text-black font-semibold">{description}</p>
            <p className="mt-1 text-xs text-txtGrey">Вес: {weight} кг</p>
            <p className="mt-2.5 text-xl font-bold">{price}с</p>
            <LandingButton className="w-[258px] border border-black mt-4">В корзину</LandingButton>
        </div>
    );
};

export default RecommendedCard;