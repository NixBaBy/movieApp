import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { Responce } from "@/utils/response";

export default async function NowTrailer({ id }: { id: string }) {
  const trailer = `/movie/${id}/videos?language=en-US`;
  const data3 = await Responce(trailer);

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" className="py-[8px] px-[16px] w-[145px]">
            <Play />
            Watch Trailer
          </Button>
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
  );
}
