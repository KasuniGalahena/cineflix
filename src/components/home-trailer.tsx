import { Ubuntu, Inter } from 'next/font/google'
import Link from "next/link";
import { MdDownloadForOffline } from "react-icons/md";
import { FaCircleInfo } from "react-icons/fa6";

const ubuntu = Ubuntu({
    subsets: ['latin-ext'],
    weight: "400"
});

const inter = Inter({
    subsets: ['latin'],
    weight: '500'
});

export default function HomeTrailer() {
    return (
        <div>
            <video autoPlay loop muted className='w-full h-screen object-cover'>
                <source src="/videos/Carls-Date.mp4" /></video>
            <div className='absolute top-0 w-full h-full flex flex-col justify-end md:text-left text-center 
      text-white md:pl-10 pl-0 sm:pb-28 pb-16 text-5xl'>
                <div className='md:w-1/3'>
                    <div className={`${ubuntu.className}`}>
                        Carl's Date
                    </div>
                    <div className='md:mt-10 mt-3'>
                        <Link href="/">
                            <button className={`bg-primary text-dark sm:text-md text-lg hover:bg-primary/70 
        place-self-center shadow-lg py-2 px-6 rounded duration-500 ${inter.className}`}>
                                <div className="flex items-center">
                                    <MdDownloadForOffline />
                                    <div className='ml-2'>Download</div>
                                </div>
                            </button>
                        </Link>
                        <Link href="/moviedetails">
                            <button className={`bg-secondary text-dark sm:text-md text-lg hover:bg-secondary/70 
        place-self-center shadow-lg py-2 px-6 ml-3 md:mt-0 mt-3 rounded duration-500 ${inter.className}`}>
                                <div className="flex items-center">
                                    <FaCircleInfo />
                                    <div className='ml-2'>More Info</div>
                                </div>
                            </button>
                        </Link>
                    </div>
                </div>
                <div className='md:w-2/3'></div>
            </div>
        </div>
    )
}