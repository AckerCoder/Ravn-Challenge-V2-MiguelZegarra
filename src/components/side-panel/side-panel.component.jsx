import React, {useState, useEffect} from 'react';

import PersonCell from '../person-cell/person-cell.component';

import '../../queries/all-people.query'

import './side-panel.styles.scss';
import { GET_PEOPLE } from '../../queries/all-people.query';
import { useQuery } from '@apollo/client';


const SidePanel = () => {
    const [finish, setFinish] = useState(false);
    
    const {data, fetchMore} = useQuery(GET_PEOPLE, {variables:{limit: 5}});
    function onFetch (){
            if(data && data.allPeople.pageInfo.hasNextPage)
            fetchMore({
                variables: {
                    limit: 5,
                    after: data.allPeople.pageInfo.endCursor
                },
                updateQuery: (prev, {fetchMoreResult}) => {
                    fetchMoreResult.allPeople.people = [
                        ...prev.allPeople.people,
                        ...fetchMoreResult.allPeople.people
                    ];
                    setFinish(fetchMoreResult.allPeople.pageInfo.hasNextPage);
                    return fetchMoreResult;
                }
            })
    }
    useEffect(() => {onFetch()}, [data]);
    return (
        <div className="side-panel">
            {
                data?(data.allPeople.people.map((person)=>{
                        return(
                                <PersonCell
                                    key = {person.id}
                                    name = {person.name}
                                    specie = {person.species?person.species.name:null}
                                    homeworld = {person.homeworld.name}
                                    id = {person.id}
                                />
                        )
                })):null
            }
            {
                !finish?"Loading":<div></div>
            }
        </div>

    );
}


export default SidePanel;