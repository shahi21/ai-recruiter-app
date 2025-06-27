'use client'
import { useUser } from '@/app/provider'
import { supabase } from '@/services/supabaseClient';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import React from 'react'

function WelcomeContainer() {
    const {user}= useUser();
  const router = useRouter();

    const handleLogout = async() =>{
        await supabase.auth.signOut();
        router.push('/')
    }
  return (
    <div className="bg-white p-5 rounded-xl flex justify-between items-center ">
      <div>
        <h2 className="text-lg font-bold">Welcome Back, {user?.name}</h2>
        <h2 className="text-gray-500">
          AI-Driven Interviews, Hassle Free Hiring
        </h2>
      </div>
      {user && (
        <Image
          src={user?.picture}
          alt="profile"
          width={40}
          height={40}
          className="rounded-full cursor-pointer"
          onClick={handleLogout}
          title='click here to logout'
        />
      )}
    </div>
  );
}

export default WelcomeContainer