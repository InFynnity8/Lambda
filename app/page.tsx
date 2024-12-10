import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center flex-col h-[100vh]">
      <h1>Welcome to Lambda</h1>
      <Link href="/teacher">
        <Button variant="outline" className="m-5">Teacher</Button>
      </Link>

      <Link href="/teacher">
        <Button variant="outline">Student</Button>
      </Link>
    </div>
  );
}
