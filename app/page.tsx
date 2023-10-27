import { Suspense } from "react";
import CountryListWrapper from "@/components/country-list-wrapper";
import CountryListSkeleton from "@/components/country-list-skeleton";
import { Country } from "@/components/types";

async function getAllCountries(): Promise<Country[]> {
  const allCountries = await fetch("https://restcountries.com/v3.1/all");
  return allCountries.json();
}

function sortAllCountries(allCountries: Country[]) {
  return allCountries.sort((a, b) => {
    const countryA = a.name.common;
    const countryB = b.name.common;
    if (countryA < countryB) {
      return -1;
    } else if (countryA > countryB) {
      return 1;
    } else {
      return 0;
    }
  });
}

export default async function Home() {
  const allCountries = await getAllCountries();
  const sortedAllCountries = sortAllCountries(allCountries);
  return (
    <Suspense fallback={<CountryListSkeleton />}>
      <CountryListWrapper COUNTRY_LIST={sortedAllCountries} />
    </Suspense>
  );
}
