import React, { useContext } from 'react';
import {AppContext} from '../../contexts/provider.component'; 

import './custom-button.styles.scss';

const CustomButton = ({image, id}) => {
    const [currentPerson, setCurrentPerson] = useContext(AppContext);
    const handleClick = (e) => {
        e.preventDefault();
        setCurrentPerson(id);
    }

    return(
        <button className="custom-button" onClick={handleClick}>
            <img src={image} alt={currentPerson}/>            
        </button>
    )
};

export default CustomButton;