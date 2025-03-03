import { Card, CardContent, CardFooter } from "@/components/ui/card";
import React from "react";
import Image from "next/image";

const Tools = () => {
  return (
    <>
      <h1 className="font-bold p-4 pb-0 text-[20px]">Tools</h1>
      <div className="grid gap-4 p-4 grid-cols-4">
        <Card className="hover:cursor-pointer flex-1 h-[200px] flex items-center flex-col justify-end overflow-hidden">
          <CardContent>
            <Image src="/robot.png" alt="ai" width={100} height={100} />
          </CardContent>
          <CardFooter> AI</CardFooter>
        </Card>
        <Card className="hover:cursor-pointer flex-1 h-[200px] flex items-center flex-col justify-end overflow-hidden">
          <CardContent>
            <Image src="/youtube.png" alt="ai" width={100} height={100} />
          </CardContent>
          <CardFooter>Youtube</CardFooter>
        </Card>
        <Card className="hover:cursor-pointer flex-1 h-[200px] flex items-center flex-col justify-end overflow-hidden">
          <CardContent>
            <Image src="/search.png" alt="ai" width={100} height={100} />
          </CardContent>
          <CardFooter>Search</CardFooter>
        </Card>
        <Card className="hover:cursor-pointer flex-1 h-[200px] flex items-center flex-col justify-end overflow-hidden">
          <CardContent>
            <Image src="/dictionary.png" alt="ai" width={100} height={100} />
          </CardContent>
          <CardFooter>Dictionary</CardFooter>
        </Card>
        <Card className="hover:cursor-pointer flex-1 h-[200px] flex items-center flex-col justify-end overflow-hidden">
          <CardContent>
            <Image src="/stopwatch.png" alt="ai" width={100} height={100} />
          </CardContent>
          <CardFooter>Timer</CardFooter>
        </Card>
        <Card className="hover:cursor-pointer flex-1 h-[200px] flex items-center flex-col justify-end overflow-hidden">
          <CardContent>
            <Image
              src="/periodic-table.png"
              alt="ai"
              width={100}
              height={100}
            />
          </CardContent>
          <CardFooter>Periodic Table</CardFooter>
        </Card>
        <Card className="hover:cursor-pointer flex-1 h-[200px] flex items-center flex-col justify-end overflow-hidden">
          <CardContent>
            <Image src="/calculator.png" alt="ai" width={100} height={100} />
          </CardContent>
          <CardFooter>Calculator</CardFooter>
        </Card>
        <Card className="hover:cursor-pointer flex-1 h-[200px] flex items-center flex-col justify-end overflow-hidden">
          <CardContent>
            <Image
              src="/science-fiction.png"
              alt="ai"
              width={100}
              height={100}
            />
          </CardContent>
          <CardFooter>Formula Book</CardFooter>
        </Card>
      </div>
    </>
  );
};

export default Tools;
