import React, { useState } from 'react';

const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const { email, password } = user;

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    console.log('Login submit');
  };

  return (
    <div className='form-container'>
      <h1>
        Account <span className='text-primary'>Login</span>
      </h1>
      <form onSubmit={onSubmit}>
        {/* email */}
        <div className='form-group'>
          <label htmlFor='email'>E-mail</label>
          <input type='email' name='email' value={email} onChange={onChange} />
        </div>
        {/* password */}
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            value={password}
            onChange={onChange}
          />
        </div>

        {/* submit */}
        <input type='submit' value='Login' btn btn-primary btn-block />
      </form>
    </div>
  );
};

export default Login;
