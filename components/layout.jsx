import Head from "next/head";
import Link from "next/link";
import { Fragment } from "react";

const handleHamburger = () => {
  const menu = document.getElementsByClassName(
    "w-full block flex-grow lg:flex lg:items-center lg:w-auto"
  );
  menu[0].classList.toggle("hidden");
};

export default ({ children, title, description }) => (
  <Fragment>
    <Head>
      <title>{title ? title : process.env.TITLE}</title>
      <meta
        name="description"
        content={description ? description : process.env.DESCRIPTION}
      />
    </Head>
    <header>
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <svg
            className="fill-current h-8 w-8 mr-2"
            viewBox="0 0 300 300"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient gradientTransform="rotate(25)" id="0d8c2a87-bb1f-4c79-959c-d6931fc2d11f" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0978A6" stopOpacity="1" />
                <stop offset="100%" stopColor="#FB9447" stopOpacity="1" />
              </linearGradient>
            </defs>
            <g id="171160a3-ccaa-4c6f-acc2-4e4cc4d4f90e" fill="url(#0d8c2a87-bb1f-4c79-959c-d6931fc2d11f)" stroke="none" transform="matrix(2.3157894736842106,0,0,2.3157894736842106,40,45.78947368421052)">
              <g>
                <path d="M85.5 9.474H95V90h-9.5zM0 0h80.75v90H0V0zm9.5 9.474h61.75v4.737H9.5V9.474zm23.75 14.21h38v4.737h-38v-4.737zm0 9.474h38v4.737h-38v-4.737zm0 9.474h38v4.736h-38v-4.736zM9.5 56.842h61.75v4.737H9.5v-4.737zm0 9.474h33.25v4.737H9.5v-4.737zm0 9.473H57v4.737H9.5V75.79zm0-52.105h19v23.684h-19V23.684z" />
              </g>
            </g>
          </svg>
          <Link href="/">
            <span className="font-semibold text-xl tracking-tight cursor-pointer">
              Blog Next.js
            </span>
          </Link>
        </div>
        <div className="block lg:hidden">
          <button
            type="button"
            onClick={handleHamburger}
            className="flex items-center px-3 py-2 rounded text-teal-200 hover:text-white focus:text-white focus:outline-none"
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              />
            </svg>
          </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto hidden">
          <div className="text-sm lg:flex-grow">
            <Link href="/about">
              <a className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                About
              </a>
            </Link>
          </div>
          <div>
            <a
              href="#"
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
            >
              Download
            </a>
          </div>
        </div>
      </nav>
    </header>
    <main className="flex-grow container mx-auto py-4">{children}</main>
    <footer>{"I`m here to stay"}</footer>
  </Fragment>
);
