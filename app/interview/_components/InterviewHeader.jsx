import Image from 'next/image'
import React from 'react'

function InterviewHeader() {
  return (
    <div className='p-3 shadow-sm bg-white'>
        <Image src={'/logo1.png'} alt='logo' width={120} height={100} 
        className='w-[120px] my-[-5px]'
        />
    </div>
  )
}

export default InterviewHeader