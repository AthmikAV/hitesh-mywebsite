"use client";

import React from 'react'

const handelSendMessag = () => {
    return (
        alert('This feature is under review')
    )
}

const ContactForm = () => {
  return (
      <div className='shadow-xl w-100 p-5 rounded-sm'>
          <h2 className='font-semibold text-center my-3'>Send Us the Message</h2>
          <div className='space-y-5'>
            <div className='flex flex-col gap-3'>
              <label className='text-sm font-semibold ' htmlFor='name'> Full Name</label>
              <input id='name'
              className='
              text-xs
              ring-1
              p-2
              rounded-sm
              ring-gray-400
              focus:outline-none
              focus:ring-1
            focus:ring-gray-900
            ' placeholder='Your Full Name'></input>
           </div>
            <div className='flex flex-col gap-3'>
              <label className='text-sm font-semibold ' htmlFor='email'> Email</label>
              <input id='email'
              className='
              text-xs
              ring-1
              p-2
              rounded-sm
              ring-gray-400
              focus:outline-none
              focus:ring-1
            focus:ring-gray-900
            ' placeholder='your@gmail.com'></input>
           </div>
            <div className='flex flex-col gap-3'>
              <label className='text-sm font-semibold ' htmlFor='subject'> Subject</label>
              <input id='subject'
              className='
              text-xs
              ring-1
              p-2
              rounded-sm
              ring-gray-400
              focus:outline-none
              focus:ring-1
            focus:ring-gray-900
            ' placeholder='What is this about'></input>
           </div>
           <div className='flex flex-col gap-3'>
              <label className='text-sm font-semibold ' htmlFor='message'> Message</label>
              <textarea id='message'
                      className='
                
              text-xs
              ring-1
              p-2
              rounded-sm
              ring-gray-400
              focus:outline-none
              focus:ring-1
            focus:ring-gray-900
            ' placeholder='What is this about'></textarea>
           </div>
            <div className='flex justify-center'>
                <button className='bg-blue-500 text-white text-sm font-semibold px-2 py-1.5 rounded-sm hover:bg-blue-700' onClick={handelSendMessag}>Send Message</button>
           </div>
         </div>
    </div>
  )
}

export default ContactForm