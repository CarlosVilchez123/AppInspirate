// src/pages/Auth/Login.jsx
import React from 'react';
import { useForm } from 'react-hook-form';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    // Validar el correo electrónico y código del estudiante aquí
    if (data.email.endsWith('@uni.pe') && data.studentCode) {
      // Aquí puedes realizar acciones adicionales, como iniciar sesión en el servidor
      console.log('Inicio de sesión exitoso');
    } else {
      console.log('Credenciales inválidas');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Correo Electrónico:</label>
        <input {...register('email', { required: true })} />
        {errors.email && <span>Correo electrónico requerido</span>}

        <label>Código de Estudiante:</label>
        <input {...register('studentCode', { required: true })} />
        {errors.studentCode && <span>Código de estudiante requerido</span>}

        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default Login;
