"use client";
import { Paginat } from "@/app/seemore/Paginat";

import { Responce } from "@/utils/response";
import { GenreFilterType, Genres, GenreType, MovieType } from "@/utils/types";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export default function Page(props: { params: Promise<{ genreid: string }> }) {
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page") || "1");
  const [movie, setMovie] = useState<GenreFilterType | null>(null);
  const [movieType, setMovieType] = useState("");
  const [genred, setGenred] = useState<Genres | null>(null);
  const [genreSelected, setGenreSelected] = useState<string[]>([]);
  const [genreName, setGenreName] = useState<GenreType[] | undefined>();

  useEffect(() => {
    const fetchData = async () => {
      const { genreid } = await props.params;
      setGenreSelected([genreid]);
      setMovieType(genreid);
      let detail = `/discover/movie?language=en&page=${page}&with_genres=${genreid}`;
      const genre = "/genre/movie/list?language=en";
      const data = await Responce(detail);
      setMovie(data);
      const data1 = await Responce(genre);
      setGenred(data1);
    };
    fetchData();
  }, [page]);

  const genreChangeHandler = (selectedgenre: string[]) => {
    const selectedGenres = genred?.genres.filter((genre: GenreType) => {
      return selectedgenre.includes(genre.id.toString());
    });
    setGenreSelected(selectedgenre);
    setGenreName(selectedGenres);
  };

  useEffect(() => {
    const getMoviesData = async () => {
      if (genreSelected.length > 0) {
        const selectedGenreId = genreSelected.join(",");
        const detail = `/discover/movie?language=en&with_genres=${selectedGenreId}&page=${page}`;
        const data = await Responce(detail);
        setMovie(data);
      }
    };
    getMoviesData();
  }, [genreSelected]);

  if (!movie) {
    return null;
  }
  return (
    <div className="w-[58%] m-auto mt-[52px]">
      <p className="mb-[32px]  text-[30px] font-bold tracking-[-0.75px]">
        Search filter
      </p>
      <div className="flex items-start gap-9">
        <div className="flex flex-col gap-5 w-[20vw]">
          <div className="">
            <p className="text-[24px] font-bold tracking-[-0.6px]">Genres</p>
            <p>See lists of movies by genre</p>
          </div>

          <ToggleGroup
            type="multiple"
            onValueChange={genreChangeHandler}
            className="flex flex-wrap gap-4 w-[400px] justify-start"
          >
            {genred?.genres.map((data: GenreType, index: number) => {
              return (
                <ToggleGroupItem value={data.id.toString()} key={index}>
                  <p className=" border border-solid border-[#27272A] rounded-full py-[2px] px-[10px] flex">
                    {data?.name}
                    <ChevronRight />
                  </p>
                </ToggleGroupItem>
              );
            })}
          </ToggleGroup>
        </div>
        <div className="w-[1px] bg-[#27272A] h-[185vh]"></div>
        <div>
          <div className="text-[20px] font-bold tracking-[-0.5px] flex gap-1 ">
            {movie?.total_results} titles in{" "}
            <div className="flex gap-2">
              {" "}
              {genreName?.map((genre: GenreType) => (
                <div key={genre.id}>{genre.name},</div>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap mt-[32px] gap-[32px] w-[35vw]">
            {movie?.results.map((movie: MovieType, index: number) => {
              return (
                <Link href={`/dynamic-detail/${movie?.id}`} key={index}>
                  <div className="rounded-md overflow-hidden">
                    <Image
                      src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
                      width={165}
                      height={244}
                      alt=""
                    />

                    <div className="p-[8px] w-[165px] h-[79px] bg-secondary rounded-sm">
                      <div className="flex gap-2 items-center">
                        <img src="./Vector.svg" alt="" className="h-[16px]" />
                        <div>{movie?.vote_average}</div>
                        <p>10</p>
                      </div>
                      <p>{movie?.original_title}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
          <div>
            <Paginat
              currentPage={Number(page)}
              totalPages={movie?.total_pages}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
