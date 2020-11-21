import styled from 'styled-components'

interface Icss {
  backgroundImage: string
}

export const Figure = styled.div`
  margin: 30px auto 0 auto;
  width: 90%;

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

  figure.card-img.iPhone11Pro {
    width: 81%;
  }

  figure.card-img.iPhoneSE2nd {
    width: 68%;
  }

  figure.card-img.GalaxyA71 {
    width: 52%;
  }

  figure.card-img.iPhoneXS {
    width: 72%
  }

  figure.card-img.iPhone11ProMax {
    width: 82%
  }

  figure.card-img.iPhone11 {
    width: 82%
  }

  figure.card-img.iPhone12 {
    width: 83%
  }

`