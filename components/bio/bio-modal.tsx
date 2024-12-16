"use client";

import React, { useState } from "react";
import StudentBioData from "./student-bio";
import TeacherBioData from "./teacher-bio";
// import { TeacherBio, StudentBio } from "@/types/bio";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
const BioModal = ({type, data}: {type: 'student' | 'teacher', data: object}) => {
    const [open, setOpen] = useState(false);
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button
            variant="ghost"
          >
            View details
          </Button>
        </DialogTrigger>
        <DialogContent className="shad-dialog ms:max-w-md">
          <DialogHeader className="mb-4 space-y-3 ">
            <DialogTitle className="capitalize">{data.name}</DialogTitle>
            <DialogDescription>
              {data.role}
            </DialogDescription>
          </DialogHeader>
              {type === 'student' ? <StudentBioData data={data}/> : <TeacherBioData data={data}/>}
        </DialogContent>
      </Dialog>
    );
}

export default BioModal