import type { MovieData } from "@/types";
import Link from "next/link";
import style from "./movie-item.module.css";
export default function MovieItem({
  id,
  title,
  subTitle,
  posterImgUrl,
}: MovieData) {
  return (
    <Link href={`/movie/${id}`} className={style.container}>
      <img src={posterImgUrl} alt={title} />
      <div className={style.title}>
        <p className={style.titleText}>{title}</p>
        <p className={style.subTitle}>{subTitle}</p>
      </div>
    </Link>
  );
}
