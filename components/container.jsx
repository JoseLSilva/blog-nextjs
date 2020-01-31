export default ({ children }) => {
  return (
    <div className="flex flex-wrap">
      <div className="w-full lg:w-3/4 px-4">
        
        {children}

      </div>
      <div className="w-full lg:w-1/4 px-4 lg:pr-4 lg:pl-0">
        <div className="max-w-sm rounded overflow-hidden shadow-lg py-2">
          <img
            className="w-full"
            src="icon-512x512.png"
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div className="px-6 py-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 my-1">
              #photography
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 my-1">
              #travel
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 my-1">
              #winter
            </span>
          </div>
        </div>

        
      </div>
    </div>
  );
};
