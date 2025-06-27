import { BriefcaseBusinessIcon, Calendar, Code2Icon, Component, LayoutDashboard, List, Puzzle, Settings, User2Icon, UserPlus2Icon, Users, Users2, Users2Icon, UserSquare, WalletCards } from "lucide-react";

export const SideBarOptions = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
    path: "/dashboard",
  },
  {
    name: "Scheduled Interview",
    icon: Calendar,
    path: "/scheduled-interview",
  },
  {
    name: "All Interview",
    icon: List,
    path: "/all-interview",
  },
  // {
  //   name: "Billing",
  //   icon: WalletCards,
  //   path: "/billing",
  // },
  // {
  //   name: "Settings",
  //   icon: Settings,
  //   path: "/settings",
  // },
];

export const InterviewType = [
  {
    title: "Technical",
    icon: Code2Icon,
  },
  {
    title: "Behavioral",
    icon: User2Icon,
  },
  {
    title: "Experience",
    icon: BriefcaseBusinessIcon,
  },
  {
    title: "Problem Solving",
    icon: Puzzle,
  },
  {
    title: "Leadership",
    icon: Component,
  },
];


export const QUESTIONS_PROMPT = `You are an expert technical interviewer.
Based on the following inputs, generate a well-structured list of high-quality interview questions: 
Job Title: {{jobTitle}} 
Job Description: {{JobDescription}} 
Interview Duration: {{duration}} 
Interview Type: {{type}} 

Your task:
1. Analyze the job description to identify key responsibilities, required skills, and expected experience.
2. Generate interview questions that match ONLY the selected interview type: {{type}}.
3. DO NOT include questions from other types. Only generate questions that fall strictly under the "{{type}}" category.
4. Adjust the number and depth of questions to match the interview duration.
5. Ensure the tone and structure reflects a real-life {{type}} interview.

Format your response in JSON format as shown below:
interviewQuestions = [
  {
    question: "",
    type: "{{type}}"
  },
  ...
]

IMPORTANT:
- Generate ONLY questions of type "{{type}}". Do not include any other types.
- Respond with a single valid JSON object only. No explanations, markdown, or formatting.
- Do NOT include triple backticks or headings.
`;


// export const FEEDBACK_PROMPT = `{{conversation}}
// Depends on this Interview Conversation between assistant and user,  
// Give me feedback for user interview. Give me rating out of 10 for technical Skills, Communication, Problem Solving, Experience.  
// Also give me summery in 3 lines about the interview and one line to let me know whether is recommanded for hire or not with msg.  
// Give me response in JSON format
// consider below as example

// {
//   feedback:{
//     rating:{
//       techicalSkills: 5,
//       communication: 6,
//       problemSolving: 4,
//       experince: 7,
//       total_rating: 5
//     },
//     summery: <in 3 Line>,
//     Recommendation:"",
//     RecommendationMsg: ""
//   }
// }
// `


export const FEEDBACK_PROMPT = `{{conversation}}

Based on the above interview conversation between the assistant and the user (candidate), provide a detailed evaluation of the user's performance.

If the conversation is incomplete, too short, or lacks meaningful technical content, give low ratings (≤3), and set "recommendation" to "No".

Your response must be in strict JSON format with the following structure:

{
  "feedback": {
    "rating": {
      "technicalSkills": <number between 1-10>,
      "communication": <number between 1-10>,
      "problemSolving": <number between 1-10>,
      "experience": <number between 1-10>,
      "total_rating": <average or overall score out of 10>
    },
    "summary": "<A brief summary of the interview in 3 concise lines>",
    "recommendation": "<Yes or No>",
    "recommendationMsg": "<A short sentence explaining whether the candidate is recommended for hiring and why>"
  }
}

Rules:
- If the candidate gave no meaningful responses, or the conversation was interrupted or incomplete, assign low ratings and do not recommend.
- Base your judgment only on the content of the conversation. Do not make assumptions.
- Respond only with the JSON. No extra commentary.
`;

