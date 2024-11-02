import React, { useEffect, useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { listMovies, UpcomingMovies } from '@/services/cineflix-api-services';
import { inter, ubuntu } from '../../public/fonts/fonts';
import { FaStar } from "react-icons/fa";
import toast from 'react-hot-toast';

const Upcoming = () => {

    const [loading, setLoading] = useState<boolean>(false);

    const [upcomingMovieList, setUpcomingMovieList] = useState<any[]>([]);

    useEffect(() => {
        loadUpcomingMovies();
    }, []);


    async function loadUpcomingMovies() {
        try {
            setLoading(true);

            const response = await listMovies({
                minimum_rating : 0,
                page : 1,
                limit : 10
            });
            setUpcomingMovieList(response.data.data.movies)

        } catch (error) {
            console.error("Error loading upcoming movies:", error);
            toast.error("Error loading upcoming movies:");

        } finally {
            setLoading(false);
        }
    }

    const settingsUpcoming = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "0px",
        speed: 1000,
        autoplay: true,
        pauseOnHover: true,
        autoplaySpeed: 1500,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <div className='container mx-auto relative py-24'>
            <div className={`sm:text-4xl text-2xl text-primary text-center pb-16 ${ubuntu.className}`}>Upcoming CineFlix Movies Torrents</div>
            <div className="slider-container">
                <Slider {...settingsUpcoming}>
                    {upcomingMovieList.map(movie => (
                        <div key={movie.id} className='group p-5'>
                            <Link href={`/movie-details/${movie.id}`}>
                                <div className="relative overflow-hidden group hover:shadow-lg hover:shadow-secondary/55">
                                    <Image src={movie.large_cover_image} alt="poster" width={450} height={600} className="rounded-lg drop-shadow-lg" />
                                    <div className="absolute h-full w-full bg-dark/30 rounded-lg flex items-center justify-center -bottom-10 
                                                                        group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                        <div className="block text-center p-10">
                                            <div className="flex justify-center">
                                                <FaStar className="text-secondary text-2xl" />
                                            </div>
                                            <div className={`text-xl text-white font-semibold mt-3 ${inter.className}`}>
                                                {movie.rating}
                                            </div>
                                            <div className={`text-lg text-white font-semibold mt-6 ${inter.className}`}>
                                                {movie.title}
                                            </div>
                                            {/* <div className={`text-lg text-white font-semibold mt-6 ${inter.className}`}>
                                                {movie.genres.map((genre: any, index: any) => (
                                                    <div key={index}>{genre}</div>
                                                ))}
                                            </div> */}
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

export default Upcoming
