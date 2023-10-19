import Image from "next/image";
import Link from "next/link";

export default function CountryPage({ params }: { params: { slug: string } }) {
  return (
    <div className='px-7 py-10 lg:py-20'>
      <div className="className='max-w-[1280px] mx-auto flex flex-col gap-16 lg:gap-20">
        <Link
          href={"/"}
          className='bg-white dark:bg-dm-db-element shadow-md inline-flex items-center gap-2 lg:gap-3 px-6 lg:px-8 py-2 lg:py-[10px] rounded-sm self-start group'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            height='1em'
            viewBox='0 0 448 512'
            className='transition-transform group-hover:-translate-x-1'
          >
            <path
              d='M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z'
              className='fill-lm-vdb-text dark:fill-white'
            />
          </svg>
          <span className='text-sm lg:text-base text-lm-vdb-text dark:text-white'>
            Back
          </span>
        </Link>

        <article className='flex flex-col lg:flex-row lg:items-center gap-11 lg:gap-28'>
          <figure className='lg:flex-1 h-[230px] lg:h-full'>
            <Image
              src={"https://flagcdn.com/al.svg"}
              alt='Flag of Albania'
              width={320}
              height={230}
              className='h-full w-full'
            />
          </figure>

          <div className='lg:flex-1 flex flex-col gap-10 lg:gap-[76px]'>
            <section className='flex flex-col gap-6 lg:gap-7 text-lm-vdb-text dark:text-white'>
              <h2 className='font-extrabold text-[22px] lg:text-3xl'>
                Belgium
              </h2>
              <div className='flex flex-col lg:flex-row gap-11 lg:gap-0'>
                <ul className='flex-1 flex flex-col gap-3 lg:gap-[10px]'>
                  <li>
                    <p className='text-sm lg:text-base font-semibold'>
                      Native name: <span className='font-light'>lalal</span>
                    </p>
                  </li>
                  <li>
                    <p className='text-sm lg:text-base font-semibold'>
                      Population: <span className='font-light'>123</span>
                    </p>
                  </li>
                  <li>
                    <p className='text-sm lg:text-base font-semibold'>
                      Region: <span className='font-light'>mal</span>
                    </p>
                  </li>
                  <li>
                    <p className='text-sm lg:text-base font-semibold'>
                      Sub Region: <span className='font-light'>mal</span>
                    </p>
                  </li>
                  <li>
                    <p className='text-sm lg:text-base font-semibold'>
                      Capital: <span className='font-light'>mal</span>
                    </p>
                  </li>
                </ul>
                <ul className='flex-1 flex flex-col gap-3 lg:gap-[10px]'>
                  <li>
                    <p className='text-sm lg:text-base font-semibold'>
                      Top Level Domain: <span className='font-light'>mal</span>
                    </p>
                  </li>
                  <li>
                    <p className='text-sm lg:text-base font-semibold'>
                      Currencies: <span className='font-light'>mal</span>
                    </p>
                  </li>
                  <li>
                    <p className='text-sm lg:text-base font-semibold'>
                      Languages: <span className='font-light'>mal</span>
                    </p>
                  </li>
                </ul>
              </div>
            </section>

            <section className='flex flex-col lg:flex-row gap-4 lg:gap-3 text-lm-vdb-text dark:text-white'>
              <h3 className='font-semibold shrink-0'>Border Countries:</h3>
              <ul className='flex gap-[10px] flex-wrap'>
                <li>
                  <Link
                    href={"/"}
                    className='flex items-center justify-center h-7 w-24 bg-white dark:bg-dm-db-element shadow-md text-xs lg:text-sm font-light rounded-sm'
                  >
                    France
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/"}
                    className='flex items-center justify-center h-7 w-24 bg-white dark:bg-dm-db-element shadow-md text-xs lg:text-sm font-light rounded-sm'
                  >
                    France
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/"}
                    className='flex items-center justify-center h-7 w-24 bg-white dark:bg-dm-db-element shadow-md text-xs lg:text-sm font-light rounded-sm'
                  >
                    France
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/"}
                    className='flex items-center justify-center h-7 w-24 bg-white dark:bg-dm-db-element shadow-md text-xs lg:text-sm font-light rounded-sm'
                  >
                    France
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/"}
                    className='flex items-center justify-center h-7 w-24 bg-white dark:bg-dm-db-element shadow-md text-xs lg:text-sm font-light rounded-sm'
                  >
                    France
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/"}
                    className='flex items-center justify-center h-7 w-24 bg-white dark:bg-dm-db-element shadow-md text-xs lg:text-sm font-light rounded-sm'
                  >
                    France
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/"}
                    className='flex items-center justify-center h-7 w-24 bg-white dark:bg-dm-db-element shadow-md text-xs lg:text-sm font-light rounded-sm'
                  >
                    France
                  </Link>
                </li>
              </ul>
            </section>
          </div>
        </article>
      </div>
    </div>
  );
}
