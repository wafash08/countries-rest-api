"use client";
import { useState } from "react";
import CountryList from "./country-list";
import SearchForm from "./search-form";
import { Country } from "./types";

type CountryListWrapperProps = {
  COUNTRY_LIST: Country[];
};

export default function CountryListWrapper({
  COUNTRY_LIST,
}: CountryListWrapperProps) {
  const [region, setRegion] = useState<string>("");

  function handleClickRegion(name: string) {
    setRegion(name);
  }

  let filteredCountryList: Country[] = [];
  if (!region) {
    filteredCountryList = COUNTRY_LIST;
  } else {
    filteredCountryList = COUNTRY_LIST.filter(
      country => country.region === region
    );
  }

  return (
    <>
      <section className='pt-6 lg:pt-12 px-4'>
        <div className='max-w-[1280px] mx-auto'>
          <SearchForm region={region} selectRegion={handleClickRegion} />
        </div>
      </section>
      <section className='mt-8 lg:mt-12 px-14 sm:px-4 pb-16'>
        <div className='max-w-[1280px] mx-auto'>
          <CountryList COUNTRY_LIST={filteredCountryList} />
        </div>
      </section>
    </>
  );
}
