import React, {useState } from 'react';
import { Col, Button, Form, Container} from 'react-bootstrap'
import { Formik } from 'formik';
import * as yup from 'yup';
import api from '../../services/api'



let confirmCadastro = false


//Função que cadastra os equipamentos

function PutDataToDB (props) {
        
        api.post('/cadastrar-equipamento', {
            nome: props.nome, 
            responsavel: props.responsavel,
            categoria: props.categoria, 
            quantidade: props.quantidade,
            referencia: props.referencia
    }).then((response) => { response.status == 200 ? confirmCadastro = true : confirmCadastro = false})
      .catch((error) => console.log(error.response.data))
    };

const schema = yup.object({
    nome: yup.string().required(),
    responsavel: yup.string().required(),
    categoria: yup.string().required(),
    quantidade: yup.string().required(),
    referencia: yup.string().required()
  });

    


  //Função que há o formulário de cadastro e ao confirmar envia as informações necessárias para o cadastro 
function CadastrarEquipamentos(props) {
    


    return (

      <Container id = "equipamento">

      <Formik
      validationSchema={schema}
      onSubmit={values => {
        PutDataToDB(values)}}
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
              <Form.Label>Responsavel</Form.Label>
              <Form.Control
                type="text"
                placeholder="Responsavel"
                name="responsavel"
                value={values.resposavel}
                onChange={handleChange}
                isInvalid={!!errors.responsavel}
                
              />

              <Form.Control.Feedback type="invalid">
                {errors.responsavel}
              </Form.Control.Feedback>
            </Form.Group>
            </Form.Row>
          <Form.Row>



            <Form.Group as={Col} md="10" controlId="validationFormik03">
              <Form.Label>Categoria</Form.Label>
              <Form.Control
                type="text"
                placeholder="Categoria"
                name="categoria"
                value={values.categoria}
                onChange={handleChange}
                isInvalid={!!errors.categoria}
              />

              <Form.Control.Feedback type="invalid">
                {errors.categoria}
              </Form.Control.Feedback>
            </Form.Group>
            </Form.Row>

            <Form.Row>
            <Form.Group as={Col} md="10" controlId="validationFormik03">
              <Form.Label>Quantidade</Form.Label>
              <Form.Control
                type="text"
                placeholder="Quantidade"
                name="quantidade"
                value={values.quantidade}
                onChange={handleChange}
                isInvalid={!!errors.quantidade}
              />

              <Form.Control.Feedback type="invalid">
                {errors.quantidade}
              </Form.Control.Feedback>
            </Form.Group>
            </Form.Row>

            <Form.Row>
            <Form.Group as={Col} md="5" controlId="validationFormik04">
              <Form.Label>Referencia</Form.Label>
              <Form.Control
                type="text"
                placeholder="Q1235"
                name="referencia"
                value={values.referencia}
                onChange={handleChange}
                isInvalid={!!errors.referencia}
              />
              <Form.Control.Feedback type="invalid">
                {errors.referencia}
              </Form.Control.Feedback>
            </Form.Group>
           
          </Form.Row>
          <Button type="submit" onClick={ () => confirmCadastro == true ? alert('Item Cadastrado')  : null} >Submit form</Button>
        </Form>
      )}

    </Formik>

    </Container>
    );
  }
  
export default CadastrarEquipamentos;

