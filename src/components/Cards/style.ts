import styled from 'styled-components'

export const Container = styled.div`
  width: 237px;
  height: 500px;
  margin: auto auto 20px;
  align-self: flex-end;
  border: 1px solid var(--color-background);
  border-radius: 0.8rem;
  background: var(--color-background);
  transition: box-shadow 0.2s ease-in;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-between;

  :hover {
    box-shadow: 7px 5px 15px 2px var(--color-secondary-dark);
  }

  figure {
    text-align: center;
  }

  img {
    cursor: pointer;
  }

  div {
    display: grid;
  }

  span {
    text-align: center;
    font-size: 2.5rem;
    font-weight: 700;
    padding: 15px 0;
    border-bottom: 1px solid var(--color-text-complement);
    width: 200px;
    margin: auto;
  }

  button {
    height: 70px;
    margin: 25px;
    border-radius: 0.8rem;
    color: var(--color-button-text);
    background: var(--color-secondary);
    cursor: pointer;
    transition: background 0.2s ease-in;
  }

  button:hover {
    background: var(--color-secondary-dark);
  }

`