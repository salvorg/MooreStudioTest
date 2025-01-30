import React from 'react';
import LandingTitle from "../ui/LandingTitle";
import LandingButton from "../ui/buttons/LandingButton";

const AboutSection = () => {
    return (
        <div className="bg-white">
            <div className="max-w-container mx-auto pt-30 pb-40">
                <LandingTitle className="text-5xl txtTitle mt-60 mb-20">
                    Мы помогаем местным кондитерам и шеф-поварам претворять в жизнь свои самые смелые кулинарные задумки
                </LandingTitle>
                <div className="mt-12 flex space-x-3">
                    <div className="relative w-[525px] h-[503px] px-8 text-white bg-txtOlive rounded-xl">
                        <p className="absolute bottom-8 text-base">
                            <span className="before:content-['—']"> </span>Мы предлагаем вам не росто сырье, а
                            экспертность и индивидуальный подход: всегда готовы помочь найти альтернативу, закрыть
                            срочную потребность или предложить уникальное решение.
                        </p>
                    </div>
                    <div
                        className="relative w-[742px] h-[503px] bg-about-bg bg-cover rounded-xl"
                    >
                        <LandingButton className="absolute bottom-8 right-9 ">Читать далее</LandingButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;