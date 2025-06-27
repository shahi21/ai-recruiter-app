'use client'
import { Button } from '@/components/ui/button';
import { supabase } from '@/services/supabaseClient';
import Image from 'next/image'
import React from 'react'

function Login() {
/**
 * used to sign in with google
 *  */ 
const signInWithGoogle=async()=>{
  const {error}= await supabase.auth.signInWithOAuth({
    provider:'google',
     options: {
      redirectTo: 'http://localhost:3000/auth/callback', // ✅ Replace with your callback route
    },
  })
  if(error){
    console.error('Error: ',error.message)
    
  }
}


  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="flex flex-col items-center border rounded-2xl p-8">
        <Image
          src={"/logo1.png"}
          alt="logo"
          width={200}
          height={150}
          className="w-[150px] "
        />
        <div className="flex items-center flex-col">
          <Image
            src={"/login.png"}
            alt="login"
            width={600}
            height={600}
            className="w-[400px] h-[250px] rounded-2xl"
          />
          <h2 className="text-2xl font-bold text-center mt-5">
            Welcome to AI Recruiter
          </h2>
          <p className="text-gray-500 text-center">
            Sign In with Google Authentication
          </p>
          <Button className="mt-7 w-full" onClick ={signInWithGoogle} >Login with Google</Button>
          
        </div>
      </div>
    </div>
  );
}

export default Login