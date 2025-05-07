import banner from "@/assets/images/Munich4.jpg";
import card1 from "@/assets/images/The Key to Fluent German.jpg";
import card2 from "@/assets/images/Short Stories in German.jpg";
import card3 from "@/assets/images/Short Stories in German for Intermediate.jpg";
import card4 from "@/assets/images/100 German Short Stories for Beginners and Intermediate.jpg";
import card5 from "@/assets/images/German Short Stories 1000 Master 1000.jpg";
import card6 from "@/assets/images/German Short Stories for Beginners.jpg";

const Story = () => {
  return (
    <div>
      <div className="mt-10 flex items-center">
        <section
          className="w-full bg-cover bg-center py-56"
          style={{ backgroundImage: `url(${banner.src})` }}
        >
          <div className="container mx-auto text-center text-white">
            <h1 className="text-5xl font-bold mb-6">Welcome to Germany</h1>
            <a
              href="#"
              className="bg-indigo-500 font-bold text-sm text-white py-5 px-14 rounded-full hover:bg-indigo-600"
            >
              Explore More
            </a>
          </div>
        </section>
      </div>
      <div className="mt-10 bg-black mx-auto max-w-4xl px-4 mb-20">
        <div className="border-b-2 border-white pb-4 mb-6">
          <h1 className="text-white text-5xl font-bold text-center">
            Geschichte Deutschlands
          </h1>
        </div>
        <p className="text-white font-medium text-lg text-justify mx-auto max-w-3xl">
          Die Besiedlung des Gebiets begann in der Altsteinzeit; verschiedene
          Stämme bewohnten es, darunter Kelten und Germanen. Laut Britannica
          bildete sich ein loser Staatenbund, und der deutsche König Otto I.
          wurde 962 der erste Kaiser des Heiligen Römischen Reiches. Laut
          Britannica bildete sich ein loser Staatenbund, und der deutsche König
          Otto I. wurde 962 der erste Kaiser des Heiligen Römischen Reiches.
          Laut Britannica bildete sich ein loser Staatenbund, und der deutsche
          König Otto I. wurde 962 der erste Kaiser des Heiligen Römischen
          Reiches.
        </p>
      </div>
      <div className="w-full max-w-6xl px-4 mx-auto mb-20">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {/* Card 1 */}
          <a
            href="/documents/german_short_story100.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-1/3 h-96 rounded-lg overflow-hidden shadow-xl block hover:shadow-2xl transition-shadow"
            aria-label="Read 100 German Short Stories"
          >
            {/* Background Image */}
            <img
              className="absolute h-full w-full object-cover"
              src={card4.src}
              alt="Cover image for 100 German Short Stories"
            />

            {/* White border container */}
            <div className="absolute inset-0 border-4 border-white m-3 rounded-lg">
              {/* Overlay for better text visibility */}
              <div className="absolute inset-0 bg-black bg-opacity-20 rounded-lg"></div>

              {/* Content */}
              <div className="relative h-full flex flex-col items-center justify-center p-4 text-center text-white">
                <div className="bg-black bg-opacity-70 px-4 py-2 rounded-lg mb-3">
                  <h2 className="text-lg font-bold">100 German Short Story</h2>
                </div>

                <div className="text-white font-bold text-sm bg-blue-700 px-6 py-2">
                  Read Now
                </div>
              </div>
            </div>
          </a>

          {/* Card 2 */}
          <a
            href="/documents/master.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-1/3 h-96 rounded-lg overflow-hidden shadow-xl block hover:shadow-2xl transition-shadow"
            aria-label="Read 100 German Short Stories"
          >
            <img
              className="absolute h-full w-full object-cover"
              src={card5.src}
              alt="Card image"
            />
            <div className="absolute inset-0 border-4 border-white m-3 rounded-lg">
              <div className="absolute inset-0 bg-black bg-opacity-20 rounded-lg"></div>
              <div className="relative h-full flex flex-col items-center justify-center p-4 text-center text-white">
                <div className="bg-black bg-opacity-70 px-4 py-2 rounded-lg mb-3">
                  <h1 className="text-lg font-bold text-white">
                    German Short Story Master
                  </h1>
                </div>
                <button className="text-white font-bold text-sm bg-blue-700 px-6 py-2">
                  Read Now
                </button>
              </div>
            </div>
          </a>

          {/* Card 3 */}
          <a
            href="/documents/book1.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-1/3 h-96 rounded-lg overflow-hidden shadow-xl block hover:shadow-2xl transition-shadow"
            aria-label="Read 100 German Short Stories"
          >
            <img
              className="absolute h-full w-full object-cover"
              src={card6.src}
              alt="Card image"
            />
            <div className="absolute inset-0 border-4 border-white m-3 rounded-lg">
              <div className="absolute inset-0 bg-black bg-opacity-20 rounded-lg"></div>
              <div className="relative h-full flex flex-col items-center justify-center p-4 text-center text-white">
                <div className="bg-black bg-opacity-70 px-4 py-2 rounded-lg mb-3">
                  <h1 className="text-lg font-bold">
                    Story of Beginners Book-1
                  </h1>
                </div>

                <button className="text-white font-bold text-sm bg-blue-700 px-6 py-2">
                  Read Now
                </button>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="mt-10 bg-black mx-auto max-w-4xl px-4 mb-20">
        <div className="border-b-2 border-white pb-4 mb-6">
          <h1 className="text-white text-5xl font-bold text-center">
            Deutsche Kulturgeschichte
          </h1>
        </div>
        <p className="text-white font-medium text-lg text-justify mx-auto max-w-3xl">
          Das Heilige Römische Reich, die Reformation, die Aufklärung, die
          Industrialisierung, die beiden Weltkriege und die Wiedervereinigung
          nach 1989 haben die deutschen Werte, die Kunst und den globalen
          Einfluss nachhaltig geprägt. Deutsche Kunst und Musik haben die Welt
          nachhaltig geprägt, mit klassischen Komponisten wie Bach, Beethoven
          und Wagner sowie bedeutenden Beiträgen in anderen künstlerischen
          Bereichen. Die Vielfalt der deutschen Regionen hat eine Vielzahl von
          Bräuchen und Traditionen hervorgebracht, wobei jede Region ihre
          eigenen kulinarischen Spezialitäten und kulturellen Bräuche besitzt.
          Die deutsche Kultur legt großen Wert auf Bildung, Handwerk und die
          Bewahrung des historischen Erbes.
        </p>
      </div>
      <section className=" max-w-6xl mx-auto mb-10">
        <h1 className="text-4xl text-center font-bold mb-10">
          Kurzgeschichte aus Deutsch
        </h1>
        <div className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10">
          <div className="my-8 rounded bg-white dark:bg-gray-800 duration-300 hover:-translate-y-1">
            <a
              href="/documents/fluent.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <figure>
                <img
                  src={card1.src}
                  className="rounded-t h-96 w-full object-cover"
                />

                <figcaption className="p-4">
                  <p className="text-lg mb-4 font-bold leading-relaxed text-white">
                    Becoming Fluent in German
                  </p>

                  <button className="text-white font-bold text-md bg-blue-700 px-10 py-2">
                    Read Now
                  </button>
                </figcaption>
              </figure>
            </a>
          </div>
          <div className="my-8 rounded  bg-white dark:bg-gray-800 duration-300 hover:-translate-y-1">
            <a
              href="/documents/beginner.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <figure>
                <img
                  src={card2.src}
                  className="rounded-t h-96 w-full object-cover"
                />

                <figcaption className="p-4">
                  <p className="text-lg mb-4 font-bold leading-relaxed text-white">
                    German Short Story
                  </p>

                  <button className="text-white font-bold text-md bg-blue-700 px-10 py-2">
                    Read Now
                  </button>
                </figcaption>
              </figure>
            </a>
          </div>
          <div className="my-8 rounded bg-white dark:bg-gray-800 duration-300 hover:-translate-y-1">
            <a
              href="/documents/story.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <figure>
                <img
                  src={card3.src}
                  className="rounded-t h-96 w-full object-cover"
                />

                <figcaption className="p-4">
                  <p className="text-lg mb-4 font-bold leading-relaxed text-white">
                    Short Story For Beginners
                  </p>

                  <button className="text-white font-bold text-md bg-blue-700 px-10 py-2">
                    Read Now
                  </button>
                </figcaption>
              </figure>
            </a>
          </div>
        </div>
      </section>
      <h1 className="text-white text-4xl font-bold text-center">
      Einige Historische Orte in Deutschland
          </h1>
      <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
  <div className="-m-1 flex flex-wrap md:-m-2">
    <div className="flex w-1/2 flex-wrap">
      <div className="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src="https://upload.wikimedia.org/wikipedia/commons/c/ca/Colognecathedralatnight.JPG" />
      </div>
      <div className="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src="https://th-thumbnailer.cdn-si-edu.com/f88QKLEiu_CX8xQiLWRLBtr1D6g=/fit-in/1072x0/filters:focal(670x1001:671x1002)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer_public/24/12/24121275-f771-4aee-bc48-8b96c1b6a5ba/gnto_hhog-regensburg_gatewaytothestonebridge_credits_historicgermany_1-v1-v1.png" />
      </div>
      <div className="w-full p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src="https://loveincorporated.blob.core.windows.net/contentimages/gallery/0d99dec9-2385-4e5f-9c45-9f09d9cf2a2f-Germany_Gengenbach.jpg" />
      </div>
    </div>
    <div className="flex w-1/2 flex-wrap">
      <div className="w-full p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src="https://miro.medium.com/v2/resize:fit:1400/1*gFSrsTPJjO9oe9uW8HdXlw.jpeg" />
      </div>
      <div className="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src="https://media.assettype.com/outlooktraveller%2F2024-06%2F5c0c26bf-e641-4525-85a4-1d2f71d91e02%2Fshutterstock_1240422727.jpg?w=640&auto=format%2Ccompress" />
      </div>
      <div className="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src="https://thumbs.dreamstime.com/b/germany-historical-places-along-river-main-miltenberg-traditional-architectures-houses-markt-square-254039117.jpg" />
      </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default Story;
