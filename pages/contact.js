import React from 'react'
import { useState } from 'react';
import { send } from 'emailjs-com';

import Wrapper from '../layouts/Wrapper'
import Form from '../components/Form';


const contact = () => {

  return (
    <Wrapper>
      <div className="lg:w-9/12 w-11/12 mx-auto flex lg:flex-row flex-col lg:py-10 py-5">
        <div className="lg:w-6/12 w-full mr-5 ">
          <h2 className="font-semibold text-lg text-gary-700 mb-4">Message Us</h2>
          <p className="text-gray-400 text-md text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in</p>
          <div className="mt-5 flex text-black text-md font-semibold"><img src="location.svg" className="w-6 mx-2" />Alamat</div>
          <p className="ml-10 mb-7">Jl. Margonda Raya</p>
          <div className="flex text-black text-md font-semibold"><img src="phoneout.svg" className="w-6 mx-2" />Phone</div>
          <p className="ml-10 mb-7">085284367858</p>
          <div className="flex text-black text-md font-semibold"><img src="mail.svg" className="w-6 mx-2" />Mail</div>
          <p className="ml-10 mb-7">heldih19@yahoo.com</p>
        </div>

        <div className="lg:w-6/12 w-11/12 flex flex-col h-full mx-auto">
          <Form />

        </div>
      </div>
    </Wrapper >
  )
}

export default contact
