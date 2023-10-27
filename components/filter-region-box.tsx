"use client";
import clsx from "clsx";
import { useCallback, useEffect, useState } from "react";

const REGION_LIST = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

type FilterRegionBoxProps = {
  handleClickRegion: (regionName: string) => void;
  region: string;
};

/**
 * @see https://medium.com/lego-engineering/building-accessible-select-component-in-react-b61dbdf5122f
 * @see https://codepen.io/kacper-lego/pen/GRxvVxK?editors=0110
 */

export default function FilterRegionBox({
  handleClickRegion,
  region,
}: FilterRegionBoxProps) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const totalRegion = REGION_LIST.length;

  function handleSelectRegion(e: React.MouseEvent<HTMLButtonElement>) {
    handleClickRegion(e.currentTarget.name);
    setIsExpanded(false);
  }

  // Region keyboard handler when dropdown is expanded
  const handleKeydown = useCallback(
    (e: KeyboardEvent) => {
      switch (e.key) {
        case "Up":
        case "ArrowUp": {
          setActiveIndex(activeIndex <= 0 ? totalRegion - 1 : activeIndex - 1);
          break;
        }
        case "Down":
        case "Tab":
        case "ArrowDown": {
          setActiveIndex(activeIndex === totalRegion - 1 ? 0 : activeIndex + 1);
          break;
        }
        case "Enter":
        case " ": {
          e.preventDefault();
          const regionName = REGION_LIST[activeIndex];
          handleClickRegion(regionName);
          setIsExpanded(false);
          break;
        }
        case "Esc":
        case "Escape": {
          setIsExpanded(false);
          break;
        }
        case "PageUp":
        case "Home": {
          setActiveIndex(0);
          break;
        }
        case "PageDown":
        case "End": {
          setActiveIndex(totalRegion - 1);
          break;
        }
      }
    },
    [activeIndex, totalRegion, handleClickRegion]
  );

  const handleClickOutside = (e: MouseEvent) => {
    const elements = e.composedPath() as HTMLElement[];
    const isOutside = !elements.find(
      elm => elm.dataset && elm.dataset.root === "listbox-root"
    );

    if (isOutside) {
      setIsExpanded(false);
    }
  };

  useEffect(() => {
    if (isExpanded) {
      document.addEventListener("click", handleClickOutside);
      document.addEventListener("keydown", handleKeydown);
      return () => {
        document.removeEventListener("click", handleClickOutside);
        document.removeEventListener("keydown", handleKeydown);
      };
    }
  }, [handleKeydown, isExpanded]);

  // Region keyboard handler when dropdown is NOT expanded
  const handleExpandedWithKeyboard = useCallback((e: KeyboardEvent) => {
    switch (e.key) {
      case "Up":
      case "ArrowUp":
      case "Down":
      case "ArrowDown":
      case " ":
      case "Enter": {
        e.preventDefault();
        setIsExpanded(true);
      }
    }
  }, []);

  useEffect(() => {
    if (isFocus) {
      document.addEventListener("keydown", handleExpandedWithKeyboard);
      return () => {
        document.removeEventListener("keydown", handleExpandedWithKeyboard);
      };
    }
  }, [handleExpandedWithKeyboard, isFocus]);

  return (
    <div className='relative z-10 text-sm' data-root='listbox-root'>
      <button
        type='button'
        className='w-[200px] bg-white dark:bg-dm-db-element text-lm-vdb-text dark:text-white shadow flex justify-between items-center px-5 h-12 lg:h-14 rounded'
        onClick={() => setIsExpanded(!isExpanded)}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        role='combobox'
        aria-expanded={isExpanded}
        aria-haspopup='listbox'
        aria-controls='listbox-dropdown'
      >
        <span>{region ? region : "Filter by Region"}</span>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 512 512'
          width={16}
          className={clsx(
            "transition-transform duration-200",
            isExpanded ? "rotate-180" : "rotate-0"
          )}
        >
          <path
            fill='none'
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='48'
            d='M112 184l144 144 144-144'
          />
        </svg>
      </button>
      <ul
        className={clsx(
          "absolute top-full left-0 bg-white dark:bg-dm-db-element text-dm-db-element dark:text-white w-[200px] shadow rounded py-5 flex flex-col gap-1 mt-1 transition-expanded origin-top duration-300",
          isExpanded
            ? "scale-y-100 visible opacity-100"
            : "scale-y-0 invisible opacity-0"
        )}
        tabIndex={-1}
        role='listbox'
        id='listbox-dropdown'
      >
        {REGION_LIST.map((region, index) => {
          return (
            <li
              key={region}
              aria-selected={index === activeIndex}
              onMouseOver={() => setActiveIndex(index)}
              role='option'
              className='py-1 px-5'
            >
              <button
                type='button'
                name={region}
                className='w-full text-left'
                onClick={handleSelectRegion}
              >
                {region}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
