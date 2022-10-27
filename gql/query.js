import { gql } from "@apollo/client"



export const characterQuery = (page,search) => {

  return gql`
    query{
      characters (page:${ page ? page : null }, filter:{ name: ${ search ? search : null }}) {
        info{
          count,
          next
        }
        results{
          id,
          name,
          image,
          gender,
          status,
          species,
          origin {
            name
            type,
            dimension,
          
          },
      
    
          
        }
    }
    }
  
  
  `
}

