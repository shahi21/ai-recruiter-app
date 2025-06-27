'use client'
import { useUser } from '@/app/provider';
import { supabase } from '@/services/supabaseClient'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import InterviewDetailContainer from './_components/InterviewDetailContainer';
import CandidateList from './_components/CandidateList';

function InterviewDetail() {
    const { interview_id } = useParams();
    const {user} =useUser();
    const [interviewDetail, setInterviewDetail] = useState()

    useEffect(()=>{
        user && GetInterviewDetail();
    },[user])

    const GetInterviewDetail=async()=>{
          const result = await supabase
            .from("interviews")
            .select(
              `jobPosition,
                    jobDescription,
                    questionList,
                    duration,
                    type,
                    interview_id,
                    created_at,
                    interview-feedback(userEmail,userName,feedback,created_at)`
            )
            .eq("userEmail", user?.email)
            .eq("interview_id", interview_id);
                
            setInterviewDetail(result?.data[0]);
                console.log(result)
    }

  return (
    <div className='mt-5'>
        <h2 className='font-bold text-2xl'>Interview Detail</h2>
        <InterviewDetailContainer interviewDetail={interviewDetail} />
        <CandidateList candidateList={interviewDetail?.['interview-feedback']} />
    </div>
  )
}

export default InterviewDetail