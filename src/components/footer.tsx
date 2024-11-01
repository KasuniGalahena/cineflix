import Link from "next/link";
import { inter } from '../../public/fonts/fonts';
import { GrFacebookOption } from "react-icons/gr";
import { IoLogoInstagram } from "react-icons/io5";
import { BsYoutube } from "react-icons/bs";

export default function Footer() {

  return (
    <div className='bg-dark2'>
      <div className='container mx-auto px-4 pt-16 pb-10'>
        <div className={`md:flex text-center justify-center text-sm ${inter.className}`}>
          <li className='mx-5 list-none text-gray-400 hover:text-white'><Link href="/browse-movies">Browse Movies</Link></li>
          <li className='mx-2 list-none text-gray-400 hover:text-white'>-</li>
          <li className='mx-5 list-none text-gray-400 hover:text-white'><Link href="/contact">Contact</Link></li>
          <li className='mx-2 list-none text-gray-400 hover:text-white'>-</li>
          <li className='mx-5 list-none text-gray-400 hover:text-white'><Link href="/login">Login</Link></li>
          <li className='mx-2 list-none text-gray-400 hover:text-white'>-</li>
          <li className='mx-5 list-none text-gray-400 hover:text-white'><Link href="/terms-and-conditions">Terms & Conditions</Link></li>
        </div>
        <div className='flex justify-center mt-4'>
          <Link href="/"><GrFacebookOption className="fa-brands fa-instagram text-white hover:text-gray-400 text-3xl mx-5" /></Link>
          <Link href="/"><IoLogoInstagram className="fa-brands fa-instagram text-white hover:text-gray-400 text-3xl mx-5" /></Link>
          <Link href="/"><BsYoutube className="fa-brands fa-instagram text-white hover:text-gray-400 text-3xl mx-5" /></Link>
        </div>
        <div className={`flex justify-center text-gray-400 text-xs mt-4 ${inter.className}`}>© 1997-2023 CineFlix, Inc.</div>
      </div>
    </div>
  )
}