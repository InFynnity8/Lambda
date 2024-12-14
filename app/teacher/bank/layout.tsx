"use client";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Layout({ children }: { children: React.ReactNode }) {
  //   const pathname = usePathname();
  const router = useRouter();
  const handleHistory = () => router.back();
  return (
    <div className=" flex flex-col items-center p-4">

      <Tabs
        defaultValue="contests"
        className="w-full box-border flex flex-col items-center gap-4 "
      >
        <div className="flex items-center justify-between w-full">
          <Button variant="outline" onClick={handleHistory} className="px-2">
            <ChevronLeft />
          </Button>
          <TabsList>
            <TabsTrigger
              value="contests"
              onClick={() => router.push("/teacher/bank")}
            >
              Contests
            </TabsTrigger>
            <TabsTrigger
              value="questions"
              onClick={() => router.push("/teacher/bank")}
            >
              Questions
            </TabsTrigger>
            <TabsTrigger
              value="books"
              onClick={() => router.push("/teacher/bank")}
            >
              Books
            </TabsTrigger>
            <TabsTrigger
              value="bolt"
              onClick={() => router.push("/teacher/bank")}
            >
              Thunderbolt
            </TabsTrigger>
            <TabsTrigger
              value="topics"
              onClick={() => router.push("/teacher/bank")}
            >
              Topics
            </TabsTrigger>
          </TabsList>
          <div className="">🐏</div>
        </div>
        {children}
      </Tabs>
    </div>
  );
}
