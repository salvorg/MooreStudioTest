import React, {useState} from 'react';
import Header from "../Header/Header";
import LandingTitle from "../ui/LandingTitle";
import LandingButton from "../ui/buttons/LandingButton";

const HeroSection = () => {
    const [inputText, setInputText] = useState<string>('');

    return (
        <div className="bg-hero-bg bg-cover">
            <div className="max-w-container mx-auto pt-8 pb-80">
                <Header/>
                <LandingTitle className="text-52 text-white mt-60 mb-20">
                    Ваш путеводитель
                    <span className="block">в области сырья</span>
                </LandingTitle>
                <div className="flex space-x-8">
                    <input
                        type="text"
                        className="rounded-2xl px-4 py-3 border border-gray-300"
                        placeholder="Найти..."
                        value={inputText}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setInputText(event.target.value)
                        }}
                    />
                    <button
                        type='button'
                        className="p-1 pl-4 flex items-center bg-white font-montserrat font-medium text-black text-sm rounded-2xl">
                        Заказать звонок
                        <div className="flex justify-center items-center w-10 h-10 ml-3 bg-txtOlive rounded-2xl">
                            <svg width="11" height="10" viewBox="0 0 11 10" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M10.2431 0.756906C10.2431 0.480764 10.0192 0.256906 9.74309 0.256906L5.24309 0.256906C4.96695 0.256906 4.74309 0.480764 4.74309 0.756906C4.74309 1.03305 4.96695 1.25691 5.24309 1.25691L9.24309 1.25691L9.24309 5.25691C9.24309 5.53305 9.46695 5.75691 9.74309 5.75691C10.0192 5.75691 10.2431 5.53305 10.2431 5.25691L10.2431 0.756906ZM1.61137 9.59574L10.0966 1.11046L9.38954 0.403353L0.904259 8.88863L1.61137 9.59574Z"
                                    fill="white"/>
                            </svg>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;