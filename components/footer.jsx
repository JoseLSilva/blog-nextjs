import Link from "next/link";
import SVG from "./svg";

export default function Footer() {
  return (
    <footer>
      <div className="flex-grow bg-teal-500 text-gray-800 font-semibold p-6">
        <div className="flex mb-4">
          <div className="w-1/2">
            <div className="flex items-center flex-shrink-0 mr-6">
              <SVG icon="logo" className="fill-current h-20 w-auto mr-1" />
              <span className="font-semibold text-5xl tracking-tight text-gray-800">
                {process.env.TITLE || "Blog Next.js"}
              </span>
            </div>
          </div>
          <div className="w-1/2">
            <p>
              {`Copyright © ${
                new Date().getFullYear() != (process.env.STARTYEAR || 2020)
                  ? (process.env.STARTYEAR || 2020) +
                    " - " +
                    new Date().getFullYear()
                  : new Date().getFullYear()
              } ${process.env.TITLE || "Blog Next.js"}. All Rights Reserved.`}
            </p>
            <p className="mt-2">
              Disclaimer: This site AnimeBatch does not store any files on its
              server. All contents are provided by non-affiliated third parties.
            </p>
          </div>
        </div>

        <div className="flex">
          <Link href="/">
            <a className="mr-3 py-2">Home</a>
          </Link>
          <Link href="/">
            <a className="mr-3 py-2">About</a>
          </Link>
          <Link href="/">
            <a className="mr-3 py-2">Contact</a>
          </Link>
          <Link href="/">
            <a className="mr-3 py-2">Subscribe</a>
          </Link>
        </div>

        <div className="clearfix">
          <hr className="my-2 border-gray-700" />
          <div className="float-right">
            <button
              aria-label="Facebook Icon"
              className="bg-blue-800 hover:bg-blue-700 rounded p-2 mr-1"
              onClick={() => window.open("http://facebook.com", "_blank")}
            >
              <SVG icon="facebook" className="w-6" />
            </button>
            <button
              aria-label="Instagram Icon"
              className="instagram rounded p-2"
              onClick={() => window.open("https://instagram.com/", "_blank")}
            >
              <SVG icon="instagram" className="w-6" />
            </button>
          </div>
          <div className="flex">
            <Link href="/privacy-policy">
              <a className="mr-3 py-2">Privacy Policy</a>
            </Link>
            <Link href="/terms-of-service">
              <a className="mr-3 py-2">Terms of service</a>
            </Link>
          </div>
        </div>
        <div>
          &#123;&#34;Developed by&#34;: &#34;
          <a href="http://silva.app" target="_blank" rel="noopener noreferrer">
            José L Silva
          </a>
          &#34;, &#34;with&#34;: &#34;
          <span className="text-red-600">&#9829;</span>&#34;&#125;
        </div>
      </div>
    </footer>
  );
}
