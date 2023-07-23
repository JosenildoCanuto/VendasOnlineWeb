import { Input as InputAntd, InputProps as InputPropsAntd } from 'antd';

import { BoxInput, TitleInput } from './input.styles';
import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  title?: string;
}

const Input = ({ title, ...props }: InputProps) => {
  return (
    <BoxInput>
      {title && <TitleInput>{title}</TitleInput>}
      <InputAntd {...props} />
    </BoxInput>
  );
};

export default Input