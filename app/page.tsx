import CountryList from "@/components/country-list";
import SearchForm from "@/components/search-form";

export default function Home() {
  return (
    <>
      <section className='pt-[30px] lg:pt-12 px-5 lg:px-0'>
        <div className='max-w-[1280px] mx-auto'>
          <SearchForm />
        </div>
      </section>
      <section className='mt-10 lg:mt-12 px-12 lg:px-0'>
        <div className='max-w-[1280px] mx-auto'>
          <CountryList />
        </div>
      </section>
    </>
  );
}
