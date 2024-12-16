"use client";

import * as React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { FcFile } from "react-icons/fc";

import { Button } from "@/components/ui/button";

import { Contest } from "@/types/bank";

export const contestColumns: ColumnDef<Contest>[] = [
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) => (
      <div className="capitalize flex items-center">
        <FcFile className="size-6 mr-2" /> {row.getValue("title")}
      </div>
    ),
  },
  {
    accessorKey: "subject",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="p-0"
        >
          Subject
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("subject")}</div>
    ),
  },
  {
    accessorKey: "year",
    header: () => <div className="text-right">Year</div>,
    cell: ({ row }) => {
      return (
        <div className="text-right font-medium">{row.getValue("year")}</div>
      );
    },
  },
  {
    accessorKey: "round",
    header: () => <div className="text-right">Round</div>,
    cell: ({ row }) => {
      return (
        <div className="text-right font-medium">{row.getValue("round")}</div>
      );
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: () => {
      return (
        <div className="text-right">
          <Button variant="ghost" className=" h-8 w-16">
            Open
          </Button>
        </div>
      );
    },
  },
];
