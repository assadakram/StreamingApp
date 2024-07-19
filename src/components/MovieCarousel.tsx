import React from "react";
import MovieCard from "./MovieCard";
import { MovieType } from "../types";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface MovieCarouselProps {
  title: string;
  movies: MovieType[] | null;
  loading: boolean;
}
const MovieCarousel: React.FC<MovieCarouselProps> = ({
  movies,
  title,
  loading,
}) => {
  let CarouselChunks;
  const CarouselItems = [];
  const tempCarouselArray = [...(movies || [])];

  while (tempCarouselArray && tempCarouselArray.length > 0) {
    CarouselChunks = tempCarouselArray.splice(0, 6);
    CarouselItems.push(CarouselChunks);
  }

  if (loading)
    return (
      <div className="text-center mt-5 text-blue-500 mx-4 ">
        <div role="status" className="relative w-full h-36 animate-pulse ">
          <div className="h-36 bg-gray-200 rounded-lg dark:bg-gray-700 w-full"></div>
        </div>
      </div>
    );

  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-2 ">{title}</h2>
      <Carousel
        emulateTouch
        showIndicators={false}
        showThumbs={false}
        showStatus={false}
        showArrows
      >
        {CarouselItems.map((movie, index) => (
          <div key={index} className="flex">
            {movie.map((item) => (
              <div key={item.id}>
                <MovieCard movie={item} />
              </div>
            ))}
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default MovieCarousel;
