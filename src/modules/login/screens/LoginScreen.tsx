import { Input } from 'antd';
import { useState } from 'react';

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
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
    alert(`Usuario: ${username} Senha: ${password}`);
  };

  return (
    <ContainerLoginScreen>
      <BackgroundImage src="./background.png" />
      <ContainerLogin>
        <LimitedContainer>
          <LogoImage src="./logo.svg" />
          <TitleLogin level={2} type="secondary">
            LOGIN
          </TitleLogin>
          <Input
            placeholder="Usuario"
            style={{ marginTop: '16px' }}
            onChange={handleUsername}
            value={username}
          />
          <Input
            placeholder="Senha"
            type='password'
            style={{ marginTop: '16px' }}
            onChange={handlePassword}
            value={password}
          />
          <Button type="primary" margin="16px 0px 16px 0px" onClick={handleLogin}>
            ENTRAR
          </Button>
        </LimitedContainer>
      </ContainerLogin>
    </ContainerLoginScreen>
  );
};

export default LoginScreen;
// style={{ marginTop: '16px' }}
//   const  [username, setUsername] = useState('');

// const handleUsername = (event: React.ChangeEvent<HTMLInputElement>) = {
//   setUsername(event.target.value)
// }
