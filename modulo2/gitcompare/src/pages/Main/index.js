import React from 'react';
import logo from '../../assets/logo.png';
import { Container, Form } from './styles';
import CompareList from '../../components/CompareList';

const Main = () => (
  <Container>
    <h1> Hello World </h1>
    <img src={logo} alt="Github Compare" />
    <Form>
      <input type="text" placeholder="usuário/repositório" />
      <button type="submit"> ok </button>
    </Form>
    <CompareList />
  </Container>
);

export default Main;
