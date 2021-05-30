import React from 'react';

import PersonCell from '../person-cell/person-cell.component';

import {Query} from 'react-apollo';
import '../../queries/all-people.query'

import './side-panel.styles.scss';
import { GET_PEOPLE } from '../../queries/all-people.query';


const SidePanel = () => {
    return (
        <div className="side-panel">
            <Query query={GET_PEOPLE} variables={{first:82, after: null}}>
                {
                    ({loading, error, data, fetchMore}) => {
                            // if(data && data.allPeople.pageInfo.hasNextPage)
                            // fetchMore({variables:{
                            //     first: 5,
                            //     after: data.allPeople.pageInfo.endCursor
                            //     }, updateQuery: (prevResult, {fetchMoreResult})=>{
                            //             if(!fetchMoreResult)return prevResult;

                            //             fetchMoreResult.allPeople.people=[
                            //                 ...prevResult.allPeople.people,
                            //                 ...fetchMoreResult.allPeople.people
                            //             ];
                            //             console.log(fetchMoreResult);
                            //             if(fetchMoreResult.allPeople.pageInfo.hasNextPage)
                            //                 return fetchMoreResult;                                    
                            //             return fetchMoreResult;                                    
                            //         }
                            //     }
                            // );
                        if(loading){
                            return <div></div>
                        }else{
                            return (data.allPeople.people.map((person)=>{
                                if(person.species){
                                    
                                    return(<PersonCell
                                            key = {person.id} 
                                            name = {person.name} 
                                            specie = {person.species.name} 
                                            homeworld = {person.homeworld.name}
                                        />
                                    )
                                }else{
                                    return(<PersonCell 
                                            key = {person.id} 
                                            name = {person.name}
                                            specie = "Human" 
                                            homeworld = {person.homeworld.name}
                                        />
                                    )
                                }
                            }))
                        }
                    }
                }
            </Query>
        </div>

    );
}


export default SidePanel;