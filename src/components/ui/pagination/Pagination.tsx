import { useState } from "react";

const Pagination = ({ totalPages = 5 }) => {
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return (
        <div className="flex items-center gap-2">
            <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="hover:opacity-70 disabled:opacity-50"
            >
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M7.43431 20.5657C7.12189 20.2533 7.12189 19.7467 7.43431 19.4343L12.5255 14.3431C12.8379 14.0307 13.3444 14.0307 13.6569 14.3431C13.9693 14.6556 13.9693 15.1621 13.6569 15.4745L9.13137 20L13.6569 24.5255C13.9693 24.8379 13.9693 25.3444 13.6569 25.6569C13.3444 25.9693 12.8379 25.9693 12.5255 25.6569L7.43431 20.5657ZM32 20.8H8V19.2H32V20.8Z"
                        fill="#8B8B8B"/>
                </svg>
            </button>

            {[...Array(totalPages)].map((_, index) => {
                const page = index + 1;
                return (
                    <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={`w-10 h-10 flex items-center justify-center font-montserrat font-medium rounded-full transition-all ${
                            currentPage === page
                                ? "bg-txtOlive text-white border-blue-500"
                                : "bg-white text-steelGrey border-gray-300 hover:bg-gray-100"
                        }`}
                    >
                        {page}
                    </button>
                );
            })}

            <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="hover:opacity-70 disabled:opacity-50"
            >
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M32.5657 20.5657C32.8781 20.2533 32.8781 19.7467 32.5657 19.4343L27.4745 14.3431C27.1621 14.0307 26.6556 14.0307 26.3431 14.3431C26.0307 14.6556 26.0307 15.1621 26.3431 15.4745L30.8686 20L26.3431 24.5255C26.0307 24.8379 26.0307 25.3444 26.3431 25.6569C26.6556 25.9693 27.1621 25.9693 27.4745 25.6569L32.5657 20.5657ZM8 20.8H32V19.2H8V20.8Z" fill="#8B8B8B"/>
                </svg>
            </button>
        </div>
    );
};

export default Pagination;