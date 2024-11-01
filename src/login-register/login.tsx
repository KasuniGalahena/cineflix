import React from 'react';
import Link from "next/link";

export default function Login() {
    return (
        <div className='bg-dark flex flex-col justify-center py-28'>
            <form className='max-w-[500px] w-full mx-auto bg-dark2 rounded-lg shadow-lg shadow-secondary/10 p-14 px-8'>
                <div className='text-3xl text-primary text-center font-Helvetica pb-4'>Login</div>
                <div>
                    <div className='text-md text-white font-NotoSans mt-6'><label>User Name</label></div>
                    <div className='mt-2'><input className='rounded-md bg-dark text-white w-full p-2' type='text' /></div>
                </div>
                <div>
                    <div className='text-md text-white font-NotoSans mt-6'><label>Password</label></div>
                    <div className='mt-2'><input className='rounded-md bg-dark text-white w-full p-2' type='password' /></div>
                </div>
                <div className='flex mt-8 font-NotoSans'>
                    <p className='md:w-1/2 text-white'><input type='checkbox' className='' />Remember me</p>
                    <Link href="" className='md:w-1/2 text-right italic text-secondary text-base hover:underline'>Forgot Password</Link>
                </div>
                <button className='bg-secondary text-dark font-bold w-full rounded-lg font-NotoSans hover:bg-secondary/70 
                        shadow-lg shadow-secondary/10 py-2 px-5 mt-10'>Login</button>
            </form>
        </div>
    )
}
