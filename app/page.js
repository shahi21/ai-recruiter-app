import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
 <div>
  <h2>AI Recruiter Voice Agent</h2>
  <Link href={'/auth'}>
  <Button>Get Started</Button>
  </Link>
 </div>
  );
}
