"use client";

import React from "react";
import { DataTableDemo } from "@/components/tables/data-table";
import {contestColumns} from "@/components/columns/contest-columns"
import { Contest } from "@/types/bank";

const data: Contest[] =[
    { "title": "NSMQ Contest 1", "subject": "biology", "year": 2016, "round": 1 },
    { "title": "NSMQ Contest 2", "subject": "mathematics", "year": 2017, "round": 2 },
    { "title": "NSMQ Contest 3", "subject": "chemistry", "year": 2018, "round": 3 },
    { "title": "NSMQ Contest 4", "subject": "physics", "year": 2019, "round": 4 },
    { "title": "NSMQ Contest 5", "subject": "mixed", "year": 2020, "round": 5 },
    { "title": "NSMQ Contest 6", "subject": "biology", "year": 2021, "round": 1 },
    { "title": "NSMQ Contest 7", "subject": "physics", "year": 2022, "round": 2 },
    { "title": "NSMQ Contest 8", "subject": "chemistry", "year": 2023, "round": 3 },
    { "title": "NSMQ Contest 9", "subject": "mathematics", "year": 2024, "round": 4 },
    { "title": "NSMQ Contest 10", "subject": "mixed", "year": 2016, "round": 5 },
    { "title": "NSMQ Contest 11", "subject": "biology", "year": 2017, "round": 1 },
    { "title": "NSMQ Contest 12", "subject": "chemistry", "year": 2018, "round": 2 },
    { "title": "NSMQ Contest 13", "subject": "physics", "year": 2019, "round": 3 },
    { "title": "NSMQ Contest 14", "subject": "mathematics", "year": 2020, "round": 4 },
    { "title": "NSMQ Contest 15", "subject": "mixed", "year": 2021, "round": 5 },
    { "title": "NSMQ Contest 16", "subject": "biology", "year": 2022, "round": 1 },
    { "title": "NSMQ Contest 17", "subject": "chemistry", "year": 2023, "round": 2 },
    { "title": "NSMQ Contest 18", "subject": "physics", "year": 2024, "round": 3 },
    { "title": "NSMQ Contest 19", "subject": "mathematics", "year": 2016, "round": 4 },
    { "title": "NSMQ Contest 20", "subject": "mixed", "year": 2017, "round": 5 },
    { "title": "NSMQ Contest 21", "subject": "biology", "year": 2018, "round": 1 },
    { "title": "NSMQ Contest 22", "subject": "physics", "year": 2019, "round": 2 },
    { "title": "NSMQ Contest 23", "subject": "chemistry", "year": 2020, "round": 3 },
    { "title": "NSMQ Contest 24", "subject": "mathematics", "year": 2021, "round": 4 },
    { "title": "NSMQ Contest 25", "subject": "mixed", "year": 2022, "round": 5 },
    { "title": "NSMQ Contest 26", "subject": "biology", "year": 2023, "round": 1 },
    { "title": "NSMQ Contest 27", "subject": "physics", "year": 2024, "round": 2 },
    { "title": "NSMQ Contest 28", "subject": "chemistry", "year": 2016, "round": 3 },
    { "title": "NSMQ Contest 29", "subject": "mathematics", "year": 2017, "round": 4 },
    { "title": "NSMQ Contest 30", "subject": "mixed", "year": 2018, "round": 5 },
    { "title": "NSMQ Contest 31", "subject": "biology", "year": 2019, "round": 1 },
    { "title": "NSMQ Contest 32", "subject": "chemistry", "year": 2020, "round": 2 },
    { "title": "NSMQ Contest 33", "subject": "physics", "year": 2021, "round": 3 },
    { "title": "NSMQ Contest 34", "subject": "mathematics", "year": 2022, "round": 4 },
    { "title": "NSMQ Contest 35", "subject": "mixed", "year": 2023, "round": 5 },
    { "title": "NSMQ Contest 36", "subject": "biology", "year": 2024, "round": 1 },
    { "title": "NSMQ Contest 37", "subject": "physics", "year": 2016, "round": 2 },
    { "title": "NSMQ Contest 38", "subject": "chemistry", "year": 2017, "round": 3 },
    { "title": "NSMQ Contest 39", "subject": "mathematics", "year": 2018, "round": 4 },
    { "title": "NSMQ Contest 40", "subject": "mixed", "year": 2019, "round": 5 }
  ]


const Page: React.FC = () => { 
 
  return (
    <div className="w-full">
     <DataTableDemo columns={contestColumns} data={data} columnFilter="title"/>
    </div>
  );
};

export default Page;
