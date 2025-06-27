import { SendHorizonal, SendHorizonalIcon, SendIcon } from 'lucide-react';
import Image from 'next/image'
import React from 'react'

function InterviewComplete() {
  return (
    <div className="flex flex-col items-center justify-center bg-white px-4 py-8 min-h-screen ">
      <Image
        src={"/check.png"}
        alt="check"
        width={400}
        height={400}
        className="w-[100px] h-[100px]"
      />
      <h2 className="text-3xl font-bold mb-2 text-center">Interview Completed!</h2>
      <p className="text-gray-600 text-center mb-7">
        Thank you for participating in the interview with AI Recruiter
      </p>

      <div className="bg-white p-6 rounded-xl shadow-md max-w-2xl w-full mb-6">
        <Image
          src={"/interview-complete.png"}
          alt="interview-complete"
          width={400}
          height={400}
          className="w-[500px] h-[500px] mx-auto"
        />
      </div>

      <div>
           <div className="bg-white rounded-lg p-6 w-full max-w-xl text-center">
        <div className="flex justify-center mb-3">
          <SendIcon className="text-blue-500 w-6 h-6" />
        </div>
        <h2 className="text-lg font-semibold mb-2">What's Next?</h2>
        <p className="text-sm text-gray-600">
          The recruiter will review your interview responses and contact you
          <span className="text-blue-600 font-medium"> soon regarding the next steps.</span>
        </p>
        <p className="text-xs text-gray-400 mt-2">⏱ Response within 2-3 business days</p>
      </div>
      </div>
    </div>
  );
}

export default InterviewComplete