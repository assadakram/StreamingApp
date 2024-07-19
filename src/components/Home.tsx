import React from "react";
import HeroSection from "./HeroSection";
import MovieCarousel from "./MovieCarousel";
import useFetchSnippet from "../hooks/useMovieList";

const Home: React.FC = () => {
  const { data, loading } = useFetchSnippet();

  return (
    <div className="bg-gray-900 text-white">
      <HeroSection movies={data ?? []} loading={loading} />
      <div
        className={`container mx-auto overflow-hidden ${
          loading ? `pl-0` : `pl-12 `
        } z-[10000]`}
      >
        <MovieCarousel title="UpComing" movies={data} loading={loading} />
        <MovieCarousel title="Popular" movies={data} loading={loading} />
        <MovieCarousel title="Trending" movies={data} loading={loading} />
        <MovieCarousel title="Top Rated" movies={data} loading={loading} />
        <MovieCarousel title="Horror" movies={data} loading={loading} />
      </div>
    </div>
  );
};

export default Home;
