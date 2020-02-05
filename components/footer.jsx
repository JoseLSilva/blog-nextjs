import Link from "next/link";
import SVG from "./svg";

export default function Footer() {
  return (
    <footer>
      <div className="flex-grow bg-teal-500 text-gray-800 font-semibold p-6">
        <div className="flex-grow items-center md:flex">
          <div className="w-full md:w-1/2">
            <div className="flex items-center flex-shrink-0 mr-6">
              <SVG icon="logo" className="fill-current h-20 w-auto mr-1" />
              <span className="font-semibold text-5xl tracking-tight text-gray-800">
                {process.env.TITLE || "Blog Next.js"}
              </span>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <p>
              {`Copyright © ${
                new Date().getFullYear() != (process.env.STARTYEAR || 2020)
                  ? (process.env.STARTYEAR || 2020) +
                    " - " +
                    new Date().getFullYear()
                  : new Date().getFullYear()
              } ${process.env.TITLE || "Blog Next.js"}. All Rights Reserved.`}
            </p>
            <p className="text-justify md:text-left mt-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
              voluptatibus ex ad accusamus aliquam corporis labore est aut
              aperiam. Assumenda eveniet corrupti quibusdam. Magni accusamus
              iusto eos, corporis tenetur architecto?
            </p>
          </div>
        </div>

        <div className="flex items-center md:ml-3 my-2 md:my-0">
          <Link href="/">
            <a className="flex-1 md:flex-none text-center mr-3 py-2">Home</a>
          </Link>
          <Link href="/">
            <a className="flex-1 md:flex-none text-center mr-3 py-2">About</a>
          </Link>
          <Link href="/">
            <a className="flex-1 md:flex-none text-center mr-3 py-2">Contact</a>
          </Link>
          <Link href="/">
            <a className="flex-1 md:flex-none text-center mr-3 py-2">
              Subscribe
            </a>
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
          <div className="flex flex-col md:flex-row">
            <Link href="/privacy-policy">
              <a className="py-1 md:mr-3 md:py-2">Privacy Policy</a>
            </Link>
            <Link href="/terms-of-service">
              <a className="py-1 md:mr-3 md:py-2">Terms of service</a>
            </Link>
          </div>
        </div>
        <div className="text-center mt-3 -mb-1 md:text-left md:my-0">
          &#123;&#34;Developed by&#34;: &#34;
          <a href="http://silva.app" target="_blank" rel="noopener noreferrer">
            José L Silva
          </a>
          &#34;, &#34;with&#34;: &#34;
          <span className="text-red-600">&hearts;</span>&#34;&#125;
        </div>
      </div>
    </footer>
  );
}
