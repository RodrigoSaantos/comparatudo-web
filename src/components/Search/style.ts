import styled from 'styled-components'

export const Container = styled.div`
  width: 90%;
  margin: auto auto 20px;
  max-width: 980px;

  label {
      font-size: 1.4rem;
      line-height: 1.6rem;
      display: block;
      margin-bottom: 8px;
  }

  div {
    display: flex;
    position: relative;
  }

  input:focus {
    outline: none;
    box-shadow: 0px 0px 12px 0px var(--color-secondary-dark);
    border-radius: 0.8rem;
  }

  input {
    flex: 1;
    background-color: var(--color-background);
    border-radius: 0.8rem 0.8rem 0.8rem 0.8rem;
    border: 0;
    padding: 16px 24px;
    font-size: 16px;
    width: 90%;
    padding-left: 85px;
  }

  button {
    width: 100%;
    max-width: 72px;
    height: 57px;
    background-color: var(--color-secondary);
    border: 0;
    border-radius: 0.8rem 0rem 0rem 0.8rem;
    transition: background-color 400ms;
    cursor: pointer;
    position: absolute;
    align-items: center;
    display: flex;
    justify-content: center;

    &:focus {
      outline: none;
    }

    &:hover {
      background-color: var(--color-secondary-dark);
    }
  }

`