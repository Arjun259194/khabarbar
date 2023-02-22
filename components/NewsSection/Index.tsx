import { NullableArticle } from "@/utils/types";
import { FC } from "react";
import Articles from "./Articles";

interface props {
  title: string;
  articles: NullableArticle[];
  id?: string;
}

const Index: FC<props> = ({ articles, title, id }) => {
  return (
    <section id={id} className="my-4 p-5">
      <h1 className="flex cursor-default items-center pb-4 text-4xl font-semibold capitalize ">
        <span className="text-5xl font-bold text-zinc-400 hover:no-underline">#</span>
        <span className="decoration-zinc-400 decoration-dotted underline-offset-4 hover:underline">
          {title}
        </span>
      </h1>
      <Articles articles={articles} />
    </section>
  );
};

export default Index;
