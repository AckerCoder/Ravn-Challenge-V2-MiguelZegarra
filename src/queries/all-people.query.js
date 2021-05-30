import {gql} from 'apollo-boost';

export const GET_PEOPLE = gql`
  query people($limit: Int,$after: String = null){
    allPeople(after: $after,first: $limit){
      people{
        id
        name
        species{
          name
        }
        homeworld{
          name
        }
      }
      pageInfo{
        endCursor
        hasNextPage
      }
    } 
  }
`