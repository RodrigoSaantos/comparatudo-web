import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
}

export const Container = styled.div<ContainerProps>`
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-bottom: 1px solid rgba(0,0,0,0.295);
  border-radius: 0.5rem;
  position: relative;

  ${props => props.isFocused && css`
      transition: border 0.2s ease-out;
      outline: 0;
      border-radius: 0.8rem;
      box-shadow: 0px 0px 8px 2px var(--color-secondary);
  `};

  input {
    width: 85%;
    margin: auto 2px auto 10px;
    font-family: Arial;
    font-weight: 800;

    &:focus {
        outline: none;
    }
  }
`;