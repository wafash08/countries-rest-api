import Image from "next/image";
import Link from "next/link";

type Country = {
  name: string;
  population: number;
  region: string;
  capital: string;
  flags: {
    svg: string;
    png: string;
  };
};
const COUNTRY_LIST: Country[] = [
  {
    name: "Afghanistan",
    population: 40218234,
    region: "Asia",
    capital: "Kabul",
    flags: {
      svg: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg",
      png: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_the_Taliban.svg/320px-Flag_of_the_Taliban.svg.png",
    },
  },
  {
    name: "Åland Islands",
    population: 28875,
    region: "Europe",
    capital: "Mariehamn",
    flags: {
      svg: "https://flagcdn.com/ax.svg",
      png: "https://flagcdn.com/w320/ax.png",
    },
  },
  {
    name: "Albania",
    population: 2837743,
    region: "Europe",
    capital: "Tirana",
    flags: {
      svg: "https://flagcdn.com/al.svg",
      png: "https://flagcdn.com/w320/al.png",
    },
  },
  {
    name: "Algeria",
    population: 44700000,
    region: "Africa",
    capital: "Algiers",
    flags: {
      svg: "https://flagcdn.com/dz.svg",
      png: "https://flagcdn.com/w320/dz.png",
    },
  },
  {
    name: "Afghanistan",
    population: 40218234,
    region: "Asia",
    capital: "Kabul",
    flags: {
      svg: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg",
      png: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_the_Taliban.svg/320px-Flag_of_the_Taliban.svg.png",
    },
  },
  {
    name: "Åland Islands",
    population: 28875,
    region: "Europe",
    capital: "Mariehamn",
    flags: {
      svg: "https://flagcdn.com/ax.svg",
      png: "https://flagcdn.com/w320/ax.png",
    },
  },
  {
    name: "Albania",
    population: 2837743,
    region: "Europe",
    capital: "Tirana",
    flags: {
      svg: "https://flagcdn.com/al.svg",
      png: "https://flagcdn.com/w320/al.png",
    },
  },
  {
    name: "Algeria",
    population: 44700000,
    region: "Africa",
    capital: "Algiers",
    flags: {
      svg: "https://flagcdn.com/dz.svg",
      png: "https://flagcdn.com/w320/dz.png",
    },
  },
];

export default function CountryList() {
  return (
    <ul className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 lg:gap-[72px]'>
      {COUNTRY_LIST.map(
        ({ capital, flags, name, population, region }, index) => {
          return (
            <li
              key={`${name}-${index}`}
              className='group bg-white dark:bg-dm-db-element shadow-md rounded-md overflow-hidden flex flex-col'
            >
              <figure className='h-40 overflow-hidden relative'>
                <Image
                  alt={name}
                  src={flags.svg}
                  width={500}
                  height={103}
                  className='transition-transform duration-500 group-hover:scale-125 h-full w-full object-cover'
                />
                <Link
                  // todo
                  // ganti href menggunakan alpha2Code
                  href={`/${name}`}
                  tabIndex={-1}
                  className='absolute top-0 left-0 w-full h-full'
                >
                  <span className='sr-only'>Learn more about {name}</span>
                </Link>
              </figure>
              <div className='text-lm-vdb-text dark:text-white px-6 pt-6 pb-11 lg:px-6 lg:pt-6 flex flex-col gap-[15px]'>
                <h2 className='text-lg lg:text-lg font-extrabold'>
                  <Link
                    href={`/${name}`}
                    // todo
                    // ganti href menggunakan alpha2Code
                  >
                    {name}
                  </Link>
                </h2>
                <div className='flex flex-col gap-[5px]'>
                  <p className='font-semibold text-sm'>
                    Population: <span className='font-light'>{population}</span>
                  </p>
                  <p className='font-semibold text-sm'>
                    Region: <span className='font-light'>{region}</span>
                  </p>
                  <p className='font-semibold text-sm'>
                    Capital: <span className='font-light'>{capital}</span>
                  </p>
                </div>
              </div>
            </li>
          );
        }
      )}
    </ul>
  );
}
