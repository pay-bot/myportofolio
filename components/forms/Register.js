import React, { Fragment } from 'react';

const Register = () => {
  return (
    <Fragment>
      <form className='form'>
        <div className='form_control'>
          <label className='label'>name:</label>
          <input type='text' className='form_input' />
        </div>
        <div className='form_control'>
          <label className='label'>account:</label>
          <input type='text' className='form_input' />
        </div>
        <div className='form_control'>
          <label className='label'>password:</label>
          <input type='password' className='form_input' />
        </div>
        <div className='form_control'>
          <label className='label'>email:</label>
          <input type='text' className='form_input' />
        </div>
        <div className='form_control'>
          <button>Register</button>
        </div>
      </form>
    </Fragment>
  );
};

export default Register;
