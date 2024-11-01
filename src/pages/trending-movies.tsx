import React, { useEffect, useState } from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Link from "next/link";
import Image from "next/image";
import { inter, ubuntu } from '../../public/fonts/fonts';
import { ListMovieParams, listMovies } from '@/services/cineflix-api-services';
import { FaStar } from 'react-icons/fa6';
import ReactPaginate from 'react-paginate';

export default function Trending() {

    const [loading, setLoading] = useState<boolean>(false);

    const [totalMovies, setTotalMovies] = useState<number>(0);

    const [trendingMovieList, setTrendingMovieList] = useState<[]>([]);
    const [trendingPagination, setTrendingPagination] = useState<{ page: number; limit: number; }>({
        page: 1,
        limit: 15
    });

    useEffect(() => {
        loadTrendingMovies();
    }, [trendingPagination, totalMovies]);

    async function loadTrendingMovies() {
        try {
            setLoading(true);

            const response = await listMovies({
                sort_by : 'download_count',
                page : trendingPagination.page,
                limit : trendingPagination.limit
            });
            console.log('API Response:', response);

            setTrendingMovieList(response.data.data.movies);
            setTotalMovies(response.data.data.movie_count);
        } catch (error) {
            console.error("Error loading trending movies:", error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <Navbar />
            {loading ? (
                <div className="flex items-center justify-center min-h-screen">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-primary"></div>
                </div>
            ) : (
                <div className="relative" style={{
                    backgroundImage: `url('/images/clipart89869.png')`,
                    backgroundSize: 'cover', backgroundPosition: 'center'
                }}>
                    <div className='container mx-auto pt-24'>
                        <div className="absolute inset-0 bg-dark2 bg-gradient-to-r from-bgColor1 to-bgColor2 opacity-90"></div>
                        <div className={`relative text-4xl text-primary sm:text-left text-center py-14 ${ubuntu.className}`}>24h Cinflix Trending Movies</div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-16 relative">
                            {trendingMovieList.map((movie: any) => (
                                <div key={movie.id} className='group'>
                                    <Link href={`/movie-details/${movie.id}`}>
                                        <div className="relative overflow-hidden group">
                                            <Image src={movie.large_cover_image} alt="poster" width={300} height={500} className="rounded-lg drop-shadow-lg" />
                                            <div className="absolute h-full w-full bg-dark/30 rounded-lg p-6 flex items-center justify-center -bottom-10 
                                                                        group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                                <div className="block text-center">
                                                    <div className="flex justify-center">
                                                        <FaStar className="text-secondary text-2xl" />
                                                    </div>
                                                    <div className={`text-xl text-white font-semibold mt-3 ${inter.className}`}>
                                                        {movie.rating}
                                                    </div>
                                                    <div className={`text-lg text-white font-semibold mt-6 ${inter.className}`}>
                                                        {movie.genres.map((genre: any, index: any) => (
                                                            <div key={index}>{genre}</div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`text-md text-white mt-3 ${inter.className}`}>
                                            {movie.title}
                                        </div>
                                        <div className={`text-sm text-gray-400 mt-1 ${inter.className}`}>
                                            {movie.year}
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='py-16 relative z-10'>
                        {totalMovies > 1 && (
                            <ReactPaginate
                                forcePage={trendingPagination.page - 1}
                                pageCount={totalMovies / trendingPagination.limit}
                                pageRangeDisplayed={5}
                                marginPagesDisplayed={1}
                                onPageChange={(selected) =>
                                    setTrendingPagination({ ...trendingPagination, page: selected.selected + 1 })
                                }
                                containerClassName={'pagination'}
                                activeClassName={'bg-primary'}// Add a class name for the active page link
                                className='flex gap-3 items-center justify-center'
                                pageClassName='border rounded-lg py-2 px-3 hover:bg-primary hover:text-black active:bg-primary'
                            />
                        )}
                    </div>
                </div>
            )}
            <Footer />
        </>
    )
}