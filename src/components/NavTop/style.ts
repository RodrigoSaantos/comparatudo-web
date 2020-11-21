import styled from 'styled-components'

export const Container = styled.div`

  width: 100%;
  height: 44px;
  position: fixed;
  top: 0;
  background: var(--color-box-base);
  border-bottom: 1px solid var(--color-line-in-gray);
  opacity: 0;
  transform: scaleY(0) translateY(-60px);
  transition: all 0.3s ease-in-out;
  z-index: -1;


  div.nav-top {
    display: flex;
    height: 44px;
    justify-content: space-between;
    align-items: center;
    margin: auto;
    max-width: 980px;

  }

  &.on {
  opacity: 1;
  z-index: 1; 
  transform: scaleY(1) translateY(0px);
  transition: all 0.5s ease;
  padding: 0 5%;

  }

  div.nav-top div span:first-child {
    font: 500 1.2rem Poppins;
    margin-right: 10px;
    color: var(--color-text-base);
  }

  div.nav-top div button {
    color: var(--color-button-text);
    background: var(--color-secondary);
    border-radius: 4rem;
    padding: 6px 10px;
    font: 500 1.2rem Poppins;
    cursor: pointer;
    transition: 0.2s ease-in-out;

    &:hover {
      background: var(--color-secondary-dark)
    }
    &:focus {
      outline: none;
    }
  }
  
  /* div.nav-top span {
    color: var(--color-title-in-primary);
    font-weight: 700;
  } */

  div.nav-top h2 {
    color: var(--color-title-in-primary);
    font: 700 1.8rem Archivo;
  }



`