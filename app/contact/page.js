import ContactForm from '@/components/ContactForm'
import React from 'react'

const Contact = () => {
  return (
    <div className="max-w-250 mx-auto mb-7 ">
      <h1 className="font-extrabold text-2xl md:text-4xl mt-10 text-center">
       Contact Us
      </h1>
      <p className='text-center text-sm mt-3 max-w-100 md:max-w-250'>We would love to hear from you, Send us a message and we'll respond as soon as possible</p>
      <div className='flex justify-center my-7'>
        <ContactForm/>
      </div>
    </div>
  )
}

export default Contact