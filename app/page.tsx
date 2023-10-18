import SearchForm from "@/components/search-form";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className='z-10 bg-white dark:bg-dm-db-element shadow-xl py-10 lg:py-7 px-5'>
        <div className='max-w-[1280px] mx-auto flex justify-between'>
          <h1 className='font-extrabold text-lg lg:text-2xl text-lm-vdb-text dark:text-white'>
            <Link href={"/"}>Where in the world?</Link>
          </h1>

          <button type='button' className='flex items-center gap-3'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 512 512'
              height={20}
            >
              <path
                d='M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216 88.68 0 166.73-51.57 200-128-26.39 11.49-57.38 16-88 16-119.29 0-216-96.71-216-216z'
                fill='none'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='32'
                className='stroke-lm-vdb-text dark:stroke-white'
              />
            </svg>
            <span className='font-semibold text-lm-vdb-text dark:text-white'>
              Dark Mode
            </span>
          </button>
        </div>
      </header>
      <main className='bg-lm-vlg-background dark:bg-dm-vdb-background'>
        <section className='pt-[30px] px-5'>
          <SearchForm />
        </section>
      </main>
    </>
  );
}
