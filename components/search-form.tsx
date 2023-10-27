"use client";
import { useState } from "react";
import FilterRegionBox from "./filter-region-box";
import clsx from "clsx";

type SearchFormProps = {
  region: string;
  selectRegion: (name: string) => void;
};

export default function SearchForm({ region, selectRegion }: SearchFormProps) {
  const [search, setSearch] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.currentTarget.value);
    if (search.trim().length > 0) {
      setError(false);
    }
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (search.trim().length === 0) {
      setError(true);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='flex flex-col justify-start lg:flex-row lg:justify-between lg:items-center gap-[40px]'>
        <div
          className='w-full sm:w-[480px] bg-white dark:bg-dm-db-element relative h-12 lg:h-14 px-8 flex items-center gap-6 shadow-md rounded-md'
          role='search'
        >
          <label htmlFor='search' className='sr-only'>
            Search for a country
          </label>
          <input
            aria-describedby='error'
            type='text'
            name='search'
            id='search'
            placeholder='Search for a country...'
            onChange={handleSearch}
            value={search}
            className='order-2 peer h-full w-full focus:outline-none focus:placeholder:text-lm-vdb-text text-[15px] placeholder:text-[15px] bg-white dark:bg-dm-db-element text-lm-vdb-text dark:text-white dark:placeholder:text-lm-dg-input dark:focus:placeholder:text-white'
          />
          <button type='submit' className='order-1'>
            <span className='sr-only'>Search</span>
            <svg
              width={25}
              height={25}
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 512 512'
            >
              <path
                d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z'
                fill='none'
                stroke='currentColor'
                strokeMiterlimit='10'
                strokeWidth='32'
                className='stroke-[#858585] dark:stroke-white'
              />
              <path
                fill='none'
                stroke='currentColor'
                strokeLinecap='round'
                strokeMiterlimit='10'
                strokeWidth='32'
                d='M338.29 338.29L448 448'
                className='stroke-[#858585] dark:stroke-white'
              />
            </svg>
          </button>
          <p
            id='error'
            role='alert'
            className={clsx(
              "absolute text-sm z-10 top-full left-0 flex items-center gap-2 w-full max-w-xs italic bg-red-500 text-white mt-1 rounded-md shadow-md p-2",
              "transition-expanded duration-200 origin-top",
              error
                ? "scale-y-100 visible opacity-100"
                : "scale-y-0 invisible opacity-30"
            )}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 512 512'
              width={20}
            >
              <path
                d='M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z'
                fill='none'
                stroke='currentColor'
                strokeMiterlimit='10'
                strokeWidth='32'
              />
              <path
                d='M250.26 166.05L256 288l5.73-121.95a5.74 5.74 0 00-5.79-6h0a5.74 5.74 0 00-5.68 6z'
                fill='none'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='32'
              />
              <path
                d='M256 367.91a20 20 0 1120-20 20 20 0 01-20 20z'
                fill='currentColor'
              />
            </svg>
            You need to enter a search term
          </p>
        </div>

        <FilterRegionBox handleClickRegion={selectRegion} region={region} />
      </div>
    </form>
  );
}
