import styled from 'styled-components'

interface Icss {
    backgroundImage: string
}

export const Container = styled.div`

  display: grid;
  top: 0;
  grid-template-columns: 1fr 1fr;
  align-items: center;

  div.image-column {
      width: 100%;
  }

  div.image-column.image-column-three {
      display: none;
  }

  div.compare-column.compare-column-three {
      display: none;
  }

  div.row-price {
      max-height: 130px;
  }

  div.price-nav {
      height: 100px;
      text-align: center;
      margin: 26px 3rem 0;
  }

  div ul.price-nav-items {
      display: grid;
      row-gap: 10px;
      grid-template-columns: 1fr 1fr;
  }

  div ul li.price-nav-item {
      position: relative;
  }

  button.price-nav-button {
      width: 32px;
      height: 32px;

      border-radius: 50px;

      font-size: 7px;

  }

  div.price-nav-text {
      font-size: larger;
      position: absolute;
      top: 35px;
  }

  div.price-nav-text.buttonname-amazon {
      left: 24%;
  }

  div.price-nav-text.buttonname-magalu {
      left: 26%;
  }

  div.price-nav-text.buttonname-submarino  {
      left: 17%;
  }

  div.price-nav-text.buttonname-extra  {
      left: 37%;
  }

  div.price-value {
      margin-top: 26px;
  }

  div.price-value h1 {
      font-size: 1.8rem;
      margin-bottom: 6px;
  }

  div.price-value a {
      color: var(--color-secondary);
      font-size: 1.4rem;
  }

  @media (min-width: 700px) {

    grid-template-columns: 1fr 1fr 1fr;
      
                  
    div ul.price-nav-items {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
            
    div.price-nav-text {
        font-size: larger;
        position: absolute;
        top: 35px;
    }
    
    div.price-nav-text.buttonname-amazon {
        left: 22%;
    }
    
    div.price-nav-text.buttonname-magalu {
        left: 23%;
    }
    
    div.price-nav-text.buttonname-submarino  {
        left: 14%;
    }
    
    div.price-nav-text.buttonname-extra  {
        left: 35%;
    }
        
    div.price-value h1 {
        font-size: 2.5rem;
    }

    div.image-column.image-column-three {
        display: initial;
    }

  }

  @media(max-width: 320px) {
    div.price-value h1 {
        font-size: 1.5rem;
    }
  
    div.price-value a {
        font-size: 1.2rem;
    }
  }

`

export const Figure = styled.div`

width: 80%;
margin: 45px auto auto;

figure.gallery-image {
    height: 187px;
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: contain;
    flex: 1;
    transition: background-image ease-in 0.15s;

    background-image: ${(props: Icss ) => props.backgroundImage}
}

@media (min-width: 700px) {

    figure.gallery-image {
        height: 348px;
        background-size: contain;
    }
}
`