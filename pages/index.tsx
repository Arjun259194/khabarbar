import HeadScroll from "@/components/HeadScroll";
import Meta from "@/components/Meta";
import { fetchCountryNews, fetchTopNews } from "@/utils/dataFetchFunctions";
import { NullableArticle } from "@/utils/types";
import type { GetServerSideProps } from "next";

type props = {
  data: {
    USA: NullableArticle[];
    India: NullableArticle[];
    Top: NullableArticle[];
  };
};

export default function Home({ data: { USA, India, Top } }: props) {
  return (
    <div className=" bg-white dark:bg-gray-800">
      <div className="mx-auto w-5/6 py-5">
        <HeadScroll articles={Top} />
      </div>
      <Meta title="Home page" />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const USANews = await fetchCountryNews("us");
  const IndiaNews = await fetchCountryNews("in");
  const TopHeadlines = await fetchTopNews();
  return {
    props: {
      data: {
        USA: USANews,
        India: IndiaNews,
        Top: TopHeadlines,
      },
    },
  };
};
