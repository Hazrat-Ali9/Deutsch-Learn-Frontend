

const Choose = () => {
    return (
        <div>
           <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 mt-20">
      <div className="max-w-xl md:mx-auto sm:text-center lg:max-w-2xl">

        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="3071a3ad-db4a-4cbe-ac9a-47850b69e4b7"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#3071a3ad-db4a-4cbe-ac9a-47850b69e4b7)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">Why</span>
          </span>{' '}
          Choose German For Null
        </h2>
        <p className="text-base text-white md:text-lg">
        Your Gateway To The German Language
        </p>
      </div>
      <div className="grid max-w-screen-4xl gap-40 lg:grid-cols-2 sm:mx-auto mt-40">
        <div className="flex flex-col justify-center">
          <div className="flex">
            <div className="mr-4">
              <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-amber-600">
                <svg
                  className="w-8 h-8 text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
            </div>
            <div>
              <h6 className="mb-2 text-3xl font-bold leading-5">
                Customizes Learning
              </h6>
              <p className="text-sm font-bold text-white mt-5">
                Our Course Cover All Aspect of German Language, For Grammar And Vocabulary to Pronunciation & Conversation
              </p>
              <hr className="w-full my-6 border-gray-300 mt-8" />
            </div>
          </div>
          <div className="flex">
            <div className="mr-4">
              <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-red-600">
                <svg
                  className="w-8 h-8 text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
            </div>
            <div>
            <h6 className="mb-2 text-3xl font-bold leading-5">
                Expert Instructions
              </h6>
              <p className="text-sm font-bold text-white mt-5">
                Learn From Experienced German Language Teacher Who Are Passionate About Sharing Their Knowledge
              </p>
              <hr className="w-full my-6 border-gray-300 mt-8" />
            </div>
          </div>
          <div className="flex">
            <div className="mr-4">
              <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-yellow-500">
                <svg
                  className="w-8 h-8 text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
            </div>
            <div>
            <h6 className="mb-2 text-3xl font-bold leading-5">
                Flexible Learning
              </h6>
              <p className="text-sm font-bold text-white mt-5">
               Study at Your Own Pace And on Your Own Schedule With Our Self-Paced Courses
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5">
          <img
            className="object-cover w-full h-64 col-span-2 rounded shadow-lg"
            src="https://www.make-it-in-germany.com/fileadmin/_processed_/3/5/csm_4.1.1_nito_f_f664b595d8.jpg"
            alt=""
          />
          <img
            className="object-cover w-full h-52 rounded shadow-lg"
            src="https://static.wixstatic.com/media/4047b2_bac7bdbc345a4fa4a0112e45da59c124~mv2.jpg/v1/fill/w_568,h_396,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/4047b2_bac7bdbc345a4fa4a0112e45da59c124~mv2.jpg"
            alt=""
          />
          <img
            className="object-cover w-full h-52 rounded shadow-lg"
            src="https://media.licdn.com/dms/image/v2/D5612AQExjLbxT-Dkdg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1683981647741?e=2147483647&v=beta&t=i_ZOaDzTLjUJdYZVQLPKFeDTFDIO1rG6VLYMU9_PREQ"
            alt=""
          />
        </div>
      </div>
    </div> 
        </div>
    );
};

export default Choose;