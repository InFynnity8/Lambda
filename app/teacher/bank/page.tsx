import React from "react";

import { TabsContent } from "@/components/ui/tabs";
import { Folder } from "lucide-react";
import { Card } from "@/components/ui/card";
import Link from "next/link";

const contestsCategory = [
  {
    name: "national",
    label: "Nationals",
    url: "/teacher/bank/nationals"
  },
  {
    name: "regional",
    label: "Regionals",
    url: "/teacher/bank/regionals"
  },
  {
    name: "trial",
    label: "Trials",
    url: "/teacher/bank/trials"
  },
  {
    name: "qualifiers",
    label: "Qualifiers",
    url: "/teacher/bank/qualifiers"
  },
  {
    name: "others",
    label: "Others",
    url: "/teacher/bank/others"
  },
];

const questionsCategory = [
  {
    name: "biology",
    label: "Biology",
  },
  {
    name: "chemistry",
    label: "Chemistry",
  },
  {
    name: "physics",
    label: "Physics",
  },
  {
    name: "mathematics",
    label: "Mathematics",
  },
  {
    name: "mixed",
    label: "Mixed",
  },
];

const booksCategory = [
  {
    name: "biology",
    label: "Biology",
  },
  {
    name: "chemistry",
    label: "Chemistry",
  },
  {
    name: "physics",
    label: "Physics",
  },
  {
    name: "mathematics",
    label: "Mathematics",
  },
  {
    name: "special",
    label: "Special",
  },
];

const boltCategory = [
  {
    name: "fundamentals",
    label: "Fundamentals",
  },
  {
    name: "speed",
    label: "Speed Race",
  },
  {
    name: "pod",
    label: "POD",
  },
  {
    name: "tof",
    label: "True or False",
  },
  {
    name: "riddles",
    label: "Riddles",
  },
];

const topicsCategory = [
  {
    name: "biology",
    label: "Biology",
  },
  {
    name: "chemistry",
    label: "Chemistry",
  },
  {
    name: "physics",
    label: "Physics",
  },
  {
    name: "mathematics",
    label: "Mathematics",
  },
];

const Bank = () => {
  return (
    <>
      <TabsContent value="contests" className="w-full">
        <div className="flex w-full items-center flex-col">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full rounded-xl items-center max-w-[850px]">
            {contestsCategory.map((item) => (
              <Link href={item.url} key={item.name}>
                <Card
                  draggable={true}
                  className="transition-all flex flex-col items-center hover:shadow-xl hover:scale-[101%] hover:cursor-pointer h-[200px] justify-center"
                >
                  <Folder name={item.name} className="size-16" />
                  <label htmlFor={item.name}>{item.label}</label>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </TabsContent>
      <TabsContent value="questions" className="w-full">
        <div className="flex w-full items-center flex-col gap-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full rounded-xl items-center max-w-[850px]">
            {questionsCategory.map((item) => (
              <Card
                draggable={true}
                key={item.name}
                className="transition-all flex flex-col items-center hover:shadow-xl hover:scale-[101%] hover:cursor-pointer h-[200px] justify-center"
              >
                <Folder name={item.name} className="size-16" />
                <label htmlFor={item.name}>{item.label}</label>
              </Card>
            ))}
          </div>
        </div>
      </TabsContent>
      <TabsContent value="books" className="w-full">
        <div className="flex w-full gap-4 items-center flex-col">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full rounded-xl items-center max-w-[850px]">
            {booksCategory.map((item) => (
              <Card
                draggable={true}
                key={item.name}
                className="transition-all flex flex-col items-center hover:shadow-xl hover:scale-[101%] hover:cursor-pointer h-[200px] justify-center"
              >
                <Folder name={item.name} className="size-16" />
                <label htmlFor={item.name}>{item.label}</label>
              </Card>
            ))}
          </div>
        </div>
      </TabsContent>
      <TabsContent value="bolt" className="w-full">
        <div className="flex w-full gap-4 items-center flex-col">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full rounded-xl items-center max-w-[850px]">
            {boltCategory.map((item) => (
              <Card
                draggable={true}
                key={item.name}
                className="transition-all flex flex-col items-center hover:shadow-xl hover:scale-[101%] hover:cursor-pointer h-[200px] justify-center"
              >
                <Folder name={item.name} className="size-16" />
                <label htmlFor={item.name}>{item.label}</label>
              </Card>
            ))}
          </div>
        </div>
      </TabsContent>
      <TabsContent value="topics" className="w-full">
        <div className="flex w-full gap-4 items-center flex-col">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full rounded-xl items-center max-w-[850px]">
            {topicsCategory.map((item) => (
              <Card
                draggable={true}
                key={item.name}
                className="transition-all flex flex-col items-center hover:shadow-xl hover:scale-[101%] hover:cursor-pointer h-[200px] justify-center"
              >
                <Folder name={item.name} className="size-16" />
                <label htmlFor={item.name}>{item.label}</label>
              </Card>
            ))}
          </div>
        </div>
      </TabsContent>
    </>
  );
};

export default Bank;
