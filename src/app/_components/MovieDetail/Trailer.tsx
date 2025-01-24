import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Responce } from "@/utils/response";
import { Play } from "lucide-react";
import Image from "next/image";

export default async function Trailer({
  movieDetail,
}: {
  movieDetail: string;
}) {
  const trailer = `/movie/${movieDetail}/videos?language=en-US`;
  const data3 = await Responce(trailer);

  const detail = `/movie/${movieDetail}?language=en-US`;
  const data = await Responce(detail);

  return (
    <div className="flex gap-6 mt-[24px] ">
      <Image
        src={`https://image.tmdb.org/t/p/original/${data?.poster_path}`}
        width={290}
        height={428}
        alt=""
        className="rounded-sm"
      />
      <div className="relative">
        <Image
          src={`https://image.tmdb.org/t/p/original/${data?.backdrop_path}`}
          width={760}
          height={428}
          alt=""
          className="rounded-sm size-full object-cover"
        />
        <Dialog>
          <DialogTrigger className="flex gap-3 items-center absolute bottom-[24px] left-[24px]">
            <div className="w-[40px] h-[40px] flex justify-center items-center rounded-full bg-white">
              <Play color="#000000" />
            </div>
            <p className=" text-white">Play trailer</p>
            <p className=" text-white">1:30</p>
          </DialogTrigger>
          <DialogContent>
            <DialogTitle></DialogTitle>
            <iframe
              width="997"
              height="561"
              src={`https://www.youtube.com/embed/${data3.results[0].key}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
