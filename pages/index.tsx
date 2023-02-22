import HeadScroll from "@/components/HeadScroll/Index";
import Meta from "@/components/Meta";
import NewsSection from "@/components/NewsSection/Index";
import { fetchCountryNews, fetchTopNews } from "@/utils/dataFetchFunctions";
import { NullableArticle } from "@/utils/types";
import type { GetServerSideProps } from "next";
import Container from "UI/Container";

type props = {
  data: {
    USA: NullableArticle[];
    India: NullableArticle[];
    Top: NullableArticle[];
    AUS: NullableArticle[];
  };
};

export default function Home({ data: { USA, AUS, India, Top } }: props) {
  return (
    <div className=" min-h-screen bg-white dark:bg-zinc-800">
      <Meta title="Home page" />
      <Container>
        <HeadScroll articles={Top} />
        <NewsSection articles={India} title="Top news in India" />
        <NewsSection articles={USA} title="Top news in USA" />
        <NewsSection articles={AUS} title="Top news in Australia" />
      </Container>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const USANews = await fetchCountryNews("us");
  const IndiaNews = await fetchCountryNews("in");
  const AUSNews = await fetchCountryNews("au");
  const TopHeadlines = await fetchTopNews();
  return {
    props: {
      data: {
        USA: USANews,
        India: IndiaNews,
        AUS: AUSNews,
        Top: TopHeadlines,
      },
    },
  };
};
