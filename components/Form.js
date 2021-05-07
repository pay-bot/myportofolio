import React from 'react'
import { useState } from 'react';
import { send } from 'emailjs-com';
import swal from 'sweetalert';

export default function Form() {
  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: '',
    message: '',
    reply_to: '',
  });

  
  const onSubmit = (e) => {
    e.preventDefault();
    send(
      'service_aizdo2a',
      'template_5camc1c',
      toSend,
      'user_EGk6ZrzKNaiEf7S1MWTQF'
      )

      .then((result) =>  { 
        swal({
          title: "Done!",
          text: "Pesan anda telah terkirim",
          icon: "success",
          timer: 2000,
          button: false
        })
      }) 
      .catch((err) => {
        console.log('FAILED...', err);
      });
     
  };
  

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const registerUser = event => {
    event.preventDefault() // don't redirect the page
    // where we'll add our form logic
  }
  return (

    <>
      <form onSubmit={onSubmit}>
        <input className="border border-gray-500 rounded w-full"
          type='text'
          name='from_name'
          placeholder='from name'
          value={toSend.from_name}
          onChange={handleChange}
        />
        <button type='submit'>Submit</button>
      </form>


    </>
  )
}