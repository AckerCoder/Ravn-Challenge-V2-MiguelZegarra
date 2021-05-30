import {gql} from '@apollo/client';

export const GET_PEOPLE = gql`
  query people($first: Int = 5,$after: String = null){
    allPeople(after: $after,first:$first){
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