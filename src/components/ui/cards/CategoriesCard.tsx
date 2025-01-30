import React from "react";
import LandingButton from "../buttons/LandingButton";

interface Props {
    image: string;
    title: string;
}

const CategoriesCard: React.FC<Props> = ({ image, title }) => {
    return (
        <div
            className="relative w-[296px] h-[396px] rounded-xl overflow-hidden bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
        >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"></div>
            <div className="absolute bottom-5 left-5 flex flex-col">
                <p className="max-w-[200px] text-xl text-white font-bold mb-5">{title}</p>
                <LandingButton className="w-[250px]">Подробнее</LandingButton>
            </div>
        </div>
    );
};

export default CategoriesCard;
