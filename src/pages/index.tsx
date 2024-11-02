import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import HomeTrailer from '@/components/home-trailer';
import Latest from '@/components/latest';
import Upcoming from '@/components/upcoming';
import { Toaster } from 'react-hot-toast';

export default function Home() {

  return (
    <>
      <Navbar />
      <HomeTrailer />
      <div className="relative" style={{
        backgroundImage: `url('/images/clipart89869.png')`,
        backgroundSize: 'cover', backgroundPosition: 'center'
      }}>
        <div className="absolute inset-0 bg-dark2 bg-gradient-to-r from-bgColor1 to-bgColor2 opacity-90"></div>
        <Latest />
        <Upcoming />
      </div>
      <Footer />
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            border: '1px solid #d5d5d5',
            borderRadius: '12px',
            padding: '15px',
            fontSize: '15px',
            color: '#2a2a2a'
          },
        }}
      />
    </>
  )
}
