import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [values, setValues] = useState({});

  const handleChange = e => {
    const { name, value } = e.target;
    setValues(prevValues => ({
      ...prevValues,
      [name]: value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('submitting', values);
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={values.username || ''}
          onChange={handleChange}
          autoFocus
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={values.email || ''}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={values.password || ''}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password-confirm"
          placeholder="Password confirmation"
          value={values.passwordConfirmation || ''}
          onChange={handleChange}
        />
        <button>Sign up</button>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
