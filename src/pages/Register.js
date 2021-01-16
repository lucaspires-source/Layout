import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import {Button} from "../components/Button/Button";
import { Persist } from 'formik-persist'
const Register = ({useLocalStorage}) => {

    const onSubmit = (values,actions) =>{
    console.log('SUBMIT',values)
    }
  return (
    <div>
      <Formik
        onSubmit={onSubmit}
        initialValues={{
          name: "",
          nascimento: "",
          cpf: "",
          cep: "",
        }}
        render={({ values,handleSubmit }) => (
          <Form>
            <div>
              <label>Nome</label>
              <Field name="name" type="text"/>
            </div>
            <div>
              <label>Data de Nascimento</label>
              <Field name="nascimento" type="text"/>
            </div>
            <div>
              <label>CPF</label>
              <Field name="CPF" type="text"/>
            </div>
            <div>
              <label>CEP</label>
              <Field name="Cep" type="text"/>
            </div>
            <Button>Enviar</Button>
            <Persist name="usuario cadastrado"/>
          </Form>
        )}
      />
    </div>
  );
};

export default Register;
