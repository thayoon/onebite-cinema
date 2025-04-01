import { useRouter } from "next/router";
import movies from "@/mock/dummy.json";
import style from "./[id].module.css";
import { MovieData } from "@/types";

export default function Page({}) {
  const router = useRouter();
  const movieId = router.query.id as string;
  const {
    // id,
    title,
    releaseDate,
    company,
    genres,
    subTitle,
    description,
    runtime,
    posterImgUrl,
  }: MovieData = movies.find((movie) => movie.id === parseInt(movieId))!;

  return (
    <div className={style.container}>
      <div
        className={style.cover_img_container}
        style={{ backgroundImage: `url('${posterImgUrl}')` }}
      >
        <img src={posterImgUrl} alt={title} />
      </div>
      <div className={style.info}>
        <h1>{title}</h1>

        <div>
          {releaseDate} | {genres.join(", ")} | {runtime}분
        </div>

        <div>{company}</div>
      </div>
      <div className={style.description}>
        <h3>{subTitle}</h3>
        <div>{description}</div>
      </div>
    </div>
  );
}
