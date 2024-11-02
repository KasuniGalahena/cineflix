import React, { useEffect, useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import SearchWidget from '@/components/search-widget';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { ListMovieParams, listMovies } from '@/services/cineflix-api-services';
import { inter, ubuntu } from '../../public/fonts/fonts';
import { FaStar } from 'react-icons/fa6';
import ReactPaginate from 'react-paginate';
import toast from 'react-hot-toast';

interface MovieList {
    count : number,
    list : any[]
}

export default function BrowseMovies() {

    const [loading, setLoading] = useState<boolean>(false);
    const [movieList, setMovieList] = useState<MovieList>({count: 0, list: []});
    const [filter, setFilter] = useState<ListMovieParams>({});
    const [movieListPagination, setMovieListPagination] = useState<{ page: number, limit: number }>({
        page: 1,
        limit: 15
    });

    useEffect(() => {
        loadMovies();
    }, [movieListPagination]);

    async function loadMovies() {
        try {
            setLoading(true);

            const response = await listMovies({
                ...filter,
                page : movieListPagination.page,
                limit : movieListPagination.limit 
            });
            
            setMovieList({
                count : response.data.data.movie_count,
                list :  response.data.data.movies
            });

        } catch (error) {
            console.error("Error loading upcoming movies:", error);
            toast.error("Error loading upcoming movies:");

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
                    <div className="absolute inset-0 bg-dark2 opacity-90"></div>
                    <div className='container mx-auto relative pt-24'>
                        <SearchWidget onFilter={value => {
                            console.log(value);
                            // setMovieList(value);
                            setFilter(value);
                            setMovieListPagination({
                                ...movieListPagination,
                                page : 1
                            })
                        }} />
                        <div className={`text-4xl text-primary sm:text-left text-center pt-20 pb-14 ${ubuntu.className}`}>CineFlix Movies</div>
                        <div className='relative'>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-16">
                                {movieList.list.map((movie: any) => (
                                    <div key={(movie.id)} className='group'>
                                        <Link href={`/movie-details/${movie.id}`}>
                                            <div className="relative overflow-hidden group">
                                                <Image src={movie.medium_cover_image} alt="poster" width={300} height={500} className="rounded-lg drop-shadow-lg" />
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
                            <div className='py-16'>
                                {movieList.count > 1 && (
                                    <ReactPaginate
                                        forcePage={movieListPagination.page - 1}
                                        pageCount={movieList.count / movieListPagination.limit}
                                        pageRangeDisplayed={10}
                                        marginPagesDisplayed={1}
                                        onPageChange={(selected) =>
                                            setMovieListPagination({ ...movieListPagination, page: selected.selected + 1 })
                                        }
                                        containerClassName={'pagination'}
                                        activeClassName={'bg-primary'}// Add a class name for the active page link
                                        className='flex gap-3 items-center justify-center'
                                        pageClassName='border rounded-lg py-2 px-3 hover:bg-primary hover:text-black active:bg-primary'
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <Footer />
        </>
    )
}
