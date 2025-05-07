'use client'

import { useEffect, useState } from "react";

const slides = [
    {
      id: 1,
      image: "https://plus.unsplash.com/premium_photo-1674590091046-18f2ad87f344?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Slide 1 Title",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1554062669-9603197b21f5?q=80&w=2004&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Slide 2 Title",
    },
    {
      id: 3,
      image: "https://plus.unsplash.com/premium_photo-1661963646444-ea17cd77c212?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Slide 3 Title",
    },
  ];

  const cards = [
    { id: 1, title: "Card 1", description: "This is the first card.",img:"https://img.freepik.com/premium-psd/a1-german-level-concept-level-intermediate-3d-rendering-isolated-transparent-background_823159-21143.jpg" },
    
    { id: 3, title: "Card 3", description: "This is the third card.",img:"https://img.freepik.com/premium-psd/b1-german-level-concept-b1-intermediate-3d-rendering-isolated-transparent-background_823159-20946.jpg" },
    { id: 2, title: "Card 2", description: "This is the second card.", img:"https://img.freepik.com/premium-psd/b2-german-level-concept-level-upper-intermediate-3d-rendering-isolated-transparent-background_823159-21063.jpg"},
    { id: 4, title: "Card 4", description: "This is the fourth card.",img:"https://img.freepik.com/premium-psd/c1-german-level-concept-level-advanced-3d-rendering-isolated-transparent-background_823159-21175.jpg" },
  ];

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
    return (
      <div className="relative w-full h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out h-[43rem] ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex flex-col items-center justify-center w-full h-full bg-black bg-opacity-50 text-white text-center">
            <h1 className="text-4xl font-bold mb-4">{slide.title}</h1>
            <div className="flex gap-4">
              <button className="px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-700">
                Learn More
              </button>
              <button className="px-6 py-2 bg-gray-800 rounded-lg hover:bg-gray-900">
                Get Started
              </button>
            </div>
          </div>
        </div>
      ))}
    
      {/* Bottom Centered Cards */}
      <div className="absolute bottom-40 left-1/2 -translate-x-1/2 flex justify-center gap-10 flex-wrap max-w-screen-lg w-full">
  {cards.map((card, idx) => (
    <div key={idx} className="bg-white h-48 w-40 sm:w-48 md:w-56 rounded-lg shadow-lg overflow-hidden">
      <img className="w-full h-full object-cover" src={card.img} alt="" />
    </div>
  ))}
</div>
    </div>
    
    );
};

export default Slider;