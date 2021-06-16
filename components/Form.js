import React from 'react'
import { useState } from 'react';
import { send } from 'emailjs-com';
import swal from 'sweetalert';
import { useForm } from "react-hook-form";
import { useRouter } from "next/router"



export default function Form() {

  const router = useRouter()
  const { handleSubmit, errors, reset } = useForm()

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
    router.push('/');
  };


  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (

    <>
      <form onSubmit={onSubmit}>
        <label htmlFor="" className="dark:text-gray-300">Nama Anda</label>
        <input className="border border-gray-500 bg-gray-50 dark:bg-gray-600 rounded py-1 w-full dark:text-gray-400"
          type='text'
          name='from_name'
          required="true"
          value={toSend.from_name}
          onChange={handleChange}
        />
        <label htmlFor="" className="dark:text-gray-300">Email Anda</label>
        <input className="border border-gray-500 bg-gray-50  dark:bg-gray-600 rounded py-1 w-full dark:text-gray-400"
          type='text'
          name='reply_to'
          required="true"
          value={toSend.reply_to}
          onChange={handleChange}
        />
        <label className="block dark:text-gray-300" htmlFor="">Pesan Anda</label>
        <textarea className="border border-gray-500 bg-gray-50  dark:bg-gray-600 w-full dark:text-gray-400"
          name="message"
          value={toSend.message}
          required="true"
          onChange={handleChange}
          id=""
          cols=""
          rows="10">
        </textarea>
        <button className="rounded font-semibold py-1 px-4 bg-blue-500 mx-auto dark:text-gray-300"
          type='submit'>
          SEND
        </button>
      </form>


    </>
  )
}