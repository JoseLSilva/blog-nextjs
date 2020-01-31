import SVG from "./svg";

export default () => {
  return (
    <div className="max-w-sm w-full lg:max-w-full lg:flex hover:shadow-md">
      <div
        className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
        style={{
          backgroundImage: "url('./assets/card-left.jpg')"
        }}
        title="Woman holding a mug"
      ></div>
      <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-6">
          <p className="text-sm items-center uppercase tracking-wide text-indigo-600 font-bold">
            Marketing
          </p>
          <div className="block mt-1 text-lg leading-tight font-semibold text-gray-900">
            <a href="#" className="hover:underline">
              Can coffee make you a better developer?
            </a>
          </div>
          <div className="text-sm flex text-gray-600 mb-2">
            <span className="mr-2 flex items-center">
              <SVG icon="calendar" className="w-5 mr-1" />
              30/01/2020
            </span>
            <span className="mr-2 flex items-center">
              <SVG icon="comments" className="w-4 mr-1" />3 Comentarios
            </span>
          </div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>

        <div className="clearfix">
          <button className="float-right bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            More...
          </button>
          <div className="flex items-center">
            <img
              className="w-10 h-10 rounded-full mr-4"
              src="/icon-512x512.png"
              alt="Avatar of Jonathan Reinink"
            />
            <div className="text-sm">
              <p className="text-gray-900 leading-none">Blog Next.js</p>
              <p className="text-gray-600">Aug 18</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
