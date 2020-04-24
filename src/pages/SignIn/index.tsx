import React from 'react';
import { Image } from 'react-native';
import { Container } from './style';
import logo from '../../assets/logo.png';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Image source={logo} />
    </Container>
  );
};

export default SignIn;
