import styled from 'styled-components'

interface Icss {
  backgroundImage: string
}


export const Div = styled.div`

div.rowheader {
    font: 500 1.5rem Archivo;
    margin-bottom: 30px;
    padding: 20px 0;
    border-bottom: 1px solid #ccc;
  }

  ul li {
    margin-bottom: 10px;
  }

  ul li strong {
    display: block;
  }

  @media(min-width: 700px) {

      display: grid;
      grid-template-columns: 215px 1fr;
    

    div.rowheader {
      padding: 55px 0;
      margin: 10px 0;
    }

    div.rowcolumn {
      padding: 55px 0 55px 3%;
      margin: 10px 0;
      border-bottom: 1px solid #ccc;
    }
  }

`

export const Figure = styled.figure`

  width: 100%;
  height: 384px;
  background-repeat: no-repeat !important;
  background-size: contain !important;
  background: ${(props: Icss) => props.backgroundImage};
  
`