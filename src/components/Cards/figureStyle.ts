import styled from 'styled-components'

interface Icss {
  backgroundImage: string
}

export const Figure = styled.div`
  margin: 10px auto 0 auto;
  width: 90%;
  border: 20px solid white;
  border-radius: 40px;
  background: white;

  figure.card-img {
    text-align: center;
    width: 170px;
    height: 237px;
    background-size: contain !important;
    background-repeat: no-repeat !important;
    margin: auto;
    cursor: pointer;
    background: ${(props: Icss) => props.backgroundImage};
  }

  

`