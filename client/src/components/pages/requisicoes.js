import React, {useState } from 'react';
import { Col, Button, Form, Container as div} from 'react-bootstrap'
import { Formik } from 'formik';
import * as yup from 'yup';
import api from '../../services/api'



let confirmCadastro = false



function PutDataToDB (props) {
        
        api.post('/requisicao', {
            nomeRequisitante: props.nomeRequisitante, 
            refEquipamento: props.refEquipamento, 
            quantidadeEquipamento: props.quantidadeEquipamento,
    }).then((response) => { response.status == 200 ? confirmCadastro = true : confirmCadastro = false})
      .catch((error) => alert(error.response.data.error))
    };




const schema = yup.object({
    nomeRequisitante: yup.string().required(),
    refEquipamento: yup.string().required(),
    quantidadeEquipamento: yup.string().required(),
  });

    

function Requisicoes(props) {
    


    return (

      <div className = "requisicoes">

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
              <Form.Label>Nome do Requisitante</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nome do Requisitante"
                name="nomeRequisitante"
                value={values.nomeRequisitante}
                onChange={handleChange}
                isInvalid={!!errors.nomeRequisitante}
                
              />

              <Form.Control.Feedback type="invalid">
                {errors.nomeRequisitante}
              </Form.Control.Feedback>
            </Form.Group>
            </Form.Row>

          <Form.Row>
            <Form.Group as={Col} md="10" controlId="validationFormik03">
              <Form.Label>Referência do Equipamento</Form.Label>
              <Form.Control
                type="text"
                placeholder="refEquipamento"
                name="refEquipamento"
                value={values.refEquipamento}
                onChange={handleChange}
                isInvalid={!!errors.refEquipamento}
              />

              <Form.Control.Feedback type="invalid">
                {errors.refEquipamento}
              </Form.Control.Feedback>
            </Form.Group>
            </Form.Row>

            <Form.Row>
            <Form.Group as={Col} md="10" controlId="validationFormik03">
              <Form.Label>Quantidade do Equipamento</Form.Label>
              <Form.Control
                type="text"
                placeholder="Quantidade do Equipamento"
                name="quantidadeEquipamento"
                value={values.quantidadeEquipamento}
                onChange={handleChange}
                isInvalid={!!errors.quantidadeEquipamento}
              />

              <Form.Control.Feedback type="invalid">
                {errors.quantidadeEquipamento}
              </Form.Control.Feedback>
            </Form.Group>
            </Form.Row>



          <Button  type="submit" onClick={ () => confirmCadastro == true ? alert('Requisição feita')  : null} >Cadastrar</Button>
        </Form>
      )}

    </Formik>

    </div>
    );
  }
  
export default Requisicoes;

