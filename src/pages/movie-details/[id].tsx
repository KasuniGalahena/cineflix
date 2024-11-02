import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { inter, ubuntu } from "../../../public/fonts/fonts";
import { movieDetails, movieSuggestions } from "@/services/cineflix-api-services";
import { useRouter } from "next/router";
import YouTube from "react-youtube";
import { FaHeart, FaStar } from "react-icons/fa6";
import moment from "moment";
import toast from "react-hot-toast";

export default function MovieDetailsPage(props: any) {

    const [loading, setLoading] = useState<boolean>(false);

    const router = useRouter()
    const { id } = router.query;

    const [details, setDetails] = useState<any>();
    const [suggestions, setSuggestions] = useState<any>();

    useEffect(() => {
        if (id) {
            loadMovieDetails(id);
            loadMovieSuggestions(id);
        }
    }, [id]);

    async function loadMovieDetails(movieId: any) {
        try {
            setLoading(true);
            const res = await movieDetails({ movie_id: movieId, with_images: true, with_cast: true });
            setDetails(res.data.data.movie);
        } catch (error) {
            console.error("Error loading movie details:", error);
            toast.error("Error loading movie details:");
        } finally {
            setLoading(false);
        }
    }

    async function loadMovieSuggestions(suggestId: any) {
        try {
            setLoading(true);
            const res = await movieSuggestions({movie_id: suggestId});
            console.log(res);
            setSuggestions(res.data.data.movies);

        } catch (error) {
            console.error("Error loading movie suggestions:", error);
            toast.error("Error loading similar movies");

        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <Navbar />
            <div>
                {loading ? (
                    <div className="flex items-center justify-center min-h-screen">
                        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-primary"></div>
                    </div>
                ) : (
                    <>
                        {
                            details ?
                                <>
                                    <div className="relative" style={{ backgroundImage: `url(${details.background_image_original})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                                        <div className="absolute inset-0 bg-dark2 opacity-80"></div>
                                        <div className="relative" style={{ backgroundImage: `url('/images/Movie-PNG-HD-Image.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                                            <div className="container mx-auto md:flex block pt-24 pb-10">
                                                {/* torrent details */}
                                                <div className="sm:w-1/12 w-full m-5 relative"></div>
                                                <div className="sm:w-4/12 w-full m-5 relative">
                                                    <Image src={details.large_cover_image} alt="cover-image" width={300} height={500} className="rounded-lg shadow-lg shadow-secondary/10" />
                                                </div>
                                                <div className={"sm:w-6/12 w-full m-5 relative z-10"}>
                                                    <div className={`text-5xl text-secondary md:text-left text-center ${ubuntu.className}`}>{details.title}</div>
                                                    <div className={`text-xl text-white mt-6 ${inter.className}`}>{details.year}</div>
                                                    <div className={`text-xl text-white font-semibold mt-1 ${inter.className}`}>{details.genres.join(" / ")}</div>
                                                    <div>
                                                        <div className={`text-base text-gray-400 mt-5 mr-2 ${inter.className}`}>Available in : </div>
                                                        {details.torrents.map((torrent: any) => (
                                                            <span key={torrent.id}>
                                                                {
                                                                    <button className={`border border-gray-400 text-white text-sm rounded-md hover:text-gray-400 py-1 px-2 mt-3 mr-2 
                                                                    ${inter.className}`}>
                                                                        <Link href={torrent.url}>{torrent.quality}.{torrent.type}</Link>
                                                                    </button>
                                                                }
                                                            </span>
                                                        ))}
                                                    </div>
                                                    <div className="mt-8">
                                                        <div className="flex">
                                                            <div className="text-secondary text-2xl items-center flex md:w-10 w-14"><FaHeart /></div>
                                                            <div className={`text-lg font-semibold ml-2 w-20 ${inter.className}`}>{details.like_count}</div>
                                                        </div>
                                                        <div className="flex mt-2">
                                                            <div className="items-center flex md:w-10 w-14">
                                                                <Image src="/images/logo-imdb.svg" alt="imdb" width={40} height={50} />
                                                            </div>
                                                            <div className="ml-2 w-20">
                                                                <span className={`text-lg font-semibold ${inter.className}`}>{details.rating}</span>
                                                                <span className={`text-gray-400 text-sm ${inter.className}`}>/10</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="sm:w-1/12 w-full m-5 relative z-10"></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="relative" style={{
                                        backgroundImage: `url('/images/clipart89869.png')`,
                                        backgroundSize: 'cover', backgroundPosition: 'center'
                                    }}>
                                        <div className="absolute inset-0 bg-gradient-to-r from-bgColor1 to-bgColor2 opacity-90"></div>
                                        <div className="relative z-10 py-20">
                                            {/* Description */}
                                            <div className="container mx-auto">
                                                <div className={`text-4xl text-primary pb-16 ${ubuntu.className}`}>Description</div>
                                                <div className={`text-base text-gray-400 md:pr-20 ${inter.className}`}>
                                                    {details.description_full ?
                                                        details.description_full :
                                                        <div></div>
                                                    }
                                                </div>
                                                <div className={`text-base text-gray-500 md:pr-20 ${inter.className}`}>
                                                    {details.date_uploaded ?
                                                        <div>Uploaded: {moment(details.date_uploaded).format('MMMM DD, YYYY [at] hh:mm A')}</div> :
                                                        <div></div>
                                                    }
                                                </div>
                                            </div>
                                            {/* trailers */}
                                            <div className="container mt-10">
                                                <YouTube videoId={details.yt_trailer_code} />
                                            </div>
                                            {/* cast */}
                                            <div className="container mx-auto pt-20 pb-14">
                                                <div className={`text-4xl text-primary pb-16 ${ubuntu.className}`}>Top cast</div>
                                                {details.cast ?
                                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-16">
                                                        {details.cast.map((cast: any) => (
                                                            <div key={cast.id}>
                                                                {
                                                                    <div className="text-center">
                                                                        <div className="flex justify-center">
                                                                            <Image
                                                                                src={cast.url_small_image}
                                                                                alt="cast"
                                                                                width={200}
                                                                                height={200}
                                                                                className="drop-shadow-lg rounded-full" />
                                                                        </div>
                                                                        <div className="mt-4">
                                                                            <div className={`text-gray-400 text-base ${inter.className}`}>
                                                                                {cast.name}
                                                                            </div>
                                                                            <div className={`text-white text-base ${inter.className}`}>as</div>
                                                                            <div className={`text-white text-base ${inter.className}`}>{cast.character_name}</div>
                                                                        </div>
                                                                    </div>
                                                                }
                                                            </div>))}
                                                    </div> :
                                                    <div></div>
                                                }
                                            </div>
                                        </div>
                                    </div>

                                    {/* similar movies */}
                                    <div className="container mx-auto py-14">
                                        <div className={`text-xl text-primary mb-5 ${ubuntu.className}`}>Similar movies</div>
                                        {suggestions ?
                                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-16">
                                                {suggestions.map((movie: any) => (
                                                    <div key={movie.id}>
                                                        {
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
                                                        }
                                                    </div>))}
                                            </div> :
                                            <div>Not available</div>}
                                    </div>
                                </> : <div>Movie Not Found</div>
                        }
                    </>
                )}
            </div>
            <Footer />
        </>
    )
}
function castWithImages(id: any) {
    throw new Error("Function not implemented.");
}

