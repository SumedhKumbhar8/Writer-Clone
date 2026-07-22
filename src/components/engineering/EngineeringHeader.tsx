"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { engineeringData } from "@/data/engineering";

function EngineeringWordmark({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="186"
      height="37"
      viewBox="0 0 186 37"
      fill="none"
      className={className}
      aria-hidden
    >
      <path d="M12.7502 5.3V25.13L19.1702 5.3H21.6302L13.6202 29.3H10.5002V9.8L4.08023 29.3H0.990234V5.3H3.24023V25.13L9.63023 5.3H12.7502Z" fill="black" />
      <path d="M28.2061 9.5C30.9061 9.5 31.4761 11.51 31.4761 15.29V16.04H29.2261V14.75C29.2261 12.89 29.0461 11.45 27.3661 11.45C25.4461 11.45 24.2461 14.09 24.2461 16.01V29.3H21.9961V9.8H24.2461V12.32C24.8161 11.06 25.9561 9.5 28.2061 9.5Z" fill="black" />
      <path d="M34.2975 7.55C33.5775 7.55 32.9475 6.98 32.9475 6.29C32.9475 5.57 33.5775 5 34.2975 5C35.0475 5 35.6475 5.57 35.6475 6.29C35.6475 6.98 35.0475 7.55 34.2975 7.55ZM35.4375 29.3H33.1875V9.8H35.4375V29.3Z" fill="black" />
      <path d="M39.3738 9.8H44.6238V11.75H41.1738V22.76C41.1738 25.7 41.1438 27.35 43.2738 27.35H44.6238V29.3H43.0638C39.1038 29.3 38.9238 26.9 38.9238 22.76V11.75H36.6738V9.8C38.4438 9.29 39.4638 7.37 39.4338 5.3H41.6838C41.6838 7.55 40.5138 9.41 39.3738 9.8Z" fill="black" />
      <path d="M50.678 9.5C54.308 9.5 55.598 11.72 55.598 16.55V19.79H47.918V23.21C47.918 26.81 49.028 27.65 50.678 27.65C52.358 27.65 53.348 26.81 53.348 23.21V21.65H55.598V22.52C55.598 27.35 54.308 29.6 50.678 29.6C47.048 29.6 45.668 27.35 45.668 22.52V16.55C45.668 11.72 47.048 9.5 50.678 9.5ZM53.348 18.14V15.89C53.348 12.26 52.358 11.45 50.678 11.45C49.028 11.45 47.918 12.26 47.918 15.89V18.14H53.348Z" fill="black" />
      <path d="M63.7725 9.5C66.4725 9.5 67.0425 11.51 67.0425 15.29V16.04H64.7925V14.75C64.7925 12.89 64.6125 11.45 62.9325 11.45C61.0125 11.45 59.8125 14.09 59.8125 16.01V29.3H57.5625V9.8H59.8125V12.32C60.3825 11.06 61.5225 9.5 63.7725 9.5Z" fill="black" />
      <path d="M74.5254 5.3H81.7254V7.55H76.7754V16.16H81.7254V18.41H76.7754V27.05H81.7254V29.3H74.5254V5.3Z" fill="black" />
      <path d="M89.636 9.5C92.396 9.5 93.596 11.27 93.596 15.5V29.3H91.346V14.99C91.346 12.86 90.716 11.45 88.856 11.45C86.756 11.45 85.916 13.31 85.916 15.2V29.3H83.666V9.8H85.916V11.99C86.396 10.91 87.446 9.5 89.636 9.5Z" fill="black" />
      <path d="M103.241 11.99V9.8H105.491V28.76C105.491 32.93 104.681 35.3 100.001 35.3H96.2206V33.35H99.9105C102.641 33.35 103.241 31.7 103.241 28.76V27.11C102.761 28.19 101.711 29.6 99.4905 29.6C96.7305 29.6 95.5605 27.8 95.5605 23.57V15.5C95.5605 11.27 96.7305 9.5 99.4905 9.5C101.711 9.5 102.761 10.91 103.241 11.99ZM100.301 27.65C102.401 27.65 103.241 25.76 103.241 23.87V15.2C103.241 13.31 102.401 11.45 100.301 11.45C98.4105 11.45 97.8105 12.86 97.8105 14.99V24.11C97.8105 26.21 98.4105 27.65 100.301 27.65Z" fill="black" />
      <path d="M108.565 7.55C107.845 7.55 107.215 6.98 107.215 6.29C107.215 5.57 107.845 5 108.565 5C109.315 5 109.915 5.57 109.915 6.29C109.915 6.98 109.315 7.55 108.565 7.55ZM109.705 29.3H107.455V9.8H109.705V29.3Z" fill="black" />
      <path d="M117.615 9.5C120.375 9.5 121.575 11.27 121.575 15.5V29.3H119.325V14.99C119.325 12.86 118.695 11.45 116.835 11.45C114.735 11.45 113.895 13.31 113.895 15.2V29.3H111.645V9.8H113.895V11.99C114.375 10.91 115.425 9.5 117.615 9.5Z" fill="black" />
      <path d="M128.549 9.5C132.179 9.5 133.469 11.72 133.469 16.55V19.79H125.789V23.21C125.789 26.81 126.899 27.65 128.549 27.65C130.229 27.65 131.219 26.81 131.219 23.21V21.65H133.469V22.52C133.469 27.35 132.179 29.6 128.549 29.6C124.919 29.6 123.539 27.35 123.539 22.52V16.55C123.539 11.72 124.919 9.5 128.549 9.5ZM131.219 18.14V15.89C131.219 12.26 130.229 11.45 128.549 11.45C126.899 11.45 125.789 12.26 125.789 15.89V18.14H131.219Z" fill="black" />
      <path d="M140.209 9.5C143.839 9.5 145.129 11.72 145.129 16.55V19.79H137.449V23.21C137.449 26.81 138.559 27.65 140.209 27.65C141.889 27.65 142.879 26.81 142.879 23.21V21.65H145.129V22.52C145.129 27.35 143.839 29.6 140.209 29.6C136.579 29.6 135.199 27.35 135.199 22.52V16.55C135.199 11.72 136.579 9.5 140.209 9.5ZM142.879 18.14V15.89C142.879 12.26 141.889 11.45 140.209 11.45C138.559 11.45 137.449 12.26 137.449 15.89V18.14H142.879Z" fill="black" />
      <path d="M153.304 9.5C156.004 9.5 156.574 11.51 156.574 15.29V16.04H154.324V14.75C154.324 12.89 154.144 11.45 152.464 11.45C150.544 11.45 149.344 14.09 149.344 16.01V29.3H147.094V9.8H149.344V12.32C149.914 11.06 151.054 9.5 153.304 9.5Z" fill="black" />
      <path d="M159.395 7.55C158.675 7.55 158.045 6.98 158.045 6.29C158.045 5.57 158.675 5 159.395 5C160.145 5 160.745 5.57 160.745 6.29C160.745 6.98 160.145 7.55 159.395 7.55ZM160.535 29.3H158.285V9.8H160.535V29.3Z" fill="black" />
      <path d="M168.445 9.5C171.205 9.5 172.405 11.27 172.405 15.5V29.3H170.155V14.99C170.155 12.86 169.525 11.45 167.665 11.45C165.565 11.45 164.725 13.31 164.725 15.2V29.3H162.475V9.8H164.725V11.99C165.205 10.91 166.255 9.5 168.445 9.5Z" fill="black" />
      <path d="M182.049 11.99V9.8H184.299V28.76C184.299 32.93 183.489 35.3 178.809 35.3H175.029V33.35H178.719C181.449 33.35 182.049 31.7 182.049 28.76V27.11C181.569 28.19 180.519 29.6 178.299 29.6C175.539 29.6 174.369 27.8 174.369 23.57V15.5C174.369 11.27 175.539 9.5 178.299 9.5C180.519 9.5 181.569 10.91 182.049 11.99ZM179.109 27.65C181.209 27.65 182.049 25.76 182.049 23.87V15.2C182.049 13.31 181.209 11.45 179.109 11.45C177.219 11.45 176.619 12.86 176.619 14.99V24.11C176.619 26.21 177.219 27.65 179.109 27.65Z" fill="black" />
    </svg>
  );
}

export function EngineeringHeader() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-[150] w-full bg-white px-0 pb-[34px] pt-[27px]">
      <div className="relative flex items-center px-10">
        <Link href="/" className="relative z-[2] shrink-0" aria-label="WRITER home">
          <Image
            src={engineeringData.logos.circle}
            alt="Writer Engineering"
            width={48}
            height={49}
            priority
            className="block h-[49px] w-[48px]"
          />
        </Link>

        <Link
          href="/engineering"
          className="relative z-[2] ml-[22px] flex h-[37px] items-center"
          aria-label="Writer Engineering"
        >
          <EngineeringWordmark className="h-[37px] w-[186px]" />
        </Link>

        <nav
          className="absolute left-[300px] top-1/2 z-[1] hidden -translate-y-1/2 xl:block"
          aria-label="Engineering blog categories"
        >
          <ul className="-mx-[17px] flex items-center">
            {engineeringData.nav.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="whitespace-nowrap px-[17px] text-[14px] font-semibold leading-[22px] text-black"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="relative z-[2] ml-auto flex items-center">
          <div className="relative flex h-12 w-12 items-center justify-center">
            {searchOpen ? (
              <input
                type="search"
                placeholder="Search"
                autoFocus
                className="absolute right-0 top-1/2 h-10 w-[280px] -translate-y-1/2 border-b border-black bg-white px-2 text-[14px] outline-none"
                onBlur={() => setSearchOpen(false)}
              />
            ) : null}
            <button
              type="button"
              aria-label="Search"
              className="flex h-12 w-12 items-center justify-center"
              onClick={() => setSearchOpen((v) => !v)}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
                <path d="M20 20l-3.5-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="relative -ml-[21px] flex h-12 w-12 items-center justify-center xl:ml-0"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="flex w-[18px] flex-col gap-[5px]">
              <span className="block h-[2px] w-full bg-black" />
              <span className="block h-[2px] w-full bg-black" />
              <span className="block h-[2px] w-full bg-black" />
            </span>
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div className="absolute left-0 right-0 top-full z-[130] border-t border-[#e4e7ed] bg-white px-10 py-8 shadow-lg xl:hidden">
          <ul className="flex flex-col gap-4">
            {engineeringData.nav.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-[16px] font-semibold text-black"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  );
}
