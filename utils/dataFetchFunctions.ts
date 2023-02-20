import { Countries, NullableArticle } from "./types";

type returnType = boolean | NullableArticle[];

async function fetchData(url: string): Promise<any> {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      return false;
    }
    const data = await res.json();
    return data["articles"];
  } catch (err: any) {
    console.error(err);
    return false;
  }
}

export async function fetchCountryNews(country: Countries): Promise<returnType> {
  const url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${process.env.API_KEY}`;
  const data = await fetchData(url);
  return data;
}

export async function fetchTopNews(): Promise<returnType> {
  const url = `https://newsapi.org/v2/top-headlines?category=general&language=en&apiKey=${process.env.API_KEY}`;
  const data = await fetchData(url);
  return data;
}
