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
                        className="relative w-[742px] h-[503px] bg-cover bg-center rounded-xl"
                        style={{ backgroundImage: `url(https://s3-alpha-sig.figma.com/img/9d54/703a/141a1e8a566f098a682e3d97d74a1fe0?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=MRb-1cObitVXXh5soPh25027jAXhX7e8Mo4LxcwgdomHhi0IfIDbijrm2XzLno~9EhowuhL0fa20tzoKCbbXGeJdLoDWgm3wh2L3lPL~oHmkhZJ0shTkzAXT3m-oMvn2cq~zjFwPrSiU2xHFvZ~EonqTU~UrpUaIqZDmsHiaPHOqtw7u3eFe00TNthC~Xo14DtWZVKe9mE5O05kQdKo-mmHw0bC~2Cpm5mvuGedQZ1je5M4LdhJbCnkxUCCpey2vpLVmiDm~IStY619Rf5sgX452VQb8iwucdO2JxOAl7BDYCwguEDMFjk1WHCN0kmvjDRfe7HKnUg5lAp3Hgim3OA__)` }}
                    >
                        <LandingButton className="absolute bottom-8 right-9 ">Читать далее</LandingButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;