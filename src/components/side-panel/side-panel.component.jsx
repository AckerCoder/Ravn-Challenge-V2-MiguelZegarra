import React from 'react';

import PersonCell from '../person-cell/person-cell.component';

import '../../queries/all-people.query'

import './side-panel.styles.scss';
import { GET_PEOPLE } from '../../queries/all-people.query';
import { useQuery } from '@apollo/client';

let allDataLoaded = false;

const done = () => {
    allDataLoaded = true;
}

const SidePanel = () => {
    const {data, fetchMore} = useQuery(GET_PEOPLE, {variables:{limit: 5}});

    function onFetch (){
       if(data && data.allPeople.pageInfo.hasNextPage)
        fetchMore({
            variables: {
                limit: 5,
                after: data?data.allPeople.pageInfo.endCursor:null
            },
            updateQuery: (prev, {fetchMoreResult}) => {
                if(!fetchMoreResult.allPeople.pageInfo.hasNextPage){
                    done();
                }
                fetchMoreResult.allPeople.people = [
                    ...prev.allPeople.people,
                    ...fetchMoreResult.allPeople.people
                ]
                return fetchMoreResult;
            } 
        })
    }


    if(!allDataLoaded){
        onFetch();
    }

    return (
        <div className="side-panel">
            {
                data?(data.allPeople.people.map((person)=>{
                    if(person.species){
                        return(<PersonCell
                                key = {person.id} 
                                name = {person.name} 
                                specie = {person.species.name} 
                                homeworld = {person.homeworld.name}
                                id = {person.id}

                            />
                        )
                    }else{
                        return(<PersonCell 
                                key = {person.id} 
                                name = {person.name}
                                specie = "Human" 
                                homeworld = {person.homeworld.name}
                                id = {person.id}
                            />
                        )
                    }
                })):null
            }
        </div>
        
    );
}


export default SidePanel;