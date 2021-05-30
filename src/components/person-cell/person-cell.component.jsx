import React from 'react';

import CustomButton from '../custom-button/custom-button.component'
import './person-cell.styles.scss';
import arrow from "../../assets/arrow.svg"


const PersonCell = (props) => {
    return(
        <div className="person-cell">
            <div className="person-information">
                <span className="name">{props.name}</span>
                <span className="name">{props.specie} from {props.homeworld}</span>
            </div>
            <CustomButton image={arrow} name={props.name} id={props.id}/>
        </div>
    )
}

export default PersonCell;