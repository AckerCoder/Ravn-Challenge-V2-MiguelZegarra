import React from 'react';

import CustomButton from '../custom-button/custom-button.component'
import './person-cell.styles.scss';
import arrow from "../../assets/arrow.svg"


const PersonCell = ({id, name, specie, homeworld}) => {
    return(
        <div className="person-cell">
            <div className="person-information">
                <span className="name">{name}</span>
                <span className="details">{specie} from {homeworld}</span>
            </div>
            <CustomButton image={arrow} name={name} id={id}/>
        </div>
    )
}

export default PersonCell;