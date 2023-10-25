"use client";
import { useState } from "react";
import FilterRegionBox from "./filter-region-box";

export default function SearchForm() {
  const [region, setRegion] = useState<string>("");

  function handleClickRegion(name: string) {
    setRegion(name);
  }

  return (
    <form>
      <div className='flex flex-col justify-start lg:flex-row lg:justify-between lg:items-center gap-[40px]'>
        <div className='w-full sm:w-[480px] bg-white dark:bg-dm-db-element relative py-4 px-8 flex items-center gap-6 shadow-md rounded-md'>
          <input
            type='text'
            name='searchCountry'
            placeholder='Search for a country...'
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
        </div>

        <FilterRegionBox
          handleClickRegion={handleClickRegion}
          region={region}
        />
      </div>
    </form>
  );
}
