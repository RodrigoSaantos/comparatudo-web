import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 20px;

div.compare-row {
  display: grid;
  grid-template-columns: 1fr 1fr;

  padding-bottom: 48px;
  margin: 6px 0;

  padding-bottom: 15px;

}

div.compare-column.compare-column-three {
  display: none;
}

div.compare-column {
  padding: 0 10px;
  text-align: center;
}

div.compare-column p {
  text-align: left ;
}
div.compare-column strong {
  display: block;
}

@media (min-width: 700px) {

  grid-template-columns: 1fr 1fr 1fr;

  div.compare-column.compare-column-three {
    display: initial;
  }    
  
  div.compare-column {
      padding: 0 25px;
  }
  
}



`