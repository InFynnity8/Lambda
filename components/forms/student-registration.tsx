"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const StudentRegistrationForm = () => {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline"> + Add Student</Button>
      </DialogTrigger>
      <DialogContent className="overflow-y-auto">
        <DialogHeader>
          <h1 className="font-bold text-[24px] mb-[-10px]">
            Registration Form
          </h1>
          <DialogDescription>
            Recruit a new student to the team
          </DialogDescription>
        </DialogHeader>
        <form>
          {/* Personal details */}
          <div className="">
            <Label htmlFor="firstname">First Name</Label>
            <Input name="firstname" placeholder="Enter student's first name" />
            <Label htmlFor="lastname">Last Name</Label>
            <Input name="lastname" placeholder="Enter student's last name" />
            <Label htmlFor="class">Class</Label>
            <Input name="class" type="radio" />
            <Label htmlFor="dob">Date of Birth</Label>
            <Input name="dob" type="date" />
            <Label htmlFor="gender">Gender</Label>
            <Input name="gender" type="radio"/>
            <Input name="gender" type="radio"/>
            <Label htmlFor="residence">Residence</Label>
            <Input name="residence" placeholder="" />
            <Label htmlFor="nationality">Nationality</Label>
            <Input name="nationality" placeholder="" type="country" />
            <Label htmlFor="role">Role</Label>
            <Input name="role" placeholder="" type="" />
          </div>
          {/* Parent/Guadian details */}
          <div className="">

          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default StudentRegistrationForm;
