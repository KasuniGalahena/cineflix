import { qualityDropdown, genreDropdown, ratingDropdown, yearDropdown, languageDropdown, orderByDropdown } from "@/constant";
import { ListMovieParams, listMovies } from "@/services/cineflix-api-services";
import { useEffect, useState } from "react";

interface Props {
    onFilter: (value: ListMovieParams) => void
}

// export default function SearchWidget() {
const SearchWidget: React.FC<Props> = (props) => {
    const [filter, setFilter] = useState<ListMovieParams>({});

    return (
        <div className='relative rounded-lg shadow-lg bg-dark2 shadow-secondary/10 px-5 py-10'>
            <form>
                <div className='text-2xl text-gray-400 md:text-left text-center font-Helvetica ml-5 mt-3'>
                    Search Term :
                </div>
                <div className=''>
                    <div className='md:flex'>
                        <div className='md:w-1/2 m-5'>
                            <input type="text" id="first_name" className="bg-dark2 border border-gray-800 text-gray-300 
                        text-sm rounded-md focus:border-gray-500 p-2.5 mb-5 w-full" />
                        </div>
                        <div className='md:w-1/2 m-5'>
                            <div className='text-right'>
                                <button type="button" onClick={() => props.onFilter(filter)} className='bg-secondary text-dark font-Ceraroundpro text-lg hover:bg-secondary/70 
                            shadow-lg py-2 px-8 mb-5 rounded-lg duration-500'>
                                    <i className="fa-solid fa-magnifying-glass mr-2 text-dark"></i>Search
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='md:flex md:text-center'>
                        <div className='md:w-1/6 m-5'>
                            <label className="block mb-2 text-sm font-medium text-white">Quality :</label>
                            <select
                                onChange={(e) => {
                                    const value = e.target.value;
                                    setFilter(prev => ({
                                        ...prev,
                                        quality: value ? e.target.value : undefined
                                    }));
                                }}
                                id="quality"
                                className="bg-dark2 border border-gray-800 text-gray-300 text-sm rounded-md focus:border-gray-500 p-2.5 w-full"
                            >
                                {qualityDropdown.map(option => (
                                    <option key={option.value} value={option.value}>{option.label}</option>
                                ))}
                            </select>
                        </div>
                        <div className='md:w-1/6 m-5'>
                            <label className="block mb-2 text-sm font-medium text-white">Genre :</label>
                            <select
                                onChange={(e) => {
                                    const value = e.target.value;
                                    setFilter(prev => ({
                                        ...prev,
                                        genre: value ? e.target.value : undefined
                                    }));
                                }}
                                id="genre"
                                className="bg-dark2 border border-gray-800 text-gray-300 text-sm rounded-md focus:border-gray-500 p-2.5 w-full"
                            >
                                {genreDropdown.map(option => (
                                    <option key={option.value} value={option.value}>{option.label}</option>
                                ))}
                            </select>
                        </div>
                        <div className='md:w-1/6 m-5'>
                            <label className="block mb-2 text-sm font-medium text-white">Rating :</label>
                            <select 
                            // onChange={(e) => {
                            //     const value = e.target.value;
                            //     setFilter(prev => ({
                            //         ...prev,
                            //         rating: value ? e.target.value : undefined
                            //     }));
                            // }}
                            id="rating" 
                            className="bg-dark2 border border-gray-800 text-gray-300 
                            text-sm rounded-md focus:border-gray-500 p-2.5 w-full">
                                {ratingDropdown.map(ratingDropdown => (
                                    <option value={ratingDropdown.value}>{ratingDropdown.label}</option>
                                ))}
                            </select>
                        </div>
                        <div className='md:w-1/6 m-5'>
                            <label className="block mb-2 text-sm font-medium text-white">Year :</label>
                            <select 
                            // onChange={(e) => {
                            //     const value = e.target.value;
                            //     setFilter(prev => ({
                            //         ...prev,
                            //         year: value ? e.target.value : undefined
                            //     }));
                            // }}
                            id="year" 
                            className="bg-dark2 border border-gray-800 text-gray-300 
                            text-sm rounded-md focus:border-gray-500 p-2.5 w-full">
                                {yearDropdown.map(yearDropdown => (
                                    <option value={yearDropdown.value}>{yearDropdown.label}</option>
                                ))}
                            </select>
                        </div>
                        <div className='md:w-1/6 m-5'>
                            <label className="block mb-2 text-sm font-medium text-white">Language :</label>
                            <select 
                            // onChange={(e) => {
                            //     const value = e.target.value;
                            //     setFilter(prev => ({
                            //         ...prev,
                            //         language: value ? e.target.value : undefined
                            //     }));
                            // }}
                            id="language" 
                            className="bg-dark2 border border-gray-800 text-gray-300 
                        text-sm rounded-md focus:border-gray-500 p-2.5 w-full">
                                {languageDropdown.map(languageDropdown => (
                                    <option value={languageDropdown.value}>{languageDropdown.label}</option>
                                ))}
                            </select>
                        </div>
                        <div className='md:w-1/6 m-5'>
                            <label className="block mb-2 text-sm font-medium text-white">Order By :</label>
                            <select 
                             onChange={(e) => {
                                const value = e.target.value;
                                setFilter(prev => ({
                                    ...prev,
                                    order_by: value ? e.target.value : undefined
                                }));
                            }}
                            id="orderBy" 
                            className="bg-dark2 border border-gray-800 text-gray-300 
                        text-sm rounded-md focus:border-gray-500 p-2.5 w-full">
                                {orderByDropdown.map(orderByDropdown => (
                                    <option value={orderByDropdown.value}>{orderByDropdown.label}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
            </form >
        </div >
    )
}

export default SearchWidget;
