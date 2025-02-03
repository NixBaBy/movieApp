import { Suspense } from "react";
import UsePages from "./_components/SearchPage";

const usePage = () => {
  return (
    <Suspense>
      <UsePages />
    </Suspense>
  );
};

export default usePage;
