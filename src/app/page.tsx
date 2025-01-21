import Popular from "@/app/_components/Popular";
import Upcoming from "./_components/Upcoming";
import TopRated from "./_components/TopRated";
import { Header } from "./_components/Header";
import NowPlaying from "./_components/NowPlaying";
import { Footer } from "./_components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <NowPlaying />
      <Upcoming />
      <Popular />
      <TopRated />
      <Footer />
    </div>
  );
}
