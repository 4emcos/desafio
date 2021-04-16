import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { ModalContainer } from "react-router-modal";
import "react-router-modal/css/react-router-modal.css";

import { isAuthenticated } from "./services/auth";


import Login from "./components/pages/login";
import Registrar from "./components/pages/registrar";
import Dashboard from "./components/pages/dashboard";
import CadastrarEquipamento from './components/pages/cadastrar-equipamentos';
import Requisicoes from './components/pages/requisicoes'


const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Fragment>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path= "/inicio" component= {Dashboard} />
        <Route path="/registrar" component={Registrar} />
        <Route path="/cadastrar-equipamento" component={CadastrarEquipamento} />
        <Route path="/requisicoes" component={Requisicoes} />
        <Route path="*" component={() => <h1>Page not found</h1>} />
      </Switch>
      <ModalContainer />
    </Fragment>
  </BrowserRouter>
);

export default Routes;
 