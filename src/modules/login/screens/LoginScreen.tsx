import { Input } from 'antd';
import { useState } from 'react';

import Button from '../../../shared/components/buttons/button/button';
import SVGLogo from '../../../shared/components/icons/SVGLogo';
import { useRequests } from '../../../shared/hooks/useRequests';
import {
  BackgroundImage,
  ContainerLogin,
  ContainerLoginScreen,
  LimitedContainer,
  TitleLogin,
} from '../styles/loginScreen.styles';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { authRequest, loading } = useRequests();

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    authRequest({
      email: email,
      password: password,
    });
  };

  return (
    <ContainerLoginScreen>
      <BackgroundImage src="./background.png" />
      <ContainerLogin>
        <LimitedContainer>
          <SVGLogo />
          <TitleLogin level={2} type="secondary">
            LOGIN
          </TitleLogin>
          <Input
            placeholder="Usuario"
            style={{ marginTop: '16px' }}
            onChange={handleEmail}
            value={email}
          />
          <Input
            placeholder="Senha"
            type="password"
            style={{ marginTop: '16px' }}
            onChange={handlePassword}
            value={password}
          />
          <Button loading={loading} type="primary" margin="16px 0px 16px 0px" onClick={handleLogin}>
            ENTRAR
          </Button>
        </LimitedContainer>
      </ContainerLogin>
    </ContainerLoginScreen>
  );
};

export default LoginScreen;
