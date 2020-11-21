import styled from 'styled-components'

import searchIcon from '../../assets/images/icons/search.svg'


export const Input = styled.input`
    height: 40px;
    border: 1px solid var(--color-line-in-gray);
    border-radius: 0.8rem;
    padding-left: 38px;
    width: 96%;

  &:focus {
    box-shadow: 0px 0px 6px 0px var(--color-secondary);
    outline: none;
  }
`

export const SearchIcon = styled.button`
    position: absolute;
    left: 7px;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 40px;
    width: 40px;
    background: transparent;

    &:focus {
      outline: none;
    }

  span {
    background-image: url(${searchIcon});
    width: 20px;
    height: 20px;
    font-size: 0.01px;
    background-repeat: no-repeat;
    position: absolute;
    filter: brightness(0.5);
  }

`

export const ChildreenSearch = styled.div`
  max-width: 330px;
  position: relative;
  margin: auto;
  
  &.search-on {
    z-index: 102;
  }

`
export const Line = styled.div`

  max-width: 980px;
  margin: auto;
  text-align: left;

  &::before {
    content: "";
    margin-top: 40px;
    margin-right: auto;
    margin-left: auto;
    width: 90%;
    height: 1px;
    display: block;
    background: var(--color-line-in-gray);    
  }

  span {
    padding-left: 5%;
  }

`

export const CreateElement = styled.div`
    opacity: .5;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.2);
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    z-index: 99;
`

