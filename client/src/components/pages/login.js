import React, { Component} from 'react';
import '../styles/login.css'
import {Container, Form} from 'react-bootstrap'
import { Link, withRouter } from "react-router-dom";
import api from '../../services/api';
import { login, nomeUsuario} from '../../services/auth';


class Login extends Component {
  state = {
    email: "",
    senha: "",
    error: ""
    

  };

  handleSignIn = async e => {
    e.preventDefault();
    const { email, senha } = this.state;
    if (!email || !senha) {
      this.setState({ error: "Preencha e-mail e senha para continuar!" });
    } else {
      try {
        const response = await api.post("/auth/authenticate", { email, senha });
        login(response.data.token);
        nomeUsuario(response.data.user.nome)
        this.props.history.push("/inicio");
        
      
      } catch (err) {
        this.setState({
          error:
            "Houve um problema com o login, verifique suas credenciais."
        });
      }
    }
  };

  render() {
    return (
      <Container className = "cont">
        <Form onSubmit={this.handleSignIn}>
        
          {this.state.error && <p>{this.state.error}</p>}
          <input
            className = "entrada"
            type="email"
            placeholder="Endereço de e-mail"
            onChange={e => this.setState({ email: e.target.value })}
          />
          <input
           className = "entrada"
            type="password"
            placeholder="Senha"
            onChange={e => this.setState({ senha: e.target.value })}
          />
          <button className = "button" type="submit">Entrar</button>
          <hr className = "linha" />
          <Link className = "link" to="/registrar">Criar conta</Link>
        </Form>
      </Container>
    );
  }
}

export default withRouter(Login);

