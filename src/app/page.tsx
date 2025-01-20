"use client";
import { First } from "@/components/First";
import { log } from "console";
import { useEffect, useState } from "react";

type MovieType = {
  adult: boolean;
  backdrop_path: string;
  original_title: string;
  vote_average: number;
  poster_path: string;
};

export default function Home() {
  const [movies, setMovies] = useState<MovieType | undefined>();
  // fetch movie medeelel setMovie
  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNzU4Y2FjZWQ5NzdhNjVhNzI1ZDZhNDgwZWFkOTgxNCIsIm5iZiI6MTczNzM0MTY1OS41ODUsInN1YiI6IjY3OGRiYWRiZGJjZmYzM2E5YzY1NDIxNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dCNM9jVcXoaSnGoSixdWj6pzzMxTd97o62E3DuHJkYk";
  const getMovie = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    if (data?.results) {
      const allResults = data.results;
      setMovies(allResults[0]);
    }
  };

  useEffect(() => {
    getMovie();
    console.log("getting movie");
  }, []);
  console.log(movies);
  return (
    <div className="">
      <div>
        <p>Popular</p>
        <div className="mt-[50px] ml-[50px]">
          <img
            src={"https://image.tmdb.org/t/p/original/" + movies?.poster_path}
            alt=""
            className="w-[229px] h-[340px]"
          />
          <div className="p-[8px] w-[229px] h-[79px] bg-[#27272a] rounded-sm">
            <div className="flex gap-2 items-center">
              <img src="./Vector.png" alt="" className="h-[16px]" />
              <p>{movies?.vote_average}</p>
              <p>10</p>
            </div>
            <p>{movies?.original_title}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
