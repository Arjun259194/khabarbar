import countryNames from "@/utils/countryMap";
import { FC } from "react";

interface props {
  country: string;
}

const Hero: FC<props> = ({ country }) => {
  return (
    <section>
      <h2>Top Headlines of {countryNames.get(country)}</h2>
    </section>
  );
};

export default Hero;
