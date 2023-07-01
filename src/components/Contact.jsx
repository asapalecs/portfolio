import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/62596c65-26f2-42e9-9976-c0356edd295f" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-5'>
                <p className='text-4xl font-bold inline border-b-4 border-[#f8961e] text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>// Please complete the form below or feel free to send me an email. asapalecs@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' required />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' required />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-[#f8961e] hover:border-[#f8961e] px-4 py-3 my-8 mx-auto flex items-center'>Send Email</button>
        </form>
    </div>
  )
}

export default Contact