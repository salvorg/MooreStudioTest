import React from 'react';
import Navbar from "../Navbar/Navbar";

const Header = () => {
    return (
        <header className="flex items-center justify-between">
            <div className="px-4 py-2 bg-white rounded-xl">
                <a href="/">
                    <img src="/food-land-logo.svg" alt="main-logo"/>
                </a>
            </div>
            <Navbar/>
            <div className="flex justify-between items-center space-x-2.5">
                {/*shopping cart button*/}
                <button className="w-[44px] h-[44px] flex justify-center items-center rounded-full bg-white">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M4.63603 9.56115C4.86529 7.84141 6.33224 6.55704 8.06719 6.55704H14.1208C15.8558 6.55704 17.3228 7.84141 17.552 9.56115L18.3598 15.6209C18.6365 17.696 17.0221 19.5398 14.9287 19.5398H7.25937C5.16592 19.5398 3.55158 17.696 3.82821 15.6209L4.63603 9.56115Z"
                            stroke="black" stroke-width="1.29807"/>
                        <path
                            d="M14.549 8.27974V5.68254C14.549 3.77084 12.9992 2.2211 11.0875 2.2211V2.2211C9.17584 2.2211 7.6261 3.77084 7.6261 5.68254L7.6261 8.27974"
                            stroke="black" stroke-width="1.29807" stroke-linecap="round"/>
                        <ellipse cx="17.4401" cy="6.25794" rx="4.05679" ry="4.05755" fill="#FF0000"/>
                    </svg>
                </button>
                {/*user button*/}
                <button className="w-[44px] h-[44px] flex justify-center items-center rounded-full bg-white">
                    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="3.80793" cy="3.80793" r="3.80793" transform="matrix(-1 0 0 1 16.1223 3.48876)"
                                stroke="black" stroke-width="1.42797"/>
                        <path
                            d="M5.65051 16.7543C5.65051 15.9353 6.1654 15.2047 6.93673 14.9292V14.9292C10.4143 13.6872 14.2145 13.6872 17.6921 14.9292V14.9292C18.4634 15.2047 18.9783 15.9353 18.9783 16.7543V18.0067C18.9783 19.1371 17.9771 20.0054 16.858 19.8456L15.9494 19.7158C13.5383 19.3713 11.0905 19.3713 8.67936 19.7158L7.77078 19.8456C6.65172 20.0054 5.65051 19.1371 5.65051 18.0067V16.7543Z"
                            stroke="black" stroke-width="1.42797"/>
                    </svg>
                </button>
            </div>
        </header>
    );
};

export default Header;