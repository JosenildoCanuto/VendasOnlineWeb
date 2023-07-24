import { Input } from 'antd';

import Button from '../../../shared/buttons/button/button';
import {
  BackgroundImage,
  ContainerLogin,
  ContainerLoginScreen,
  LimitedContainer,
  LogoImage,
  TitleLogin,
} from '../styles/loginScreen.styles';

const LoginScreen = () => {
  return (
    <ContainerLoginScreen>
      <BackgroundImage src="./background.png" />
      <ContainerLogin>
        <LimitedContainer>
          <LogoImage src="./logo.svg" />
          <TitleLogin level={2} type="secondary">
            LOGIN
          </TitleLogin>
          <Input placeholder="Usuario" style={{ marginBottom: '6px' }} />
          <Input placeholder="Senha" />
          <Button type="primary" margin="16px 0px 16px 0px">
            ENTRAR
          </Button>
        </LimitedContainer>
      </ContainerLogin>
    </ContainerLoginScreen>
  );
};

export default LoginScreen;
