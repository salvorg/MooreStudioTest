import React, {useState} from 'react';

const CardCounter = () => {
    const [quantity, setQuantity] = useState(1);

    const handleIncrease = () => setQuantity(prev => prev + 1);
    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(prev => prev - 1);
        }
    };

    return (
        <div className="flex items-center justify-center space-x-2 w-fit p-1 bg-white rounded-full border border-ligthGrey">
            <button
                onClick={handleDecrease}
                className="w-6 h-6 bg-grey rounded-full flex items-center justify-center text-xl font-bold"
            >
                -
            </button>
            <span className="text-base">{quantity}</span>
            <button
                onClick={handleIncrease}
                className="w-6 h-6 bg-grey rounded-full flex items-center justify-center text-xl font-bold"
            >
                +
            </button>
        </div>
    );
};

export default CardCounter;