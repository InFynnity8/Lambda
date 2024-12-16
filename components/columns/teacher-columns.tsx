"use client";

import * as React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import BioModal from "../bio/bio-modal";

import { Button } from "@/components/ui/button";
import { TeacherBio } from "@/types/bio";

export const teacherColumns: ColumnDef<TeacherBio>[] = [
  {
    accessorKey: "name",
    header:  ({ column }) => {
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
      <div className="capitalize flex items-center"> {row.getValue("name")}
      </div>
    ),
  },
  {
    accessorKey: "subject",
    header: "Subject",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("subject")}</div>
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
        <div className="font-medium">{row.getValue("role")}</div>
      );
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row: { original: data } }) => {
      return (
        <div className="text-right">
          <BioModal type="teacher" data={data}/>
        </div>
      );
    },
  },
];
