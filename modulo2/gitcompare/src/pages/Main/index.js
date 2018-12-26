import React, { Component } from 'react';
import logo from '../../assets/logo.png';
import { Container, Form } from './styles';
import CompareList from '../../components/CompareList';

export default class Main extends Component {
  state = {
    repositories: [],
  };

  render() {
    return (
      <Container>
        <img src={logo} alt="Github Compare" />

        <Form>
          <input type="text" placeholder="usuário/repositório" />
          <button type="submit"> OK </button>
        </Form>

        <CompareList />
      </Container>
    );
  }
}
