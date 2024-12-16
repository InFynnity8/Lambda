"use client";

import * as React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import BioModal from "../bio/bio-modal";

import { Button } from "@/components/ui/button";

import { StudentBio } from "@/types/bio";

export const studentColumns: ColumnDef<StudentBio>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="p-0"
          >
            Name
            <ArrowUpDown />
          </Button>
        );
      },
    cell: ({ row }) => (
      <div className="capitalize flex items-center">
        {row.getValue("name")}
      </div>
    ),
  },
  {
    accessorKey: "year",
    header: 'Year',
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("year")}</div>
    ),
  },
  {
    accessorKey: "gender",
    header: () => <div className="">Gender</div>,
    cell: ({ row }) => {
      return (
        <div className="font-medium">{row.getValue("gender")}</div>
      );
    },
  },
  {
    accessorKey: "role",
    header: () => <div className="">Role</div>,
    cell: ({ row }) => {
      return (
        <div className=" font-medium">{row.getValue("role")}</div>
      );
    },
  },
  {
    accessorKey: "performance",
    header: () => <div className="text-center">Performance(%)</div>,
    cell: ({ row }) => {
      return (
        <div className="text-center font-medium">{row.getValue("performance")}</div>
      );
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row: { original: data } }) => {
      return (
        <div className="text-right">
          <BioModal type="student" data={data}/>
        </div>
      );
    },
  },
];
