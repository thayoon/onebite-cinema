/* eslint-disable @next/next/no-img-element */
import style from "./[id].module.css";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import fetchOneMovie from "@/lib/fetch-one-movie";
import { useRouter } from "next/router";
import Head from "next/head";

export const getStaticPaths = () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const id = context.params!.id;

  const movie = await fetchOneMovie(Number(id));

  if (!movie) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      movie,
    },
  };
};

export default function Page({
  movie,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();
  if (router.isFallback) {
    return (
      <>
        <Head>
          <title>한 입 시네마</title>
          <meta property="og:image" content="./thumbnail.png" />
          <meta property="og:title" content="한 입 시네마" />
          <meta
            property="og:description"
            content="한 입 시네마에 등록된 영화들을 만나보세요."
          />
        </Head>
        <div>로딩중...</div>
      </>
    );
  }

  if (!movie) return "문제가 발생했습니다. 다시 시도하세요.";

  const {
    title,
    releaseDate,
    company,
    genres,
    subTitle,
    description,
    runtime,
    posterImgUrl,
  } = movie;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:image" content={posterImgUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Head>
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
    </>
  );
}
