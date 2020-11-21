import styled from 'styled-components'

export interface Icss {
  backgroundStyle?: string
  widthStyle?: string
  heightStyle?: string
  textSubtitleStyle?: string
  linkStyle?: string
  backgroundUrl?: string
}

export const HeaderHeros = styled.header(props => ({
  background: props.color,
  width: '100%',
  margin: 'auto',
  textAlign: 'center',
  padding: '7rem 0',
  
}));

export const HeaderHero = styled.header`
  background: ${(props:Icss) => props.backgroundStyle};
  width: ${(props:Icss) => props.widthStyle};
  max-width: 2560px;
  height: ${(props:Icss) => props.heightStyle};
  margin: auto auto 10px;
  text-align: center;
  padding: 7rem 0;

h1 {
  font: 700 4rem Archivo;
}

p {
  font-size: 1.6rem;
  margin-top: 12px;
  margin-bottom: 12px;
}

& > div {
  margin: auto;
  max-width: 90%;
}

div p a {
  color: ${(props:Icss) => props.textSubtitleStyle };
}

a {
  color: ${(props:Icss) => props.linkStyle };
  text-decoration: none;
}

a:hover span:nth-child(1) {
  text-decoration: underline;
}

figure {
  margin-top: 40px;
  background: ${(props: Icss) => props.backgroundUrl};
  width: auto;
  height: 231px;
  background-size: contain;
  background-repeat: no-repeat;
}

@media (min-width:700px) {


  header.header-hero {
      max-width: 980px;
  }
  
  header div.header-content {
      width: 980px;
  }
  
  header div h1.typography-headline {
      font-size: 4.5rem;
  }
  
  header div p.typography-intro {
      font-size: 2rem;
      color: var(--color-secondary);
  }

  figure {
    max-width: 400px;
    margin: 32px auto auto;
  }
  
}


` 
