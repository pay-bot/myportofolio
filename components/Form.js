import React from 'react'
import { useState } from 'react';
import { send } from 'emailjs-com';
import swal from 'sweetalert';
import { useForm } from "react-hook-form";



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

      .then((result) => {
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
    e.target.reset();
  };

  return (

    <>
      <form onSubmit={onSubmit}>
        <label htmlFor="">Nama Anda</label>
        <input className="border border-gray-500 rounded py-1 w-full"
          type='text'
          name='from_name'
          value={toSend.from_name}
          onChange={handleChange}
        />
        <label htmlFor="">Email Anda</label>
        <input className="border border-gray-500 rounded py-1 w-full"
          type='text'
          name='reply_to'
          value={toSend.reply_to}
          onChange={handleChange}
        />
        <label className="block" htmlFor="">Pesan Anda</label>
        <textarea className="border border-gray-500 w-full"
          name="message"
          value={toSend.message}
          onChange={handleChange}
          id=""
          cols=""
          rows="10">
        </textarea>
        <button className="rounded font-semibold py-1 px-4 bg-blue-500 mx-auto"
          type='submit'>
          SEND
        </button>
      </form>


    </>
  )
}