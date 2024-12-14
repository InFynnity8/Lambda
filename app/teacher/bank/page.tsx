import React from "react";
import { FcFolder } from "react-icons/fc";
import { TabsContent } from "@/components/ui/tabs";
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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 w-full rounded-xl items-center max-w-[850px]">
            {contestsCategory.map((item) => (
              <Link href={item.url} key={item.name}>
                <Card
                  draggable={true}
                  className="border-none hover:bg-muted rounded-[3px] shadow-none transition-all flex flex-col items-center hover:cursor-pointer h-[150px] justify-center"
                ><FcFolder name={item.name} className="size-36"/>
                  <label htmlFor={item.name}>{item.label}</label>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </TabsContent>
      <TabsContent value="questions" className="w-full">
        <div className="flex w-full items-center flex-col gap-4">
          <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 w-full rounded-xl items-center max-w-[850px]">
            {questionsCategory.map((item) => (
              <Card
                draggable={true}
                key={item.name}
                className="border-none hover:bg-muted rounded-[3px] shadow-none transition-all flex flex-col items-center hover:cursor-pointer h-[150px] justify-center"
                ><FcFolder name={item.name} className="size-36"/>
                <label htmlFor={item.name}>{item.label}</label>
              </Card>
            ))}
          </div>
        </div>
      </TabsContent>
      <TabsContent value="books" className="w-full">
        <div className="flex w-full gap-4 items-center flex-col">
          <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 w-full rounded-xl items-center max-w-[850px]">
            {booksCategory.map((item) => (
              <Card
                draggable={true}
                key={item.name}
                className="border-none hover:bg-muted rounded-[3px] shadow-none transition-all flex flex-col items-center hover:cursor-pointer h-[150px] justify-center"
                ><FcFolder name={item.name} className="size-36"/>
                <label htmlFor={item.name}>{item.label}</label>
              </Card>
            ))}
          </div>
        </div>
      </TabsContent>
      <TabsContent value="bolt" className="w-full">
        <div className="flex w-full gap-4 items-center flex-col">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 w-full rounded-xl items-center max-w-[850px]">
            {boltCategory.map((item) => (
              <Card
                draggable={true}
                key={item.name}
                className="border-none hover:bg-muted rounded-[3px] shadow-none transition-all flex flex-col items-center hover:cursor-pointer h-[150px] justify-center"
                ><FcFolder name={item.name} className="size-36"/>
                <label htmlFor={item.name}>{item.label}</label>
              </Card>
            ))}
          </div>
        </div>
      </TabsContent>
      <TabsContent value="topics" className="w-full">
        <div className="flex w-full gap-4 items-center flex-col">
          <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-full rounded-xl items-center max-w-[850px]">
            {topicsCategory.map((item) => (
              <Card
                draggable={true}
                key={item.name}
                className="border-none hover:bg-muted rounded-[3px] shadow-none transition-all flex flex-col items-center hover:cursor-pointer h-[150px] justify-center"
                ><FcFolder name={item.name} className="size-36"/>
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
