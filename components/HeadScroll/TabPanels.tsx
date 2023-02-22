import { NullableArticle } from "@/utils/types";
import { Tab } from "@headlessui/react";
import { FC, Fragment } from "react";
import Button from "UI/Button";
import ToolTip from "UI/ToolTip";

interface props {
  articles: NullableArticle[];
}

const TabPanels: FC<props> = ({ articles }) => {
  return (
    <>
      {articles.map((article, index) => {
        return (
          <Tab.Panel as={Fragment} key={index}>
            <div className="relative h-[50vh] w-full overflow-hidden rounded-lg border-2 border-zinc-200 dark:border-zinc-700">
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
                  <a target="_blank" href={article.url}>
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
    </>
  );
};

export default TabPanels;
