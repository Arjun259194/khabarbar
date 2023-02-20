import { NullableArticle } from "@/utils/types";
import { Tab } from "@headlessui/react";
import { FC, Fragment } from "react";
import Button from "UI/Button";
import ToolTip from "UI/ToolTip";

interface props {
  articles: NullableArticle[];
}

const HeadScroll: FC<props> = ({ articles }) => {
  return (
    <section className="rounded p-5">
      <h1 className="flex cursor-default items-center pb-4 text-4xl font-semibold capitalize ">
        <span className="text-5xl font-bold text-gray-400 hover:no-underline">#</span>
        <span className="decoration-slate-400 decoration-dotted underline-offset-4 hover:underline">
          Header Tops news
        </span>
      </h1>
      <Tab.Group defaultIndex={0} as={Fragment}>
        <Tab.Panels as={Fragment}>
          {articles.map((article, index) => {
            return (
              <Tab.Panel as={Fragment} key={index}>
                <div className="relative h-[50vh] w-full overflow-hidden rounded-lg border-2 border-gray-200 dark:border-gray-700">
                  <img
                    className="w-full"
                    src={
                      article.urlToImage !== null
                        ? article.urlToImage
                        : "https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg"
                    }
                    alt="image not found"
                  />
                  <div className="absolute bottom-0 z-20 flex  h-full w-full items-end justify-between bg-gradient-to-b from-transparent to-black/80 p-4 ">
                    <h2 className="w-3/4 text-2xl text-white">{article.title}</h2>
                    {article?.url ? (
                      <a href={article.url}>
                        <ToolTip tooltipText="Read more" direction="UpLeft">
                          <Button className="bg-blue-500 text-white">More</Button>
                        </ToolTip>
                      </a>
                    ) : null}
                  </div>
                </div>
              </Tab.Panel>
            );
          })}
        </Tab.Panels>
        <Tab.List as={Fragment}>
          <div className="my-1 flex w-full justify-between rounded-lg border-2 border-gray-200 bg-gray-100 px-8 py-3 dark:border-gray-700  dark:bg-gray-900">
            {articles.map((article, index) => {
              return (
                <ToolTip
                  tooltipText={
                    article?.source?.name ? article.source.name : "title not available"
                  }
                  direction="Down">
                  <Tab as={Fragment} key={index}>
                    {({ selected }) => (
                      <button
                        className={`
                      aspect-square h-8 w-8 rounded-lg shadow-md
                      ${
                        selected
                          ? "bg-blue-500 font-semibold text-white shadow-lg"
                          : "bg-gray-200 dark:bg-gray-700"
                      }
                    `}>
                        {index + 1}
                      </button>
                    )}
                  </Tab>
                </ToolTip>
              );
            })}
          </div>
        </Tab.List>
      </Tab.Group>
    </section>
  );
};

export default HeadScroll;
