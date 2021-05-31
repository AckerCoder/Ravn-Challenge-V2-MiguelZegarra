import React, { useContext } from 'react';
import { AppContext } from '../../contexts/provider.component';

import './data-cell.styles.scss';

import {GET_PERSON} from '../../queries/person.query'
import { useQuery } from '@apollo/client';
import {capitalize} from '../../utils/capitalize.utils'

const DataCell = () => {
    const [currentPerson] = useContext(AppContext);
    const {data} = useQuery(GET_PERSON, {variables:{id: currentPerson}});

    const current = data?data.person:null;

    if(data && data.person){
        return(
            <div className="data-cell">
                <div className="general-information">
                    <h3>General Information</h3>
                    <div className="section-information">
                        <span className="tag-info">Eye Color</span>
                        <span className="info">{capitalize(current.eyeColor)}</span>
                    </div>
                    <div className="section-information">
                        <span className="tag-info">Hair Color</span>
                        <span className="info">{capitalize(current.hairColor)}</span>
                    </div>
                    <div className="section-information">
                        <span className="tag-info">Skin Color</span>
                        <span className="info">{capitalize(current.skinColor)}</span>
                    </div>
                    <div className="section-information">
                        <span className="tag-info">Birth Year</span>
                        <span className="info">{capitalize(current.birthYear)}</span>
                    </div>

                </div>

                <div className="Vehicles">
                    {
                        current.vehicleConnection.vehicles.length?<h3>Vehicles</h3>:<div></div>
                    }
                    {
                        current.vehicleConnection.vehicles.map(vehicle=>{
                            return(
                                <div className="section-information" key={vehicle.name}>
                                    <span className="vehicle-name">{vehicle.name}</span>
                                </div>
                            )
                        })
                    }                    
                </div>
            </div>
        )
    }else{
        return(<div></div>)
    }
}

export default DataCell;