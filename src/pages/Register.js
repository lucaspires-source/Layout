import React from "react";
import { Formik } from "formik";
const Register = () => {
  
 
  
    return (

    <Formik
      render={() => (
        <form>
          <div>
            <label>Nome</label>
            <input />
          </div>
          <div>
            <label>Nascimento</label>
            <input />
          </div>
          <div>
            <label>CPF</label>
            <input />
          </div>
          <div>
            <label>CEP</label>
            <input />
          </div>
        </form>
      )}
    />
  );
};

export default Register;
