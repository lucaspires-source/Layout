import * as Yup from 'yup';

export default Yup.object().shape({
  nome: Yup.string().min(2).required(),
  nascimento:Yup.string().min(6).required(),
  CPF:Yup.string().min(11).required(),  
  Cep:Yup.string().min(8).required(),
});