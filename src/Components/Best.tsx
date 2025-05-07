const Best = () => {
  return (
    <div>
      <section className="bg-black">
        <div className="px-20 py-10 mx-auto">
          <h1 className="text-2xl font-black text-gray-800 capitalize lg:text-3xl dark:text-white">
            Best Online <br /> German Resource in Bangladesh
          </h1>

          <div className="mt-2">
            <span className="inline-block w-40 h-1 bg-amber-600 rounded-full"></span>
            <span className="inline-block w-3 h-1 ml-1 bg-amber-600 rounded-full"></span>
            <span className="inline-block w-1 h-1 ml-1 bg-amber-600 rounded-full"></span>
          </div>

          <div className="mt-8 xl:mt-12 lg:flex lg:items-center">
  <div className="grid w-full grid-cols-1 gap-10 lg:w-1/2 md:grid-cols-2">
    <div className="w-full overflow-hidden">
      <img
        className="h-52 w-full object-cover"
        src="https://bfu.goethe.de/medien/a1/Bilder/A1_Startbild.jpg"
        alt="A2 Course - German Language"
      />
      <div className="p-4 bg-gray-700">
        <h1 className="text-2xl font-bold text-white text-center">
          A1 Course - German Language
        </h1>
      </div>
    </div>

    <div className="w-full overflow-hidden">
      <img
        className="h-52 w-full object-cover"
        src="https://bfu.goethe.de/medien/a2_2005/Bilder/A2_Startbild.jpg"
        alt="A2 Course - German Language"
      />
      <div className="p-4 bg-gray-700">
        <h1 className="text-2xl font-bold text-white text-center">
          A2 Course - German Language
        </h1>
      </div>
    </div>

    <div className="w-full overflow-hidden mx-auto">
      <img
        className="h-52 w-full object-cover"
        src="https://www.germanfromnull.com/wp-content/uploads/2024/12/exam-A2-liness-scaled.webp"
        alt="A2 Course - German Language"
      />
      <div className="p-4 bg-gray-700">
        <h1 className="text-2xl font-bold text-white text-center">
          A1 Exam Preparation
        </h1>
      </div>
    </div>

    <div className="w-full overflow-hidden mx-auto">
      <img
        className="h-52 w-full object-cover"
        src="https://www.germanfromnull.com/wp-content/uploads/2024/12/A1-exam-line-scaled.webp"
        alt="A2 Course - German Language"
      />
      <div className="p-4 bg-gray-700">
        <h1 className="text-2xl font-bold text-white text-center">
        A2 Exam Preparation
        </h1>
      </div>
    </div>
  </div>

  <div className="hidden lg:flex lg:w-1/2 lg:justify-center">
    <img
      className="w-[28rem] h-[28rem] flex-shrink-0 object-cover xl:w-[34rem] xl:h-[34rem] rounded-full"
      src="https://ceoworld.biz/wp-content/uploads/2021/05/online-courses.jpg"
      alt="German Language Course"
    />
  </div>
</div>

        </div>
      </section>
    </div>
  );
};

export default Best;
