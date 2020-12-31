import styled from 'styled-components';

interface ContainerProps {
  backgroundColor?: string;
  isFocused?: boolean;
}

export const Container = styled.button<ContainerProps>`
  width: 35px;
  height: 35px;
  border-radius: 50px;
  background: transparent;
  border: 1px solid transparent;
  padding: 2px;

  &:hover {
    border-color: var(--color-line-in-gray);

  }

  &:focus {
    outline: none;
    border-color: var(--color-secondary);

  }

  figure {
    background: ${props => props.backgroundColor ? props.backgroundColor : 'red'};
    height: 100%;
    border-radius: 50%;
    box-shadow: inset 0 3px 2.5px rgba(0,0,0,0.1);
  }
`;

export const Text = styled.span<ContainerProps>`
  font-size: 7px;
  display: block;
  visibility: ${props => props.isFocused ? 'hidden' : 'visible'};
`;