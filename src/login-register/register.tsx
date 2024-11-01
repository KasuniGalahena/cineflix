import React from 'react';
import Link from "next/link";

export default function Register() {
  return (
    <div className='bg-dark flex flex-col justify-center py-28'>
      <form className='max-w-[500px] w-full mx-auto bg-dark2 rounded-lg shadow-lg shadow-secondary/10 p-14 px-8'>
        <div className='text-3xl text-primary text-center font-Helvetica pb-4'>Register</div>
        <div>
          <div className='text-md text-white font-NotoSans mt-6'><label>User Name</label></div>
          <div className='mt-2'><input className='rounded-md bg-dark text-white w-full p-2' type='text' /></div>
        </div>
        <div>
          <div className='text-md text-white font-NotoSans mt-6'><label>Email (No confirmation needed)</label></div>
          <div className='mt-2'><input className='rounded-md bg-dark text-white w-full p-2' type='email' /></div>
        </div>
        <div>
          <div className='text-md text-white font-NotoSans mt-6'><label>Password</label></div>
          <div className='mt-2'><input className='rounded-md bg-dark text-white w-full p-2' type='password' /></div>
        </div>
        <div>
          <div className='text-md text-white font-NotoSans mt-6'><label>Confirm Password</label></div>
          <div className='mt-2'><input className='rounded-md bg-dark text-white w-full p-2' type='password' /></div>
        </div>
        <div className='text-sm flex justify-center mt-8'>
          <div className='italic text-white'>By clicking Register, you agree to our </div>
          <div><Link href="/terms&conditions" className='italic text-secondary hover:underline ml-1'>Terms & Conditions</Link></div>
        </div>
        <button className='bg-secondary text-dark font-bold w-full rounded-lg font-NotoSans hover:bg-secondary/70 
                        shadow-lg shadow-secondary/10 py-2 px-5 mt-10'>Register
        </button>
      </form>
    </div>
  )
}
