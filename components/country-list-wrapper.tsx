import { Suspense } from "react";
import CountryList from "./country-list";
import SearchForm from "./search-form";
import CountryListSkeleton from "./country-list-skeleton";

async function getAllCountries() {
  const allCountries = fetch("https://restcountries.com/v3.1/all");
  return allCountries;
}

export default async function CountryListWrapper() {
  const allCountries = await getAllCountries();
  return (
    <>
      <section className='pt-6 lg:pt-12 px-4'>
        <div className='max-w-[1280px] mx-auto'>
          <SearchForm />
        </div>
      </section>
      <section className='mt-8 lg:mt-12 px-14 sm:px-4 pb-16'>
        <div className='max-w-[1280px] mx-auto'>
          <Suspense fallback={<CountryListSkeleton />}>
            <CountryList />
          </Suspense>
        </div>
      </section>
    </>
  );
}
