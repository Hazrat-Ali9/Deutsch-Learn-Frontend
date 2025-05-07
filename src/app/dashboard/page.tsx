'use client'
// Dashboard page

import { auth } from "@/firebase/firebaseConfig";
import { signOut, User } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Dashboard = () => {
    const [user, setUser] = useState<User | null>(null);
  const router = useRouter();
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
  
    const handleLogout = async () => {
      try {
        await signOut(auth);
        router.push('/login');
      } catch (error) {
        console.error('Error signing out:', error);
      }
    };
  
    return (
        <div>
            {user ? (
        <div>
            <div>
              <div >
                <p className="text-md text-white font-medium">
                  {user.displayName || 'User'}
                </p>
                <p className="text-md text-white truncate">
                  {user.email}
                </p>
              </div>
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 text-sm text-white"
              >
                Logout
              </button>
            </div>
        
        </div>
      ) : (
        <Link href="/login" className="flex items-center">
     Login
        </Link>
      )}
        </div>
    );
};

export default Dashboard;