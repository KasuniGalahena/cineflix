import React from 'react';
import Link from "next/link";
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export default function Contact() {
    return (
        <>
            <Navbar />
            <div className='bg-dark'>
                <div className='container mx-auto py-24'>
                    <div className='text-3xl text-primary md:text-left text-center font-Helvetica md:pl-5 pb-4'>Contact us</div>
                    <div className='md:flex block'>
                        <div className='md:w-1/2 sm:w-full m-5 mt-7'>
                            <form className='w-full mx-auto bg-dark2 rounded-lg shadow-lg shadow-secondary/10 p-14 px-8'>
                                <div>
                                    <div className='text-md text-white font-NotoSans'>
                                        <label>Name</label>
                                    </div>
                                    <div className='mt-2'><input className='rounded-md bg-dark text-white w-full p-2' type='text' /></div>
                                </div>
                                <div>
                                    <div className='text-md text-white font-NotoSans mt-6'>
                                        <label>Email</label>
                                    </div>
                                    <div className='mt-2'><input className='rounded-md bg-dark text-white w-full p-2' type='email' /></div>
                                </div>
                                <div>
                                    <div className='text-md text-white font-NotoSans mt-6'>
                                        <label>Subject</label>
                                    </div>
                                    <div className='mt-2'><input className='rounded-md bg-dark text-white w-full p-2' type='text' /></div>
                                </div>
                                <div>
                                    <div className='text-md text-white font-NotoSans mt-6'>
                                        <label>Your message</label>
                                    </div>
                                    <div className='mt-2'>
                                        <textarea id="message" className='rounded-md bg-dark text-white w-full p-2'></textarea>
                                    </div>
                                </div>
                                <button className='bg-secondary text-dark font-bold w-full rounded-lg font-NotoSans hover:bg-secondary/70 
                        shadow-lg shadow-secondary/10 py-2 px-5 mt-10'>Send
                                </button>
                            </form>
                        </div>
                        <div className='md:w-1/2 sm:w-full m-5 flex p-14'>
                            <div className='self-center text-center text-lg text-white font-NotoSans'>
                                <div>
                                    Please note that any contact messages that are requesting movies will be ignored.
                                </div>
                                <div className='md:mt-20 mt-10'>
                                    You can also send your feedback and support messages to e-mail address:
                                    <Link href="/" className='text-secondary italic underline ml-1'>support@yts.ag</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <Footer />
        </>
    )
}