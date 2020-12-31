import React, { ButtonHTMLAttributes, useState } from 'react';

import { Container, Text } from './style';

interface ButtonPriceProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
  backgroundColor?: string;

}

const ButtonPrice: React.FC<ButtonPriceProps> = ({
  name,
  backgroundColor,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(true);
  
  return (
    <>
      <Container
        backgroundColor={backgroundColor}
        onClickCapture={() => setIsFocused(false)}
        onBlur={() => setIsFocused(true)}
       {...rest}
      >
        <figure>
        </figure>
      </Container>
      <Text isFocused={isFocused} >{name}</Text>
    </>
  )
}

export default ButtonPrice;