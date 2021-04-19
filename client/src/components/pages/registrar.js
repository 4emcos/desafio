import React, {useState } from 'react';
import '../styles/registrar.css'
import {Col, Button, Form, Container} from 'react-bootstrap'
import { Formik } from 'formik';
import * as yup from 'yup';
import { useHistory } from 'react-router-dom'
import api from '../../services/api'

let confirmLogin = false



function PutDataToDB (props) {
        
        api.post('/auth/register', {
            nome: props.nome, 
            email: props.email, 
            funcao: props.funcao,
            senha: props.senha
    }).then((response) => { response.status == 200 ? confirmLogin = true : confirmLogin = false})
      .catch((error) => console.log(error.response.data))
    };




const schema = yup.object({
    nome: yup.string().required(),
    email: yup.string().required(),
    funcao: yup.string().required(),
    senha: yup.string().required()
        .min(3, 'Senha muito cruta')
        .max(10, 'Senha muito longa'),
        
    confirmPass: yup.string()
        .required()
        .oneOf([yup.ref('senha'), null], 'As senhas não coincidem')
  });

    

function Registrar(props) {
    let history = useHistory();


    return (

      <Container className= "cont">
      <div className = "registrar">

      <Formik
      validationSchema={schema}
      onSubmit={values => {PutDataToDB(values)}}
      initialValues={{}}

      >
      {({
        handleSubmit,
        handleChange,
        values,
        errors,
      }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Form.Row>

          <Form.Group as={Col} md="10" controlId="validationFormik03">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nome"
                name="nome"
                value={values.nome}
                onChange={handleChange}
                isInvalid={!!errors.nome}
              />

              <Form.Control.Feedback type="invalid">
                {errors.nome}
              </Form.Control.Feedback>
            </Form.Group>
            </Form.Row>

          <Form.Row>
            <Form.Group as={Col} md="10" controlId="validationFormik03">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Email"
                name="email"
                value={values.email}
                onChange={handleChange}
                isInvalid={!!errors.email}
              />

              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>
            </Form.Row>

            <Form.Row>
            <Form.Group as={Col} md="10" controlId="validationFormik03">
              <Form.Label>Funcao</Form.Label>
              <Form.Control
                type="text"
                placeholder="Funcao"
                name="funcao"
                value={values.funcao}
                onChange={handleChange}
                isInvalid={!!errors.funcao}
              />

              <Form.Control.Feedback type="invalid">
                {errors.funcao}
              </Form.Control.Feedback>
            </Form.Group>
            </Form.Row>

            <Form.Row>
            <Form.Group as={Col} md="5" controlId="validationFormik04">
              <Form.Label>Senha</Form.Label>
              <Form.Control
                type="password"
                placeholder="********"
                name="senha"
                value={values.senha}
                onChange={handleChange}
                isInvalid={!!errors.senha}
              />
              <Form.Control.Feedback type="invalid">
                {errors.senha}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="5" controlId="validationFormik05">
              <Form.Label>Confirmar Senha</Form.Label>
              <Form.Control
                
                type="password"
                placeholder="********"
                name="confirmPass"
                value={values.confirmPass}
                onChange={handleChange}
                isInvalid={!!errors.confirmPass}
              />

              <Form.Control.Feedback type="invalid">
                {errors.confirmPass}
              </Form.Control.Feedback>
            </Form.Group>

          </Form.Row>
          <Button className = "button-register"  variant = "info" type="info" onClick={ () => confirmLogin == true ? history.push('/') : null} >Cadastrar</Button>
        </Form>
      )}

    </Formik>
        </div>
    </Container>
    );
  }
  
export default Registrar;

