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
  };

  const registerUser = event => {
    event.preventDefault() // don't redirect the page
    // where we'll add our form logic
  }
  return (

    <>
      <form onSubmit={onSubmit}>
        <div className="flex">
          <div className="flex-col">
            <label htmlFor="">Nama Anda</label>
            <input className="border border-gray-500 rounded w-full"
              type='text'
              name='from_name'

              value={toSend.from_name}
              onChange={handleChange}
            />
          </div>
          <div className="flex-col">
            <label htmlFor="">Email Anda</label>
            <input className="border border-gray-500 rounded w-full"
              type='text'
              name='from_name'

              value={toSend.from_name}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex-col">
          <label htmlFor="">No. Telpon Anda</label>
          <input className="border border-gray-500 rounded w-full"
            type='text'
            name='from_name'

            value={toSend.from_name}
            onChange={handleChange}
          />
          <label className="block" htmlFor="">Pesan Anda</label>
          <textarea className="border border-black" name="" id="" cols="30" rows="10"></textarea>
        </div>


        <button type='submit'>Submit</button>
      </form>


    </>
  )
}