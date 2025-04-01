import SearchableLayout from "@/components/searchable-layout";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import movies from "@/mock/dummy.json";
import MovieItem from "@/components/movie-item";
import style from "./index.module.css";

export default function Page() {
  const router = useRouter();

  const { q } = router.query;
  return (
    <div className={style.container}>
      {movies
        .filter((movie) => movie.title.includes(q as string))
        .map((movie) => (
          <MovieItem key={movie.id} {...movie} />
        ))}
    </div>
  );
}

Page.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
