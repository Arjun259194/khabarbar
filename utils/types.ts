export type Countries =
  | "ae"
  | "ar"
  | "at"
  | "au"
  | "be"
  | "bg"
  | "br"
  | "ca"
  | "ch"
  | "cn"
  | "co"
  | "cu"
  | "cz"
  | "de"
  | "eg"
  | "fr"
  | "gb"
  | "gr"
  | "hk"
  | "hu"
  | "id"
  | "ie"
  | "il"
  | "in"
  | "it"
  | "jp"
  | "kr"
  | "lt"
  | "lv"
  | "ma"
  | "mx"
  | "my"
  | "ng"
  | "nl"
  | "no"
  | "nz"
  | "ph"
  | "pl"
  | "pt"
  | "ro"
  | "rs"
  | "ru"
  | "sa"
  | "se"
  | "sg"
  | "si"
  | "sk"
  | "us";

export type Nullable<T> = { [K in keyof T]: T[K] | null };

export type Article = {
  source: {
    id: string | null;
    name: string | null;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
};

export type NullableArticle = Nullable<Article>;
