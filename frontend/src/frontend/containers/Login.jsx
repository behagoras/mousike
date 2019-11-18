import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginUser } from '../actions';
import Header from '../components/Header/Header';
import LoginLayout from '../components/LoginLayout';
import {
  LoginSection,
  LoginContainer,
  LoginForm,
  LoginInput,
  LoginButton,
  LoginRegister,
  LoginRememberMe,
  InputContainer,
  LoginInputLabel,
} from './LoginStyles';
import { GlobalStyle } from '../GlobalStyles';

const Login = (props) => {
  const [form, setValues] = useState({
    email: '',
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.loginUser(form, '/');
  };

  const html = (
    <>
      <GlobalStyle />

      <Header isLogin />
      <LoginSection
        className="login"
      >
        <LoginContainer className="login__container">
          <h2 style={{ marginBottom: '30px' }}>Inicia sesión</h2>
          <LoginForm className="login__container--form" onSubmit={handleSubmit}>
            <InputContainer className="inputContainer">
              <LoginInputLabel htmlFor="email" className="floatLabel">Email</LoginInputLabel>
              <LoginInput
                className="input"
                id="email"
                name="email"
                type="text"
                placeholder="Correo"
                onChange={handleInput}
                required
              />
            </InputContainer>
            <InputContainer>
              <LoginInputLabel htmlFor="password">Contraseña</LoginInputLabel>
              <LoginInput
                className="input"
                id="password"
                name="password"
                type="password"
                placeholder="Contraseña"
                onChange={handleInput}
                required
              />
            </InputContainer>
            <LoginButton
              className="button"
              type="submit"
            >
            Iniciar sesión
            </LoginButton>
            <LoginRememberMe className="login__container--remember-me">
              <label htmlFor="cbox1">
                <input
                  id="cbox1"
                  type="checkbox"
                  value="first_checkbox"
                />
                Recuérdame
              </label>
              <a href="/">Olvidé mi contraseña</a>
            </LoginRememberMe>
          </LoginForm>
          <LoginRegister
            className="login__container--register"
          >
            <br />
            ¿No tienes ninguna cuenta?:
            {' '}
            <a href="/register">
              Regístrate acá.
            </a>

          </LoginRegister>
          <br />
          <p style={{ textAlign: 'center' }}>Ó</p>
          <h2 style={{ marginTop: '10px' }}>Continúa con redes sociales</h2>
          <LoginLayout />

        </LoginContainer>
      </LoginSection>
    </>
  );
  return html;
};

const mapDispatchToProps = {
  loginUser,
};

export default connect(null, mapDispatchToProps)(Login);
