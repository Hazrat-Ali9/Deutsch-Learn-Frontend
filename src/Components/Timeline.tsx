

const Timeline = () => {
    
    return (
        <div>
            <section>
    <div className="bg-black text-white py-8">
    <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
      <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
        
        <p className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2 font-black text-amber-600">HOW IT ALL WORKS</p>
        <p className="ml-2 uppercase tracking-loose mt-3 text-orange-500">With languages,you are at home anywhere</p>
        <a href="#"
        className="bg-transparent mr-auto hover:bg-orange-600 text-white hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-amber-600 hover:border-transparent mt-5">
        Explore Now</a>
      </div>
      <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
        <div className="container mx-auto w-full h-full">
          <div className="relative wrap overflow-hidden p-10 h-full">
          <div
  className="absolute h-full border-2 border-amber-700 rounded-sm"
  style={{ right: "50%", border: "2px solid #FFC100", borderRadius: "1%" }}
></div>

<div
  className="absolute h-full border-2 border-amber-700 rounded-sm"
  style={{ left: "50%", border: "1px solid #FFC100", borderRadius: "1%" }}
></div>

            <div className="mb-16 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div className="order-1 w-5/12"></div>
              <div className="order-1 w-5/12 px-1 py-4 text-right">
                <h4 className="mb-3 font-black text-lg md:text-2xl text-orange-600">We Believe in Best Quality</h4>
                <p className="text-lg md:text-base leading-snug text-amber-500 text-opacity-100 mt-8 font-semibold">
                  We Believe in The Best Quality.Never Publish at Usual and Low Quality Tutorial.Keep in Touch to Get the Best Online Courses in Bangladesh
                </p>
              </div>
            </div>
            <div className="mb-16 flex justify-between items-center w-full right-timeline">
              <div className="order-1 w-5/12"></div>
              <div className="order-1  w-5/12 px-1 py-4 text-left">
              <h4 className="mb-3 font-black text-lg md:text-2xl text-orange-600">Life Time Access</h4>
                <p className="text-lg md:text-base leading-snug text-amber-500 text-opacity-100 mt-8 font-semibold">
                  Life Time Access Means That for a Single Payment,The Student Get Unlimited Access to The Course.Free Updates & Other Benefits as The Programme.
                </p>
              </div>
            </div>
            <div className="mb-16 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div className="order-1 w-5/12"></div>
              <div className="order-1 w-5/12 px-1 py-4 text-right">
              <h4 className="mb-3 font-black text-lg md:text-2xl text-orange-600">Top Rated Trainer</h4>
                <p className="text-lg md:text-base leading-snug text-amber-500 text-opacity-100 mt-8 font-semibold">
                  We Always Find The Top Rated Tutors & Motivate Them to Create The Best Quality Training Material For Our Student.Never Miss There Cordial Training.
                </p>
              </div>
            </div>
          </div>
          <img className="mx-auto" src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png" />
        </div>
      </div>
    </div>
  </div>
  </section>
        </div>
    );
};

export default Timeline;