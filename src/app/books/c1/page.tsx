'use client';
// c1 book
import Link from 'next/link';
import { useEffect, useState } from 'react';

type Book = {
  _id: string;
  name: string;
  description: string;
  category: string;
  coverImage: string;
  pdfFile: string;
};

const C1 = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await fetch('http://localhost:7000/books');
        if (!res.ok) throw new Error('Failed to fetch books');
        const data: Book[] = await res.json();
        const filtered = data.filter((book) => book.category === 'c1');
        setBooks(filtered);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('Unknown error');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  if (loading) return <p className="p-4">Loading A1 books...</p>;
  if (error) return <p className="p-4 text-red-500">Error: {error}</p>;

  return (
    <div className="p-6">
      {books.length === 0 ? (
        <p>No A1 books found.</p>
      ) : (
        <div className="mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-10">
          {books.map((book) => (
            <div
              key={book._id}
              className="relative flex w-96 flex-col rounded-xl bg-gray-900 bg-clip-border text-white shadow-md"
            >
              <div className="relative px-5 mt-4 h-72 overflow-hidden rounded-x text-white">
                <img
                  src={`http://localhost:7000/uploads/${book.coverImage}`}
                  alt={book.name}
                  className="h-72 w-96 object-cover"
                />
              </div>
              <div className="p-6">
                <p className="block font-sans text-2xl font-bold mb-2 leading-relaxed text-white antialiased text-center">
                  {book.name}
                </p>

                <p className="block font-sans text-sm font-normal leading-normal text-white antialiased opacity-75">
                  With plenty of talk and listen time, voice-activated Siri
                  access, and an available wireless charging case.
                </p>
              </div>
              <div className="p-6 pt-0">
                <Link
                  href={`http://localhost:7000/uploads/${book.pdfFile}`}
                  target="_blank"
                >
                  <button className="block w-48 mx-auto mt-2 select-none rounded-lg bg-sky-600 py-3 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                    Read Book
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      )}
    </div>
  );
};

export default C1;
