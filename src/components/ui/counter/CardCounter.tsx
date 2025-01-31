import React, {useState} from 'react';

const CardCounter = () => {
    const [quantity, setQuantity] = useState(0);

    const handleIncrease = () => setQuantity(prev => prev + 1);
    const handleDecrease = () => {
        if (quantity > 0) {
            setQuantity(prev => prev - 1);
        }
    };

    return (
        <div className="flex items-center justify-center space-x-2 w-fit p-1 bg-white rounded-full border border-ligthGrey">
            <button
                onClick={handleDecrease}
                className="w-6 h-6 bg-grey pb-[2px] rounded-full flex items-center justify-center text-xl"
            >
                -
            </button>
            <span className="text-base">{quantity}</span>
            <button
                onClick={handleIncrease}
                className="w-6 h-6 bg-grey pb-[3px] rounded-full flex items-center justify-center text-xl"
            >
                +
            </button>
        </div>
    );
};

export default CardCounter;