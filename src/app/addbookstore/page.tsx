"use client";

import { uploadBook } from "@/utils/api";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

const AddBookStore = () => {
  const [book, setBook] = useState({ name: "", description: "" });
  const [coverImage, setCoverImage] = useState<File | null>(null);
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!book.name || !book.description || !coverImage || !pdfFile) {
      toast.error("All fields are required");
      return;
    }

    const formData = new FormData();
    formData.append("name", book.name);
    formData.append("description", book.description);
    formData.append("coverImage", coverImage);
    formData.append("pdfFile", pdfFile);

    try {
      const response = await uploadBook(formData);

      if (response) {
        toast.success("Book uploaded successfully!");

        // Reset form
        setBook({ name: "", description: "" });
        setCoverImage(null);
        setPdfFile(null);

        // Reset file inputs
        const coverInput = document.getElementById(
          "coverImage"
        ) as HTMLInputElement;
        const pdfInput = document.getElementById("pdfFile") as HTMLInputElement;
        if (coverInput) coverInput.value = "";
        if (pdfInput) pdfInput.value = "";

        // Navigate using await
        await router.push("/bookstore");
      }
    } catch (err: unknown) {
      console.error("Upload failed:", err);
      toast.error("Upload failed");
    }
  };
  return (
    <div className="max-w-4xl mx-auto p-5">
      <div className="mx-auto py-8">
        <h1 className="text-2xl font-bold mb-6 text-center">Add Book For Book Store</h1>
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md"
        >
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Title
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 bg-gray-200 text-black rounded-md focus:outline-none focus:border-indigo-500"
              value={book.name}
              onChange={(e) => setBook({ ...book, name: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Description
            </label>
            <textarea
              placeholder="Description"
              className="w-full px-3 py-2 border border-gray-300 bg-gray-200 text-black rounded-md focus:outline-none focus:border-indigo-500"
              value={book.description}
              onChange={(e) =>
                setBook({ ...book, description: e.target.value })
              }
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Cover Image
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 bg-gray-200 text-black rounded-md focus:outline-none focus:border-indigo-500"
              type="file"
              accept="image/*"
              onChange={(e) => setCoverImage(e.target.files?.[0] || null)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Book Pdf
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 bg-gray-200 text-black rounded-md focus:outline-none focus:border-indigo-500"
              type="file"
              accept="application/pdf"
              onChange={(e) => setPdfFile(e.target.files?.[0] || null)}
            />
          </div>
          <button
            className="w-full bg-indigo-500 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"
            type="submit"
          >
            Upload For Book Store
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBookStore;
