import React from "react";
import { Responce } from "@/utils/response";

export default async function Name({ movieDetail }: { movieDetail: string }) {
  const detail = `/movie/${movieDetail}?language=en-US`;
  const data = await Responce(detail);
  return (
    <div>
      <div className="flex justify-between">
        <div>
          <p className="text-[36px] tracking-[-0.9px]">{data.original_title}</p>
          <div className="flex gap-2">
            <p>{data.release_date} · </p>
            <p>{data.adult ? "PG" : "R"} · </p>
            <p>
              {Math.floor(data.runtime / 60)}h {Math.floor(data.runtime % 60)}m
            </p>
          </div>
        </div>
        <div className="flex">
          <p>Rating</p>
          <div className="flex flex-col gap-[4px]">
            <img src="./star.svg" alt="" className="h-[16px]" />
            <div>
              <p>{data?.vote_average.toFixed(1)}</p>
              <p>/10</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
