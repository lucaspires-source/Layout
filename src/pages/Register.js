import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { Button } from "../components/Button/Button";
import { Persist } from "formik-persist";
import schema from "../schema";
const Register = () => {
  const onSubmit = (async (values, actions, { resetForm }) => {
    console.log("SUBMIT", values);
    await onSubmit(values)
    resetForm()
  });

  const onBlurCep = (e, setFieldValue) => {
    const { value } = e.target;

    const cep = value?.replace(/[^0-9]/g, "");

    if (cep?.length !== 8) {
      return;
    }

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        setFieldValue("logradouro", data.logradouro);
        setFieldValue("bairro", data.bairro);
        setFieldValue("cidade", data.localidade);
        setFieldValue("uf", data.uf);
      });
  };
  return (
    <div className="form-page">
      <Formik
        validationSchema={schema}
        onSubmit={onSubmit}
        validateOnMount
        initialValues={{
          nome: "",
          nascimento: "",
          CPF: "",
          Cep: "",
        }}
        render={({ isValid, setFieldValue }) => (
          <Form>
            <div className="form-control-group">
              <label>Nome</label>
              <Field className="input" name="nome" type="text" />
              <ErrorMessage name="name" />
            </div>
            <div className="form-control-group">
              <label>Data de Nascimento</label>
              <Field className="input" name="nascimento" type="date" />
              <ErrorMessage name="nascimento" />
            </div>
            <div className="form-control-group">
              <label>CPF</label>
              <Field className="input" name="CPF" type="text" />
              <ErrorMessage name="CPF" />
            </div>
            <div className="form-control-group">
              <label>CEP</label>
              <Field
                className="input"
                name="Cep"
                type="text"
                onBlur={(e) => onBlurCep(e, setFieldValue)}
              />
              <ErrorMessage name="Cep" />
            </div>
            <div className="form-control-group">
              <label>Logradouro</label>
              <Field className="input" name="logradouro" type="text" />
            </div>
            <div className="form-control-group">
              <label>Número</label>
              <Field className="input" name="numero" type="text" />
            </div>
            <div className="form-control-group">
              <label>Bairro</label>
              <Field className="input" name="bairro" type="text" />
            </div>
            <div className="form-control-group">
              <label>Cidade</label>
              <Field className="input" name="cidade" type="text" />
            </div>
            <div className="form-control-group">
              <label>Estado</label>
              <Field className="input" name="uf" type="text" />
            </div>
            <Button className="form-button" type="submit" disabled={!isValid} >
              Enviar
            </Button>
            <Persist name="usuario cadastrado" />
          </Form>
        )}
      />
    </div>
  );
};

export default Register;
