import Hero from "@/components/country/Hero";
import { fetchCountryNews } from "@/utils/dataFetchFunctions";
import { Countries, NullableArticle } from "@/utils/types";
import { GetServerSideProps, NextPage } from "next";
import Container from "UI/Container";

const country: NextPage<{
  articles: NullableArticle[];
  country: string;
}> = ({ articles, country }) => {
  return (
    <div className=" min-h-screen bg-white dark:bg-gray-800">
      <Container>
        <Hero country={country} />
      </Container>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ctx => {
  const country = ctx.query["country"];
  if (!country) {
    return {
      props: {
        articles: [],
      },
    };
  }
  const data = await fetchCountryNews(country as Countries);

  return {
    props: {
      country: country,
      articles: data,
    },
  };
};

export default country;
