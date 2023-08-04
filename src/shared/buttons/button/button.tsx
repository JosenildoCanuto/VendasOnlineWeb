import { ButtonAntd } from './button.styles';

interface ButtonCurrentProps extends ButtonProps {
  margin?: string;
}

const Button = ({ margin, ...props }): ButtonProps => {
  return <ButtonAntd style={{ margin }} {...props} />;
};

export default Button;
