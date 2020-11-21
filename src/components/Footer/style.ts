import styled from 'styled-components'

export const FooterStyle = styled.footer`
background-color: var(--color-background);
font-size: 1.2rem;
margin: auto;

div.footer-content {
  width: 90%;
  max-width: 980px;
  margin: 0px auto auto;
  padding: 30px 0;
  text-align: left;
}

div.footer-table {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

div.footer-table a{
  text-decoration: none;
}

div ul li {
  margin-bottom: 10px;
}

div.contact a {
  display: flex;
  align-items: center;
}

div.footer-content strong {
  color: black;
  cursor: default;
}

a {
  color: var(--color-text-base);
  display: initial
}

ul li a:hover {
  text-decoration: underline;
}

img {
  margin-right: 5px;
}

div.copyright {
  border-top: 1px solid #515154;
  padding: 10px 0;
  margin-top: 15px;
}

@media(min-width:700px) {
  div.footer-table {
    grid-template-columns: 1fr 1fr auto;
  }
}

`