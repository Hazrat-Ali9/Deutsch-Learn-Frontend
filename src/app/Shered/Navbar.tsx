"use client";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { FaBars, FaTimes, FaChevronDown, FaUserCircle } from "react-icons/fa";
import { IoMdLogIn } from "react-icons/io";
import Link from "next/link";
import { signOut, User } from "firebase/auth";
import { auth } from "@/firebase/firebaseConfig";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isBookOpen, setIsBookOpen] = useState(false);
  const [isVerbOpen, setIsVerbOpen] = useState(false);
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isModalOpen && 
        modalRef.current && 
        !modalRef.current.contains(event.target as Node) &&
        !(event.target as HTMLElement).closest('button[aria-label="User menu"]')
      ) {
        setIsModalOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push('/login');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const handleNavigation = (route: string) => {
    router.push(route);
    setMenuOpen(false); 
    setIsModalOpen(false);
  };

 

  return (
    <nav className="bg-transparent text-white fixed top-0 left-0 w-full z-50">
      <div className="w-full px-10 mx-auto flex items-center justify-between">
        {/* Left Side - Login Button */}
        <img className="w-16" src="https://i.postimg.cc/pXnk6qdx/Whats-App-Image-2025-02-02-at-22-17-29-5cbe6a48-removebg-preview.png" alt="" />
        

        {/* Center - Navbar Links for Desktop */}
        <ul className="hidden md:flex gap-14 text-sm font-bold">
          <Link href='/'><li className=" cursor-pointer hover:text-amber-600">Home</li></Link>
          <Link href='story'><li className="hover:text-amber-600 cursor-pointer">Story</li></Link>
          
          <li
            className="relative cursor-pointer flex items-center gap-4 hover:text-amber-600"
            onMouseEnter={() => setIsBookOpen(true)}
            onMouseLeave={() => setIsBookOpen(false)}
          >
            Books <FaChevronDown size={12} />
            {isBookOpen && (
              <ul className="absolute top-full left-0 bg-gray-700 text-white w-28 rounded-md shadow-lg z-50">
                <Link href='/books/all/'><li className="px-4 py-2 hover:bg-gray-600">ALL</li></Link>
                <Link href='/books/a1/'><li className="px-4 py-2 hover:bg-gray-600">A1</li></Link>
                <Link href='/books/a2'><li className="px-4 py-2 hover:bg-gray-600">A2</li></Link>
                <Link href='/books/b1/'><li className="px-4 py-2 hover:bg-gray-600">B1</li></Link>
                <Link href='/books/b2'><li className="px-4 py-2 hover:bg-gray-600">B2</li></Link>
                <Link href='/books/c1/'><li className="px-4 py-2 hover:bg-gray-600">C1</li></Link>
                <Link href='/books/c2'><li className="px-4 py-2 hover:bg-gray-600">C2</li></Link>
              </ul>
            )}
          </li>
          <Link href='/model'><li
            className="relative cursor-pointer flex items-center gap-4 hover:text-amber-600"
           
          >
            Model Test
          </li></Link>
          <Link href='/exam'><li
            className="relative cursor-pointer flex items-center gap-4 hover:text-amber-600"
           
          >
            Exam
          </li></Link>
          <Link href='/goethe'><li
            className="relative cursor-pointer flex items-center gap-4 hover:text-amber-600"
           
          >
            Goethe Zertifikat Prüfung
          </li></Link>
          <Link href='/bookstore'><li
            className="relative cursor-pointer flex items-center gap-4 hover:text-amber-600"
           
          >
          Book Store
          </li></Link>
          <Link href='/grammar'><li
            className="relative cursor-pointer flex items-center gap-4 hover:text-amber-600"
           
          >
          Grammar
          </li></Link>
          <Link href='/vocabulary'><li
            className="relative cursor-pointer flex items-center gap-4 hover:text-amber-600"
           
          >
          Vocabulary
          </li></Link>
          <Link href='/blog'><li
            className="relative cursor-pointer flex items-center gap-4 hover:text-amber-600"
           
          >
          Blog
          </li></Link>
          <Link href='/articles'><li
            className="relative cursor-pointer flex items-center gap-4 hover:text-amber-600"
           
          >
          Articles
          </li></Link>
        </ul>

        {/* Right Side - Logo */}
      
        <div className="flex items-center space-x-4">
      {user ? (
        <div className="relative">
          <button 
            onClick={() => setIsModalOpen(!isModalOpen)}
            className="flex items-center focus:outline-none"
            aria-label="User menu"
          >
            {user.photoURL ? (
              <img 
                src={user.photoURL} 
                alt="User profile" 
                className="w-10 h-10 rounded-full object-cover"
                referrerPolicy="no-referrer"
              />
            ) : (
              <FaUserCircle className="text-white w-7 h-7 hover:text-amber-600" />
            )}
          </button>
          
          {isModalOpen && (
            <div ref={modalRef} className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
              <div className="px-4 py-2 border-b">
                <p className="text-sm text-gray-700 font-medium">
                  {user.displayName || 'User'}
                </p>
                <p className="text-xs text-gray-500 truncate">
                  {user.email}
                </p>
              </div>
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-gray-100"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      ) : (
        <Link href="/login" className="flex items-center">
          <IoMdLogIn className="text-white w-7 h-7 hover:text-amber-600" />
        </Link>
      )}
    </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden mt-3 bg-gray-800">
          <ul className="flex flex-col items-center gap-3 text-lg">
            <li className="hover:text-gray-300 cursor-pointer" onClick={() => handleNavigation("/")}>Home</li>
            <li className="hover:text-gray-300 cursor-pointer" onClick={() => handleNavigation("/blog")}>Blog</li>
            <li className="hover:text-gray-300 cursor-pointer" onClick={() => handleNavigation("/article")}>Article</li>

            {/* Books Dropdown */}
            <li className="w-full text-center bg-gray-700 py-2 rounded-md">
              <div
                className="flex justify-center items-center gap-1 cursor-pointer"
                onClick={() => setIsBookOpen(!isBookOpen)}
              >
                Books <FaChevronDown size={12} />
              </div>
              {isBookOpen && (
                <ul className="mt-2">
                  <li className="py-1 hover:bg-gray-600" onClick={() => handleNavigation("/books/book1")}>Book1</li>
                  <li className="py-1 hover:bg-gray-600" onClick={() => handleNavigation("/books/book2")}>Book2</li>
                  <li className="py-1 hover:bg-gray-600" onClick={() => handleNavigation("/books/book3")}>Book3</li>
                </ul>
              )}
            </li>

            {/* Verbs Dropdown */}
            <li className="w-full text-center bg-gray-700 py-2 rounded-md">
              <div
                className="flex justify-center items-center gap-1 cursor-pointer"
                onClick={() => setIsVerbOpen(!isVerbOpen)}
              >
                Verbs <FaChevronDown size={12} />
              </div>
              {isVerbOpen && (
                <ul className="mt-2">
                  <li className="py-1 hover:bg-gray-600" onClick={() => handleNavigation("/verbs/verb1")}>Verb1</li>
                  <li className="py-1 hover:bg-gray-600" onClick={() => handleNavigation("/verbs/verb2")}>Verb2</li>
                  <li className="py-1 hover:bg-gray-600" onClick={() => handleNavigation("/verbs/verb3")}>Verb3</li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
