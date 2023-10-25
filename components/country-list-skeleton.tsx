function CountryItemSkeleton() {
  return (
    <li className='animate-pulse duration-200 shadow-md rounded-md overflow-hidden flex flex-col'>
      <div className='flex items-center justify-center h-40 bg-gray-300 dark:bg-gray-700'>
        <svg
          aria-hidden='true'
          xmlns='http://www.w3.org/2000/svg'
          fill='currentColor'
          viewBox='0 0 20 18'
          className='w-10 h-10 text-gray-200 dark:text-gray-600'
        >
          <path d='M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z' />
        </svg>
      </div>
      <div className='px-6 pt-6 pb-11 lg:px-6 lg:pt-6 flex flex-col gap-5'>
        <div className='w-20 h-5 bg-gray-200 dark:bg-gray-700' />
        <div className='flex flex-col gap-2'>
          <div className='w-36 h-4 bg-gray-200 dark:bg-gray-700' />
          <div className='w-24 h-4 bg-gray-200 dark:bg-gray-700' />
          <div className='w-20 h-4 bg-gray-200 dark:bg-gray-700' />
        </div>
      </div>
      <span className='sr-only'>Loading...</span>
    </li>
  );
}
export default function CountryListSkeleton() {
  return (
    <ul className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 lg:gap-[72px]'>
      <CountryItemSkeleton />
      <CountryItemSkeleton />
      <CountryItemSkeleton />
      <CountryItemSkeleton />
      <CountryItemSkeleton />
      <CountryItemSkeleton />
      <CountryItemSkeleton />
      <CountryItemSkeleton />
    </ul>
  );
}
