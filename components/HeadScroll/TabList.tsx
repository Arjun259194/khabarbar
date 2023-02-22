import { NullableArticle } from "@/utils/types";
import { Tab } from "@headlessui/react";
import { FC, Fragment } from "react";
import ToolTip from "UI/ToolTip";

interface props {
  articles: NullableArticle[];
}

const TabList: FC<props> = ({ articles }) => {
  return (
    <div className="my-1 flex w-full justify-between rounded-lg border-2 border-zinc-200 bg-zinc-100 px-8 py-3 dark:border-zinc-700  dark:bg-zinc-900">
      {articles.map((article, index) => {
        return (
          <ToolTip
            key={index}
            tooltipText={
              article?.source?.name ? article.source.name : "title not available"
            }
            direction="Down">
            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  className={`
                      aspect-square h-8 w-8 rounded-lg shadow-md
                      ${
                        selected
                          ? "bg-blue-500 font-semibold text-white shadow-lg"
                          : "bg-zinc-200 dark:bg-zinc-700"
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
  );
};

export default TabList;
