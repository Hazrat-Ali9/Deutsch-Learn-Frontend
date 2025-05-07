'use client'

import { getBooks } from "@/utils/api";
import Link from "next/link";
import { useEffect, useState } from "react";

type Book = { _id: string; name: string; description: string; coverImage: string; pdfFile: string };
const BookStore = () => {
    const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    getBooks().then((res) => setBooks(res.data)).catch(console.error);
  }, []);
    return (
        <div>
           <div className="max-w-5xl mx-auto p-5">
      <h2 className="text-2xl font-semibold mb-4">Available Books</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {books.map((book) => (
          <div key={book._id} className="border rounded-lg p-4">
            <img src={`http://localhost:7000/uploads/${book.coverImage}`} alt={book.name} className="w-full h-40 object-cover rounded" />
            <h3 className="text-lg font-semibold mt-2">{book.name}</h3>
            <p className="text-sm text-gray-600">{book.description}</p>
            <Link href={`http://localhost:7000/uploads/${book.pdfFile}`} target="_blank">
              <button className="bg-blue-500 text-white px-4 py-2 rounded mt-2">Read Book</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
        </div>
    );
};

export default BookStore;