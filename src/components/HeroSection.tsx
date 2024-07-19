import React, { useEffect, useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { MovieType } from "../types";
import { scrollLeft, scrollRight } from "../Helpers";
interface MovieCarouselProps {
  movies: MovieType[];
  loading: boolean;
}

const HeroSection: React.FC<MovieCarouselProps> = ({ movies, loading }) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [movieView, setMovieView] = useState<MovieType>();

  useEffect(() => {
    if (!loading) {
      setMovieView(movies[0]);
    }
  }, [loading, movies]);

  if (loading)
    return (
      <div className="text-center mt-5 text-blue-500 mx-4 pt-11">
        <div role="status" className="relative w-full h-[800px] animate-pulse ">
          <div className="h-[800px] bg-gray-200 rounded-lg dark:bg-gray-700 w-full"></div>
        </div>
      </div>
    );

  return (
    <div className="relative w-full h-[800px] text-white ">
      <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-black via-transparent to-black"></div>
      <img
        className="w-full h-full object-cover"
        src={movieView?.thumbnail_vertical}
        alt={movieView?.title}
      />
      <div className="absolute inset-0 w-full h-full flex flex-col justify-center px-4 md:px-16 lg:px-24">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
          {movieView?.title}
        </h1>
        <p className="text-gray-400 text-lg mb-2">
          Released: {movieView?.release_year}
        </p>
        <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200 mb-6">
          {movieView?.synopsis}
        </p>
        <div className="flex items-center space-x-4 ">
          <button className="flex gap-2 items-center bg-white text-black font-semibold py-2 px-6 rounded hover:bg-gray-300">
            <FaPlay size={28} />
            Play
          </button>
          <button className="flex gap-2 items-center bg-gray-700 bg-opacity-60 text-white font-semibold py-2 px-6 rounded hover:bg-gray-600">
            <IoMdInformationCircleOutline size={28} />
            More Info
          </button>
        </div>
        <div className="absolute left-0 sm:left-auto right-auto sm:right-4 bottom-4 w-full md:w-max flex gap-2 opacity-50 hover:opacity-100">
          <MdChevronLeft
            onClick={() => scrollLeft(carouselRef)}
            className=" h-full  cursor-pointer z-10 "
            size={40}
          />
          <div
            ref={carouselRef}
            className="flex overflow-x-scroll scrollbar-hide scroll-smooth gap-2 w-96 cursor-pointer "
          >
            {movies &&
              movies.map((movie, index) => (
                <div key={index} className="flex-none">
                  <div onClick={() => setMovieView(movie)}>
                    <img
                      className="w-16 h-full object-cover"
                      src={movie?.thumbnail_vertical}
                      alt={movie.title}
                    />
                  </div>
                </div>
              ))}
          </div>
          <MdChevronRight
            onClick={() => scrollRight(carouselRef)}
            className=" h-full cursor-pointer z-10"
            size={40}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
