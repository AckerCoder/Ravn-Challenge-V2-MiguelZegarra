import React from 'react';

import './custom-button.styles.scss'

const CustomButton = ({image, name}) => {
    return(
        <button className="custom-button">
            <img src={image} alt={name} />            
        </button>
    )
};

export default CustomButton;