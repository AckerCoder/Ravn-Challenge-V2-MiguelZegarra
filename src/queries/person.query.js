import {gql} from 'apollo-boost';

export const GET_PERSON = gql`
query PersonQuery($id: ID!) {
    person(id: $id) {
        name
        eyeColor
        hairColor
        skinColor
        birthYear
        vehicleConnection {
            vehicles {
                name
            }
        }
    }
}
  
`