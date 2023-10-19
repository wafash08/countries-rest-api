import CountryList from "@/components/country-list";
import SearchForm from "@/components/search-form";

export default function Home() {
  return (
    <>
      <section className='pt-6 lg:pt-12 px-4'>
        <div className='max-w-[1280px] mx-auto'>
          <SearchForm />
        </div>
      </section>
      <section className='mt-8 lg:mt-12 px-14 sm:px-4 pb-16'>
        <div className='max-w-[1280px] mx-auto'>
          <CountryList />
        </div>
      </section>
    </>
  );
}
