import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from '../components/Header/Header';
import { registerUser } from '../actions';
// import '../assets/styles/components/Register.scss';

import { GlobalStyle } from '../GlobalStyles';

import {
  RegisterSection,
  RegisterContainer,
  RegisterForm,
  RegisterInput,
  InputContainer,
  RegisterInputLabel,
  RegisterButton,
  LoginSection,
} from './RegisterStyles';

const Register = (props) => {
  const [form, setValues] = useState({
    email: '',
    name: '',
    password: '',
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.registerUser(form, '/login');
  };

  return (
    <>
      <GlobalStyle />
      <Header isRegister />
      <RegisterSection className="register">
        <RegisterContainer className="register__container">
          <h2 style={{ marginBottom: '30px' }}>Regístrate</h2>
          <RegisterForm className="register__container--form" onSubmit={handleSubmit}>
            <InputContainer>
              <RegisterInputLabel htmlFor="name">Nombre Completo</RegisterInputLabel>
              <RegisterInput
                name="name"
                id="name"
                className="input"
                type="text"
                placeholder="Nombre"
                onChange={handleInput}
                required
              />
            </InputContainer>
            <InputContainer>
              <RegisterInputLabel htmlFor="email">Correo electrónico</RegisterInputLabel>
              <RegisterInput
                name="email"
                className="input"
                type="text"
                placeholder="Correo"
                onChange={handleInput}
                required
              />
            </InputContainer>
            <InputContainer>
              <RegisterInputLabel htmlFor="password">Contraseña</RegisterInputLabel>
              <RegisterInput
                name="password"
                className="input"
                type="password"
                placeholder="Contraseña"
                onChange={handleInput}
                required
              />
            </InputContainer>
            <RegisterButton className="button" type="submit">Registrarme</RegisterButton>
          </RegisterForm>
          <br />
          <LoginSection>
            ¿Ya tienes una cuenta?
            {' '}
            <a href="/login">
            Inicia sesión acá
            </a>
          </LoginSection>
        </RegisterContainer>
      </RegisterSection>
    </>
  );
};

const mapDispatchToProps = {
  registerUser,
};

export default connect(null, mapDispatchToProps)(Register);
