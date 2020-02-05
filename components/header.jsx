import Link from "next/link";
import SVG from "./svg";
import handleMenuBar from "../utils/handleMenuBar";

export default function Header() {
  return (
    <header>
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <div className="flex items-center flex-shrink-0 mr-6">
          <SVG icon="logo" className="fill-current h-8 w-8 mr-1" />
          <Link href="/">
            <a
              className="font-semibold text-xl tracking-tight text-gray-800"
              tabIndex="0"
            >
              {process.env.TITLE || "Blog Next.js"}
            </a>
          </Link>
        </div>
        <div className="block lg:hidden">
          <button
            type="button"
            onClick={handleMenuBar}
            aria-label="Menu Icon"
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
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto hidden text-gray-800">
          <div className="lg:flex-grow"></div>
          <div>
            <Link href="/about">
              <a className="inline-block text-sm px-4 py-2 leading-none lg:rounded text-gray-900 font-medium border-white hover:border-transparent hover:text-teal-700 hover:bg-white lg:mt-0 mr-1">
                About
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
