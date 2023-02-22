import { NullableArticle } from "@/utils/types";
import useHorizontalScroll from "hooks/useHorizontalScroll";
import { FC } from "react";
import Article from "./Article";

interface props {
  articles: NullableArticle[];
}

function horizontalScroll(event: any) {
  const delta = Math.max(
    -1,
    Math.min(1, event.nativeEvent.wheelDelta || -event.nativeEvent.detail)
  );
  event.currentTarget.scrollLeft -= delta * 10;
  event.preventDefault();
}

const Articles: FC<props> = ({ articles }) => {
  const onScroll = useHorizontalScroll<HTMLDivElement>();
  return (
    <div
      ref={onScroll}
      className="scrollbar-hide flex snap-x overflow-x-scroll rounded-md border-2 border-zinc-300 p-6 dark:border-zinc-700">
      {articles.map((article, index) => (
        <Article key={index} article={article} />
      ))}
    </div>
  );
};

export default Articles;
