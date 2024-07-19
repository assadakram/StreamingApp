import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { CgChevronDownO } from "react-icons/cg";

import Modal from "./common/Modal";
import { MovieType } from "../types";

interface MovieCardProps {
  movie: MovieType;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const {
    thumbnail_horizontal,
    title,
    genre,
    synopsis,
    rating,
    duration_minutes,
    release_year,
    cast,
  } = movie;
  const [like, setLike] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handler = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.stopPropagation();
    setLike(!like);
  };

  return (
    <>
      <div className="mediaWrapper flex flex-col w-[160px] sm:w-[200px] md:w-[240px] lg:w-[286px] h-48 cursor-pointer p-1 transition ease-in-out delay-150 hover:z-50 hover:scale-125 duration-300">
        <img
          className=" w-ful h-full object-cover rounded-sm"
          src={thumbnail_horizontal}
          alt={title}
        />
        <div
          className="absolute inset-0 bg-black/80 w-full text-white mediaContainer"
          onClick={openModal}
        >
          <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
            {title}
          </p>
          <p className="p-4" onClick={(e) => handler(e)}>
            {like ? (
              <FaHeart
                className="absolute top-4 left-4 text-red-700"
                size={24}
              />
            ) : (
              <FaRegHeart
                className="absolute top-4 left-4 text-gray-300"
                size={24}
              />
            )}
          </p>
          <div className="absolute right-4 top-4">
            <span>Rating</span>:{" "}
            <span className="text-green-400">{rating}</span>
          </div>
          <div className="absolute bottom-3 left-3">{genre.join(",")}</div>
          <div className="absolute bottom-3 right-3" onClick={openModal}>
            <CgChevronDownO size={24} />
          </div>
        </div>
        <Modal isVisible={isModalVisible} onClose={closeModal}>
          <>
            <iframe
              width="100%"
              height={500}
              className="video-home"
              src="https://www.youtube.com/embed/AiohkY_XQYQ?autoplay=1&controls=1"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-0 text-white justify-between mt-6">
              <div className="flex flex-col gap-5 w-full sm:w-[65%]">
                <div className="flex justify-between items-center">
                  <div className="flex flex-col gap-2">
                    <p className="white-space-normal text-2xl font-bold">
                      {title}
                    </p>
                    <p className="white-space-normal text-xs md:text-sm flex-wrap w-[80%] ">
                      {synopsis}
                    </p>
                  </div>
                  <div className="flex gap-2 flex-col">
                    <div>
                      <span>Rating</span>:{" "}
                      <span className="text-green-400">{rating}</span>
                    </div>
                    <div className="w-max">
                      <span>Release_year</span>:{" "}
                      <span className="text-gray-500">{release_year}</span>
                    </div>
                    <div>
                      <span>Duration</span>:{" "}
                      <span className="text-gray-500">{duration_minutes}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex gap-4 flex-col w-full  sm:w-[35%]">
                  <div className="flex gap-1 w-max">
                    <span>Genre:</span>
                    <span className="text-gray-500"> {genre.join(",")}</span>
                  </div>
                  <div className="flex gap-1 w-max">
                    <span>Cast:</span>
                    <span className="text-gray-500 flex sm:block">
                      {cast.map((item, index) => (
                        <div key={index}>
                          {Object.entries(item)
                            .map(([key, value]) =>
                              key === "name" ? `${value}` : ""
                            )
                            .join(", ")}
                        </div>
                      ))}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </>
        </Modal>
      </div>
    </>
  );
};

export default MovieCard;
