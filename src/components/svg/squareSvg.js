
import React from "react";

const Square = ({ className }) => {

    return (
        <svg viewBox="0 0 30 30" className={className}>
            <path d="M28,2V28H2V2H28m.13-2H1.88A1.88,1.88,0,0,0,0,1.88V28.13A1.88,1.88,0,0,0,1.88,30H28.13A1.87,1.87,0,0,0,30,28.13V1.88A1.88,1.88,0,0,0,28.13,0Z"></path>
        </svg>
    )
};

export default Square;