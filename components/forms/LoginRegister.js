import React from 'react';
import { useDispatch } from 'react-redux';
import { openModal } from '../../store/modalSlice';

const LoginRegister = () => {
  const dispatch = useDispatch();

  return (
    <div className='login-register'>
      <button
        className='btn'
        onClick={() => dispatch(openModal({ name: 'Login' }))}
      >
        Login
      </button>
      <div>OR</div>
      <button
        className='btn'
        onClick={() =>
          dispatch(openModal({ name: 'Register', position: 'bottom' }))
        }
      >
        Register
      </button>
    </div>
  );
};

export default LoginRegister;
