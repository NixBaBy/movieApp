"use client";
import React, { useEffect, useState } from "react";
import { Responce } from "@/utils/response";
import { MovieType } from "@/utils/types";
import Link from "next/link";
import { Paginat } from "../Paginat";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

export default function page(props: {
  params: Promise<{ movietype: string }>;
}) {
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page") || "1");

  const [movie, setMovie] = useState<any>(null);
  const [movieType, setMovieType] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const { movietype } = await props.params;
      setMovieType(movietype);
      const detail = `/movie/${movietype}?language=en-US&page=${page}`;
      const data = await Responce(detail);
      setMovie(data);
    };
    fetchData();
  }, [page]);

  return (
    <div className="w-[58vw] m-[auto] mt-[52px]">
      <p className="text-[30px] font-bold tracking-[-0.75px]">{movieType}</p>
      <div className="flex flex-wrap mt-[32px] gap-[32px] ">
        {movie?.results.map((movie: MovieType, index: number) => {
          return (
            <Link href={`dynamic-detail/${movie?.id}`} key={index}>
              <div>
                <div className="">
                  <Image
                    width={1000}
                    height={1000}
                    src={
                      "https://image.tmdb.org/t/p/w500/" + movie?.poster_path
                    }
                    alt=""
                    className="w-[229px] h-[340px] hover:"
                  />
                  <div className="p-[8px] w-[229px] h-[79px]  bg-secondary  rounded-sm">
                    <div className="flex gap-2 items-center">
                      <img src="./Vector.svg" alt="" className="h-[16px]" />
                      <p>{movie?.vote_average}</p>
                      <p>10</p>
                    </div>
                    <p>{movie?.original_title}</p>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="mt-[32px]">
        <Paginat currentPage={Number(page)} totalPages={movie?.total_pages} />
      </div>
    </div>
  );
}
