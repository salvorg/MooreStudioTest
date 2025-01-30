import React, {ReactNode} from 'react';

interface Props {
    className?: string;
    children?: ReactNode;
}

const LandingTitle: React.FC<Props> = ({ className = '', children }) => {
    return (
        <h2 className={`font-montserrat font-bold ${className}`}>
            {children}
        </h2>
    );
};

export default LandingTitle;