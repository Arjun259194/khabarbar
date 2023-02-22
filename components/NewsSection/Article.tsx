import { NullableArticle } from "@/utils/types";
import { FC } from "react";

interface props {
  article: NullableArticle;
}

const Article: FC<props> = ({
  article: { content, title, urlToImage, url },
}) => {
  urlToImage = !urlToImage
    ? "https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg"
    : urlToImage;

  return (
    <article className="relative mr-4 flex aspect-[2/1] h-96 snap-center ">
      <img
        className=" w-full rounded-md"
        src={urlToImage}
        alt="News article image"
      />
      <div className="absolute inset-0 flex w-full items-end rounded-md bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
        <h2 className="w-5/6 text-lg font-semibold capitalize">{title}</h2>
      </div>
    </article>
  );
};

export default Article;
