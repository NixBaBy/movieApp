import { CastTypes, CrewTypes } from "@/utils/types";
import React from "react";
import { Responce } from "@/utils/response";

export default async function CrewCaw({
  movieDetail,
}: {
  movieDetail: string;
}) {
  const actor = `/movie/${movieDetail}/credits?language=en-US`;
  const data1 = await Responce(actor);
  return (
    <div>
      <div className="flex flex-col gap-[20px]">
        <div className="flex gap-[53px] border-b-[1px] border-solid border-gray-200 h-[40px]">
          <p>Director</p>
          <div className="flex gap-2">
            {data1.crew
              .filter((crew: CrewTypes) => crew.department == "Directing")
              .slice(0, 3)
              .map((crew: CrewTypes, id: number) => {
                return <p key={id}>{crew?.name} ,</p>;
              })}
          </div>
        </div>
        <div className="flex gap-[53px] border-b-[1px] border-solid border-gray-200 h-[40px]">
          <p>Writers</p>
          <div className="flex gap-2">
            {data1.crew
              .filter(
                (crew: CrewTypes) => crew.known_for_department == "Writing"
              )
              .slice(0, 3)
              .map((crew: CrewTypes, id: number) => {
                return <p key={id}>{crew?.name} ,</p>;
              })}
          </div>
        </div>
        <div className="flex gap-[53px] border-b-[1px] border-solid border-gray-200 h-[40px]">
          <p>Stars</p>
          <div className="flex gap-2">
            {data1.cast
              .filter(
                (cast: CastTypes) => cast.known_for_department == "Acting"
              )
              .slice(0, 4)
              .map((crew: CrewTypes, id: number) => {
                return <p key={id}>{crew?.name} ,</p>;
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
