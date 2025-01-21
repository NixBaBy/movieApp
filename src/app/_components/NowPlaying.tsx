import { TOKEN } from "@/utils/constant";
import { MovieType } from "@/utils/types";

export default async function NowPlaying() {
  // fetch movie medeelel setMovie

  const response = await fetch(
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();
  const imgUrl =
    "https://image.tmdb.org/t/p/original" + data.results[1]?.poster_path;
  return (
    <div
      className="w-[100vw] h-[600px] m-[auto] mt-[24px]"
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    ></div>
  );
}
