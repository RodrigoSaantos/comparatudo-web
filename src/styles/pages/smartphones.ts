import styled from 'styled-components'

export const Main = styled.main`

@media(min-width: 700px) {

max-width: 980px;
margin: auto;
width: 90%;
}
`

export const Div = styled.div`
@media(min-width: 700px) {

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 10px;

}
`