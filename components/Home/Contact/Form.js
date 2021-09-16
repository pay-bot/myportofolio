import React from 'react'
import { useState } from 'react';
import { send } from 'emailjs-com';
import swal from 'sweetalert';
import { useForm } from "react-hook-form";
import { useRouter } from "next/router"
import { useTranslation } from 'next-i18next';




export default function Form() {

  const { t } = useTranslation('common');


  const router = useRouter()
  const { handleSubmit, errors, reset } = useForm()

  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: '',
    message: '',
    reply_to: '',
  });
  const onSubmit = async (e) => {
    e.preventDefault();
    await send(
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
    await router.push('/');
  };


  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (

    <>
      <form onSubmit={onSubmit}>
        <label data-aos="fade-up" htmlFor="" className="dark:text-gray-100 text-md font-semibold">{t("hire.name")}</label>
        <input data-aos="fade-left" className="focus:px-3 border border-gray-500 bg-[#EAECF4] dark:bg-[#455781] rounded py-1 px-4 w-full dark:text-gray-200"
          type='text'
          name='from_name'
          required={true}
          value={toSend.from_name}
          onChange={handleChange}
        />
        <label data-aos="fade-up" htmlFor="" className="dark:text-gray-100 text-md font-semibold">{t("hire.email")}</label>
        <input data-aos="fade-left" className="border border-gray-500 bg-[#EAECF4]  dark:bg-[#455781] rounded py-1 px-4 w-full dark:text-gray-200"
          type='text'
          name='reply_to'
          required={true}
          value={toSend.reply_to}
          onChange={handleChange}
        />
        <label data-aos="fade-up" className="block dark:text-gray-100 text-md font-semibold" htmlFor="">{t("hire.message")}</label>
        <textarea data-aos="fade-left" className="border border-gray-500 bg-[#EAECF4]  dark:bg-[#455781] w-full dark:text-gray-200 mb-5 px-4 py-1"
          name="message"
          value={toSend.message}
          required={true}
          onChange={handleChange}
          id=""
          cols=""
          rows="10">
        </textarea>
        <button className="rounded font-semibold py-1 px-4 bg-[#008FFF] dark:bg-[#45ADFF] mx-auto text-white mb-5"
          type='submit'>
          {t("hire.send")}
        </button>
      </form>


    </>
  )
}