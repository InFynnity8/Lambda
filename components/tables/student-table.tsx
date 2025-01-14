'use client'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import React from "react";

const students = [
  {
    Name: "John Doe",
    Class: "First Year",
    Gender: "Male",
    Performance: 85,
    Remarks: "Excellent",
  },
  {
    Name: "Jane Smith",
    Class: "First Year",
    Gender: "Female",
    Performance: 78,
    Remarks: "Good",
  },
  {
    Name: "Samuel Carter",
    Class: "Second Year",
    Gender: "Male",
    Performance: 92,
    Remarks: "Outstanding",
  },
  {
    Name: "Emily Johnson",
    Class: "Second Year",
    Gender: "Female",
    Performance: 88,
    Remarks: "Great",
  },
  {
    Name: "Michael Brown",
    Class: "Third Year",
    Gender: "Male",
    Performance: 75,
    Remarks: "Satisfactory",
  },
  {
    Name: "Sarah Davis",
    Class: "Third Year",
    Gender: "Female",
    Performance: 90,
    Remarks: "Very Good",
  },
  {
    Name: "David Wilson",
    Class: "First Year",
    Gender: "Male",
    Performance: 65,
    Remarks: "Needs Improvement",
  },
  {
    Name: "Olivia Moore",
    Class: "First Year",
    Gender: "Female",
    Performance: 80,
    Remarks: "Good",
  },
  {
    Name: "Ethan Lee",
    Class: "Second Year",
    Gender: "Male",
    Performance: 70,
    Remarks: "Average",
  },
  {
    Name: "Sophia White",
    Class: "Second Year",
    Gender: "Female",
    Performance: 95,
    Remarks: "Excellent",
  },
  {
    Name: "Daniel Harris",
    Class: "Third Year",
    Gender: "Male",
    Performance: 60,
    Remarks: "Below Expectations",
  },
  {
    Name: "Charlotte Clark",
    Class: "Third Year",
    Gender: "Female",
    Performance: 82,
    Remarks: "Good",
  },
];

const totals = {
    overallPerformance: students.reduce((acc, curr) => acc + curr.Performance, 0),
  };

export default function TableDemo() { 

    const total = React.useMemo(() => totals, []);
  return (
    <div className="border rounded-xl overflow-hidden pb-4">
      <Table>
        <TableCaption>A list of students data summary. <Link href='/teacher/bio' className="text-primary">view details</Link></TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="">Student name</TableHead>
            <TableHead className="">Year</TableHead>
            <TableHead>Gender</TableHead>
            <TableHead>Remarks</TableHead>
            <TableHead className="text-right">Performance (%)</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {students.map((stu) => (
            <TableRow key={stu.Name}>
              <TableCell className="font-medium">{stu.Name}</TableCell>
              <TableCell className="font-medium">{stu.Class}</TableCell>
              <TableCell>{stu.Gender}</TableCell>
              <TableCell>{stu.Remarks}</TableCell>
              <TableCell className="text-right">{stu.Performance}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={4}>Overall team performance</TableCell>
            <TableCell className="text-right">{total.overallPerformance/students.length}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
