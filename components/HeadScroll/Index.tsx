import { NullableArticle } from "@/utils/types";
import { Tab } from "@headlessui/react";
import { FC, Fragment } from "react";
import TabList from "./TabList";
import TabPanels from "./TabPanels";

interface props {
  articles: NullableArticle[];
}

const HeadScroll: FC<props> = ({ articles }) => {
  return (
    <section id="top_headlines" className="rounded p-5">
      <h1 className="flex cursor-default items-center pb-4 text-4xl font-semibold capitalize ">
        <span className="text-5xl font-bold text-gray-400 hover:no-underline">#</span>
        <span className=" decoration-slate-400 decoration-dotted underline-offset-4 hover:underline">
          Top Global Headlines
        </span>
      </h1>
      <Tab.Group defaultIndex={0} as={Fragment}>
        <Tab.Panels as={Fragment}>
          <TabPanels articles={articles} />
        </Tab.Panels>
        <Tab.List as={Fragment}>
          <TabList articles={articles} />
        </Tab.List>
      </Tab.Group>
    </section>
  );
};

export default HeadScroll;
