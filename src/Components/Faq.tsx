'use client'
// Faq Qna 
import { useEffect, useRef, useState } from "react";

const Faq = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Handle clicking outside to close
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpenIndex(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Toggle accordion
  const toggleCollapse = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
    return (

        <div>
        <h1 className="text-4xl text-center font-black">Frequently Asked Question</h1>
        <p className="text-center font-semibold text-xl mt-5">Find Answer Common Question There</p>
           <div ref={containerRef} className="w-full max-w-4xl mx-auto mt-10">
      {collapsibleData.map((item, index) => (
        <div key={index} className="mb-7 rounded-lg">
          <button
            onClick={() => toggleCollapse(index)}
            className="w-full flex justify-between items-center px-5 py-5 bg-gray-700 text-white font-semibold rounded-lg"
          >
            {item.title}
            <span className="transition-transform duration-300" 
              style={{ transform: openIndex === index ? "rotate(180deg)" : "rotate(0deg)" }}>
              ▼
            </span>
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openIndex === index ? "max-h-96 p-4" : "max-h-0 p-0"
            }`}
          >
            <p className="text-white">{item.content}</p>
          </div>
        </div>
      ))}
    </div> 
        </div>
    );
};

const collapsibleData = [
    { title: "How Much Time Does It Take to Learn German From A1 to B1 Level ??", content: "Generally it should take 10 to 12 months but it depends on you and how many hours you can dedicate each day it is possible to finish before 10 month if someone studies for 7 to 8 hours a day" },
    { title: "How Many Books Do You Need to Read For German Language A1??", content: "One set of books one main book one for Vocabulary, one for grammar and one for exam preparation with a total of four books.it is possible to complete one in a very smooth day" },
    { title: "How Much Does it Cose to Learn German From A1 to B1 ??", content: "Tailwind CSS is a utility-first CSS framework." },
    { title: "What is The Minimum Language Requirement for Ausbildung ??", content: "TypeScript provides static typing for JavaScript." },
    { title: "How Many Books do You Need to Read for German Language a1 - b1 ??", content: "Tailwind CSS is a utility-first CSS framework." },
  ]

export default Faq;