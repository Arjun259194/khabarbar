import Head from "next/head";
import { FC } from "react";

interface props {
  title?: string;
}

const Meta: FC<props> = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "KhabarBar.in",
};

export default Meta;
