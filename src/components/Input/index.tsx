import React, { InputHTMLAttributes, useCallback, useRef, useState } from 'react';
import { IconBaseProps } from 'react-icons';

import { Container } from './style';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name?: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({
  name,
  icon: Icon,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const hadleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);
  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

  }, []);

  return (
    <Container 
    isFocused={isFocused}
    >

      <input
        onFocus={hadleInputFocus}
        onBlur={handleInputBlur}
        defaultValue={name}
        {...rest}
      />
    {Icon && <Icon size={20} />}
    </Container>
  )
};

export default Input;