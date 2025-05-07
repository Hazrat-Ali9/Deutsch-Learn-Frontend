const Blog = () => {
  return (
    <div className="max-w-screen-2xl mx-auto">
  <main className="mt-10">
    <div className="block md:flex md:space-x-20 px-2 lg:p-0">
      <a
        className="mb-4 md:mb-0 w-full md:w-2/3 relative rounded inline-block"
        style={{ height: "24em" }}
        href="#"
      >
        <div
          className="absolute left-0 bottom-0 w-full h-full z-10"
          style={{
            backgroundImage: "linear-gradient(180deg,transparent,rgba(0,0,0,.7))",
          }}
        ></div>
        <img
          src="https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
          alt="Image"
          className="absolute left-0 top-0 w-full h-full rounded z-0"
        />
        <div className="p-4 absolute bottom-0 left-0 z-20">
          <span className="px-4 py-1 bg-black text-white inline-flex items-center justify-center mb-2">
            Nutrition
          </span>
          <h2 className="text-2xl md:text-4xl font-semibold text-white leading-tight">
            Pellentesque a consectetur velit, ac molestie ipsum. Donec sodales, massa et auctor.
          </h2>
          <div className="flex mt-3">
            <img
              src="https://randomuser.me/api/portraits/men/97.jpg"
              alt="Profile"
              width={40}
              height={40}
              className="h-10 w-10 rounded-full mr-2 object-cover"
            />
            <div>
              <p className="font-semibold text-white text-sm">Mike Sullivan</p>
              <p className="font-semibold text-white text-xs">14 Aug</p>
            </div>
          </div>
        </div>
      </a>

      <a
        className="w-full md:w-1/3 relative rounded"
        style={{ height: "24em" }}
        href="#"
      >
        <div
          className="absolute left-0 top-0 w-full h-full z-10"
          style={{
            backgroundImage: "linear-gradient(180deg,transparent,rgba(0,0,0,.7))",
          }}
        ></div>
        <img
          src="https://images.unsplash.com/photo-1543362906-acfc16c67564?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1301&q=80"
          alt="Image"
          className="absolute left-0 top-0 w-full h-full rounded z-0"
        />
        <div className="p-4 absolute bottom-0 left-0 z-20">
          <span className="px-4 py-1 bg-black text-white inline-flex items-center justify-center mb-2">
            Science
          </span>
          <h2 className="text-2xl md:text-3xl font-semibold text-white leading-tight">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </h2>
          <div className="flex mt-3">
            <img
              src="https://randomuser.me/api/portraits/men/86.jpg"
              alt="Profile"
              className="h-10 w-10 rounded-full mr-2 object-cover"
            />
            <div>
              <p className="font-semibold text-white text-sm">Chrishell Staus</p>
              <p className="font-semibold text-white text-xs">15 Aug</p>
            </div>
          </div>
        </div>
      </a>
    </div>

    <div className="block lg:flex lg:space-x-20 px-2 lg:p-0 mt-10 mb-10">
      {/* Post Cards */}
      <div className="w-full lg:w-2/3">
        {/* First Card */}
        <a className="block rounded w-full lg:flex mb-10" href="#">
          <div
            className="h-56 lg:w-56 flex-none bg-cover text-center overflow-hidden opacity-75"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80')",
            }}
            title="Diet is very important"
          ></div>
          <div className="bg-white rounded px-4 flex flex-col justify-between leading-normal">
            <div className="mt-5">
              <div className="mt-3 md:mt-0 text-black font-bold text-xl md:text-2xl">
                Aliquam venenatis nisl id purus rhoncus, in efficitur sem hendrerit.
              </div>
              <p className="text-black text-base mt-2">
                Duis euismod est quis lacus elementum, eu laoreet dolor consectetur. Pellentesque sed neque vel tellus lacinia elementum. Proin consequat ullamcorper eleifend.
              </p>
            </div>
            <div className="flex mb-3">
              <img
                src="https://randomuser.me/api/portraits/men/86.jpg"
                alt="Profile"
                className="h-10 w-10 rounded-full mr-2 object-cover"
              />
              <div>
                <p className="font-semibold text-black text-sm capitalize">Eduard Franz</p>
                <p className="text-black text-xs">14 Aug</p>
              </div>
            </div>
          </div>
        </a>
        <a className="block rounded w-full lg:flex mb-10" href="#">
          <div
            className="h-56 lg:w-56 flex-none bg-cover text-center overflow-hidden opacity-75"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80')",
            }}
            title="Diet is very important"
          ></div>
          <div className="bg-white rounded px-4 flex flex-col justify-between leading-normal">
            <div className="mt-5">
              <div className="mt-3 md:mt-0 text-black font-bold text-xl md:text-2xl">
                Aliquam venenatis nisl id purus rhoncus, in efficitur sem hendrerit.
              </div>
              <p className="text-black text-base mt-2">
                Duis euismod est quis lacus elementum, eu laoreet dolor consectetur. Pellentesque sed neque vel tellus lacinia elementum. Proin consequat ullamcorper eleifend.
              </p>
            </div>
            <div className="flex mb-3">
              <img
                src="https://randomuser.me/api/portraits/men/86.jpg"
                alt="Profile"
                className="h-10 w-10 rounded-full mr-2 object-cover"
              />
              <div>
                <p className="font-semibold text-black text-sm capitalize">Eduard Franz</p>
                <p className="text-black text-xs">14 Aug</p>
              </div>
            </div>
          </div>
        </a>
        <a className="block rounded w-full lg:flex mb-10" href="#">
          <div
            className="h-56 lg:w-56 flex-none bg-cover text-center overflow-hidden opacity-75"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80')",
            }}
            title="Diet is very important"
          ></div>
          <div className="bg-white rounded px-4 flex flex-col justify-between leading-normal">
            <div className="mt-5">
              <div className="mt-3 md:mt-0 text-black font-bold text-xl md:text-2xl">
                Aliquam venenatis nisl id purus rhoncus, in efficitur sem hendrerit.
              </div>
              <p className="text-black text-base mt-2">
                Duis euismod est quis lacus elementum, eu laoreet dolor consectetur. Pellentesque sed neque vel tellus lacinia elementum. Proin consequat ullamcorper eleifend.
              </p>
            </div>
            <div className="flex mb-3">
              <img
                src="https://randomuser.me/api/portraits/men/86.jpg"
                alt="Profile"
                className="h-10 w-10 rounded-full mr-2 object-cover"
              />
              <div>
                <p className="font-semibold text-black text-sm capitalize">Eduard Franz</p>
                <p className="text-black text-xs">14 Aug</p>
              </div>
            </div>
          </div>
        </a>

        {/* Repeat similar structure for other cards */}
      </div>

      {/* Right Sidebar */}
      <div className="w-full lg:w-1/3 px-3">
        {/* Topics */}
        <div className="mb-4">
          <h5 className="font-bold text-lg uppercase text-white px-1 mb-2">Popular Topics</h5>
          <ul>
            <li className="px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300">
              <a
                href="#"
                className="flex items-center text-white cursor-pointer"
              >
                <span className="inline-block h-4 w-4 bg-green-500 mr-3"></span>
                Nutrition <span className="text-white ml-auto">23 articles</span>
                <i className="text-white bx bx-right-arrow-alt ml-1"></i>
              </a>
            </li>
            <li className="px-1 py-4 border-b border-white hover:border-gray-200 transition duration-300">
              <a
                href="#"
                className="flex items-center text-white cursor-pointer"
              >
                <span className="inline-block h-4 w-4 bg-green-500 mr-3"></span>
                Nutrition <span className="text-white ml-auto">23 articles</span>
                <i className="text-white bx bx-right-arrow-alt ml-1"></i>
              </a>
            </li>
            <li className="px-1 py-4 border-b border-white hover:border-gray-200 transition duration-300">
              <a
                href="#"
                className="flex items-center text-white cursor-pointer"
              >
                <span className="inline-block h-4 w-4 bg-green-500 mr-3"></span>
                Nutrition <span className="text-white ml-auto">23 articles</span>
                <i className="text-white bx bx-right-arrow-alt ml-1"></i>
              </a>
            </li>
            <li className="px-1 py-4 border-b border-white hover:border-gray-200 transition duration-300">
              <a
                href="#"
                className="flex items-center text-white cursor-pointer"
              >
                <span className="inline-block h-4 w-4 bg-green-500 mr-3"></span>
                Nutrition <span className="text-white ml-auto">23 articles</span>
                <i className="text-white bx bx-right-arrow-alt ml-1"></i>
              </a>
            </li>
            {/* Other list items */}
          </ul>
          <h5 className="font-bold text-2xl text-white px-1 mt-5">Subscribe</h5>
          <p className="px-1 mt-5">
            Subscribe to our newsletter. We deliver the best health related articles to your inbox
          </p>
          <input
            className="w-full py-3 bg-gray-800 border border-white mt-5 px-1"
            type="text"
          />
          <button className="mt-4 font-bold text-xl px-1 bg-amber-700 hover:bg-amber-600 text-white w-full py-3">
            Subscribe Now
          </button>
        </div>
      </div>
    </div>
  </main>
</div>

  );
};

export default Blog;
