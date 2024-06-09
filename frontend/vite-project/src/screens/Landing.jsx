import React from 'react'
import line from "../assets/line.svg";
import starBig from "../assets/starBig.svg";
import starSmall from "../assets/starSmall.svg";
import bg from './images/bg.png'
import pot from './images/pot.png'
import { Link } from 'react-router-dom';
import Navbar from './Navbar.jsx'


const Landing = () => {
  return (
    <div className='relative'>
      <Navbar />
      <div className='absolute mx-[70px] ml-[12%] mt-[53%] rounded-full w-[20%] bg-black text-white flex justify-center px-12 py-4'>
      <Link to='/create-post' >
          <p>  Get started </p>
         </Link>
          </div>
    <div className="flex bg-white   w-full relative" >
      <img src={bg} alt="photo" className='absolute top-0 mx-[60%] '/>
      <div className='absolute top-[20%] right-24'>
        <img src={starBig} alt="" />
      </div>
      <div className='absolute top-5 left-5000'>
        <div className='mx-[70px] mt-[70px] text-7xl text-green w-[600px] font-bold'>
        Welcome to Terrace Gardeners' Paradise!
        </div>
        <div className='mx-[70px] mt-[40px] w-[500px] font-bold'>
Explore our vibrant community to connect, share, learn and shop for all your terrace gardening needs.        </div>

          
<div className='flex justify-start'>      
          <div className='absolute top-[51%] left-[90%]'>
        <img src={starSmall} alt="" />
      </div>
        </div>

        <div className='mx-[70px]  text-7l w-[600px] font-bold mt-[50px] flex gap-7'>
          <div>
             <p className='text-2xl font-bold'>CUSTOMERS</p> <br />
             <p className='mt-[2px] mx-[40px] my-[50px] text-1x'>100+</p></div>
          <img src={line} alt=""  className='' />
          <div>
             <p className='text-2xl font-bold'>TOTAL SALES</p> <br />
             <p className='mt-[2px] mx-[40px] my-[50px]'>1000+</p></div>
          <img src={line} alt=""  className='' />
        </div>
      
      </div>
      <div className="flex absolute mx-[10%] pt-[65%]">

  <div className="w-[50%]">
    <header className="px-6">
      <h1 className="text-4xl text-justify font-bold text-green-700"> Garden Hub</h1> <br />
      <p className="text-lg text-justify text-gray-600 mt-2">Your one-stop destination for all things gardening and greenery.</p>
    </header> <br />
    <div className="text-justify mb-12">
      <p>Terrace gardening, once a niche practice, has now emerged as a popular and sustainable solution for urban dwellers seeking to reconnect with nature. With the ever-increasing concern for environmental sustainability and food security, terrace gardening offers a myriad of benefits, ranging from fresh produce cultivation to aesthetic enhancement of living spaces. This essay explores the art and science behind terrace gardening, delving into its principles, techniques, and the transformative impact it has on individuals and communities.</p>
    </div>
  </div>
  <div className="w-[1px] bg-gray-300 h-[80%]"></div>
  <div className="w-[40%] mx-[50px]">
    <img src={pot} alt="Garden Photo" className="w-full h-full object-cover" />
  </div>
 
</div>
<div className='absolute  pt-[120%] w-full'>
<footer className="bg-gray-100 p-8 w-full text-center mt-12 ">
  <h2 className="text-2xl font-bold mb-4">Send Us Your Comments</h2>
  <form className="max-w-md mx-auto space-y-4" action={`mailto:madhusri0774@gmail.com`} method="post" encType="text/plain">
    <div>
      <label htmlFor="name" className="block text-left mb-1">Name:</label>
      <input type="text" id="name" name="name" className="w-full px-4 py-2 border rounded-md" required />
    </div>
    <div>
      <label htmlFor="email" className="block text-left mb-1">Your Email:</label>
      <input type="email" id="email" name="email" className="w-full px-4 py-2 border rounded-md" required />
    </div>
    <div>
      <label htmlFor="comments" className="block text-left mb-1">Comments:</label>
      <textarea id="comments" name="comments" className="w-full px-4 py-2 border rounded-md" required></textarea>
    </div>
    <button type="submit" className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">Send</button>
  </form>
</footer>
</div>
    </div>
    </div>
  )
}

export default Landing;