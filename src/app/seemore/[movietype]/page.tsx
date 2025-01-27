import React from "react";
import { Responce } from "@/utils/response";
import { MovieType } from "@/utils/types";
import Link from "next/link";
import { Paginat } from "../Paginat";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default async function page(props: {
  params: Promise<{ movietype: string }>;
}) {
  const { movietype } = await props.params;
  const detail = `/movie/${movietype}?language=en-US&page=1`;
  const data = await Responce(detail);

  return (
    <div className="w-[58vw] m-[auto] mt-[52px]">
      <p className="text-[30px] font-bold tracking-[-0.75px]">{movietype}</p>
      <div className="flex flex-wrap mt-[32px] gap-[32px] ">
        {data.results.slice(0, 10).map((movie: MovieType, index: number) => {
          return (
            <Link href={`dynamic-detail/${movie?.id}`} key={index}>
              <div key={index}>
                <div className="">
                  <img
                    src={
                      "https://image.tmdb.org/t/p/w500/" + movie?.poster_path
                    }
                    alt=""
                    className="w-[229px] h-[340px] hover:"
                  />
                  <div className="p-[8px] w-[229px] h-[79px]  bg-secondary  rounded-sm">
                    <div className="flex gap-2 items-center">
                      <img src="./Vector.png" alt="" className="h-[16px]" />
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
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                href={`/movie/${movietype}?language=en-US&page=1`}
              >
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
