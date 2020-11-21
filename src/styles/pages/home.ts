import styled from 'styled-components'

export const Container = styled.div`
    height: 100vh;
`

export const Grid = styled.div`


@media(min-width: 700px) {
    
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 2560px;
  margin: auto;
  grid-column-gap: 10px;

}


`
