import NowPlaying from "./_components/NowPlay/NowPlaying";
import Category from "./_components/Category";

export default function Home() {
  return (
    <div>
      <NowPlaying />
      <Category
        name="Upcoming"
        link="/movie/upcoming?language=en-US&page=1"
        toprated="upcoming"
      />
      <Category
        name="Popular"
        link="/movie/popular?language=en-US&page=1"
        toprated="popular"
      />
      <Category
        name="Top Rated"
        link="/movie/top_rated?language=en-US&page=1"
        toprated="top_rated"
      />
    </div>
  );
}
