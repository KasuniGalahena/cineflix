import React, { useEffect, useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { listMovies } from '@/services/cineflix-api-services';
import { inter, ubuntu } from '../../public/fonts/fonts';
import { FaStar } from "react-icons/fa";

const Latest = () => {

    const [loading, setLoading] = useState<boolean>(false);

    const [latestMovieList, setLatestMovieList] = useState<any[]>([]);

    useEffect(() => {
        loadLatestMovies();
    }, []);

    async function loadLatestMovies() {
        try {
            setLoading(true);
            const response = await listMovies({
                sort_by: 'date_added',
                order_by: 'desc',
                page: 1,
                limit: 12
            });
            setLatestMovieList(response.data.data.movies)

        } catch (error) {
            console.error("Error loading latest movies:", error);

        } finally {
            setLoading(false);
        }
    }

    const settingsLatest = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "0px",
        speed: 2000,
        autoplay: true,
        pauseOnHover: true,
        autoplaySpeed: 1500,
        slidesToShow: 2,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    infinite: true,
                    dots: true,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    initialSlide: 1
                }
            }
        ]
    };

    return (
        <div className='container mx-auto relative pt-24'>
            <div className={`sm:text-4xl text-2xl text-primary text-center pb-16 ${ubuntu.className}`}>Latest CineFlix Movies Torrents</div>
            <div className="slider-container">
                <Slider {...settingsLatest}>
                    {latestMovieList.map(movie => (
                        <div key={movie.id} className='group p-5'>
                            <Link href={`/movie-details/${movie.id}`}>
                                <div className="relative flex m-5 rounded-lg bg-dark2 hover:shadow-md hover:shadow-secondary/55" style=
                                    {{ backgroundImage: `url(${movie.background_image_original})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                                    <div className="absolute inset-0 bg-dark2 opacity-80 rounded-lg"></div>
                                    <div className="md:w-1/3 w-full relative">
                                        <div key={movie.id}>
                                            <Image
                                                src={movie.large_cover_image}
                                                alt='cover-image'
                                                width={450}
                                                height={600}
                                                className='rounded-lg drop-shadow-lg m-5'
                                            />
                                        </div>
                                    </div>
                                    <div className="md:w-2/3 relative ml-5">
                                        <div className="p-5">
                                            <div className={`text-lg text-white mt-3 flex ${inter.className}`}>
                                                <FaStar className='text-secondary text-2xl mr-2' />
                                                {movie.rating}
                                            </div>
                                            <div className={`text-lg text-white mt-3 ${inter.className}`}>
                                                {movie.title}
                                            </div>
                                            {/* <div className={`text-sm text-white mt-3 ${inter.className}`}>
                                                {movie.genres.join(' / ')}
                                            </div> */}
                                            <div className={`text-sm text-gray-400 mt-3 ${inter.className}`}>
                                                {movie.year}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default Latest