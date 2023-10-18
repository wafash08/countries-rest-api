"use client";

export default function SearchForm() {
  return (
    <form>
      <div className='flex flex-col lg:flex-row lg:justify-between lg:items-center gap-[50px]'>
        <div className='bg-white dark:bg-dm-db-element relative py-4 px-8 flex items-center gap-6 shadow-md rounded-md'>
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

        <div className=''>
          <select
            name='regions'
            id='regions'
            className='border border-red-500 appearance-none bg-white px-6 text-[15px] text-lm-vdb-text w-full'
          >
            <option value='all'>Filter by Region</option>
            <option value='africa'>africa</option>
            <option value='america'>america</option>
            <option value='asia'>asia</option>
            <option value='europe'>europe</option>
            <option value='oceania'>oceania</option>
          </select>
        </div>
      </div>
    </form>
  );
}
