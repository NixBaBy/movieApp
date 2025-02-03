"use client";

import { Responce } from "@/utils/response";
import { GenreFilterType, Genres, GenreType, MovieType } from "@/utils/types";
import { ToggleGroup, ToggleGroupItem } from "@radix-ui/react-toggle-group";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Paginat } from "../seemore/Paginat";

const usePage = () => {
  const searchParams = useSearchParams();
  const value = searchParams.get("searchvalue");
  // const genreIds = searchParams.get("genreIds");
  const page = Number(searchParams.get("page") || "1");
  const [data, setData] = useState<GenreFilterType | null>(null);
  const [genre, setGenre] = useState<Genres | null>(null);
  const [genreSelected, setGenreSelected] = useState<string[]>([]);
  const [filteredMovies, setFilteredMovies] = useState<GenreFilterType | null>(
    null
  );
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const movie = `/search/movie?query=${value}&language=en-US&page=${page}`;
      const data = await Responce(movie);
      setData(data);
      const genre = "/genre/movie/list?language=en";
      const data1 = await Responce(genre);
      setGenre(data1);
    };
    fetchData();
  }, [page]);

  const genreChangeHandler = (selectedgenre: string[]) => {
    setGenreSelected(selectedgenre);
    router.push(`?page=${page}&value=${value}&genreIds=${selectedgenre}`);
  };

  useEffect(() => {
    if (genreSelected.length > 0 && data) {
      const genreFilteredMovies = data.results.filter((movie: MovieType) =>
        genreSelected.some((id) =>
          movie?.genre_ids?.includes(Number(id) as never)
        )
      );
      setFilteredMovies({ ...data, results: genreFilteredMovies });
    } else {
      setFilteredMovies(data);
    }
  }, [genreSelected, data]);

  if (!data) return <p className="text-center text-gray-500">Loading...</p>;

  return (
    <div className="w-[58vw] m-auto ">
      <p>Search results</p>
      <p>
        {data?.total_results} results for &#34;{value}&#34;
      </p>
      <div className="flex">
        <div className="flex flex-wrap mt-[32px] gap-[32px] w-[68%]">
          {filteredMovies?.results.map((movie: MovieType, index: number) => {
            return (
              <Link href={`dynamic-detail/${movie?.id}`} key={index}>
                <div>
                  <div className="">
                    <Image
                      width={165}
                      height={244}
                      src={
                        "https://image.tmdb.org/t/p/w500/" + movie?.poster_path
                      }
                      alt=""
                    />
                    <div className="p-[8px] w-[165px] h-[79px]  bg-secondary ">
                      <div className="flex  items-center">
                        <div className="flex gap-2 items-center">
                          <img src="/star.svg" alt="" className="h-[16px]" />
                          <p>{movie?.vote_average}</p>
                        </div>
                        <p>/10</p>
                      </div>
                      <p>{movie?.original_title}</p>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        <div>
          <ToggleGroup
            type="multiple"
            onValueChange={genreChangeHandler}
            value={genreSelected}
            className="flex flex-wrap gap-4 w-[400px] justify-start "
          >
            {genre?.genres.map((data: GenreType, index: number) => {
              return (
                <ToggleGroupItem
                  value={data.id.toString()}
                  key={index}
                  className={`rounded-md ${
                    genreSelected.includes(data.id.toString())
                      ? "bg-black text-white"
                      : ""
                  }`}
                >
                  <p className=" border border-solid border-[#27272A] rounded-full py-[2px] px-[10px] flex">
                    {data?.name}
                    <ChevronRight />
                  </p>
                </ToggleGroupItem>
              );
            })}
          </ToggleGroup>
        </div>
      </div>
      <div>
        <Paginat
          currentPage={Number(page)}
          totalPages={data?.total_pages || 0}
        />
      </div>
    </div>
  );
};

export default usePage;
