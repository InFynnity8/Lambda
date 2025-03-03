import { Button } from "@/components/ui/button";
import React from "react";
import { Edit, Trash2 } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import StudentRegistrationForm from "@/components/forms/student-registration";

const teachers = [
  { name: "Dr. Alice Thompson", title: "Biology" },
  { name: "Prof. Benjamin Carter", title: "Chemistry" },
  { name: "Dr. Charlotte Evans", title: "Mathematics" },
  { name: "Mr. Daniel Foster", title: "Physics" },
  { name: "Ms. Emily Harrison", title: "Biology" },
];

const students = [
  { name: "Sophia Reynolds", role: "Researcher" },
  { name: "Ethan Marshall", role: "Chaplain" },
  { name: "Liam Anderson", role: "Contestant" },
  { name: "Ava Thompson", role: "Secretary" },
  { name: "Noah Carter", role: "Treasurer" },
  { name: "Olivia Foster", role: "Coordinator" },
  { name: "William Scott", role: "Mentor" },
  { name: "Mia Harrison", role: "Spokesperson" },
  { name: "James Mitchell", role: "Strategist" },
  { name: "Isabella Brooks", role: "Organizer" },
];

const staff = [
  { name: "Mr. Jonathan Wells", role: "Administrator" },
  { name: "Mrs. Patricia Dawson", role: "Librarian" },
  { name: "Mr. Samuel Hayes", role: "Lab Technician" },
  { name: "Ms. Victoria Clarke", role: "Counselor" }
];

const Database = () => {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      {/* teachers */}
      <div className="w-full">
        <div className="flex justify-between items-center">
          <h1 className="font-bold">Teachers</h1>{" "}
          <Button variant="outline"> + Add teacher</Button>
        </div>
        <ul className="divide-y divide-gray-200">
          {teachers.map((teacher) => (
            <li key={teacher.name} className="p-2">
              <div className="flex justify-between items-center">
                {/* details */}
                <div className="flex items-center">
                  {/* image */}
                  <div className="rounded-[50%] size-12 bg-slate-500 mr-2"></div>
                  {/* description */}
                  <div className="">
                    <h1>{teacher.name}</h1>
                    <p className="text-sm text-gray-500">{teacher.title}</p>
                  </div>
                </div>
                {/* operation buttons */}
                <div className="flex items-center justify-between">
                  <Tooltip>
                    <TooltipContent>Edit</TooltipContent>
                    <TooltipTrigger>
                      <Button className="m-1" variant="secondary">
                        <Edit size={16} />
                      </Button>
                    </TooltipTrigger>
                  </Tooltip>
                  <Tooltip>
                    <TooltipContent>Delete</TooltipContent>
                    <TooltipTrigger>
                      <Button className="m-1" variant="destructive">
                        <Trash2 size={16} />
                      </Button>
                    </TooltipTrigger>
                  </Tooltip>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {/* students */}
      <div className="my-5">
        <div className="flex justify-between items-center">
          <h1 className="font-bold">Students</h1>
          <StudentRegistrationForm/>
        </div>
        <ul className="divide-y divide-gray-200">
          {students.map((student) => (
            <li key={student.name} className="p-2">
              <div className="flex justify-between items-center">
                {/* details */}
                <div className="flex items-center">
                  {/* image */}
                  <div className="rounded-[50%] size-12 bg-slate-500 mr-2"></div>
                  {/* description */}
                  <div className="">
                    <h1>{student.name}</h1>
                    <p className="text-sm text-gray-500">{student.role}</p>
                  </div>
                </div>
                {/* operation buttons */}
                <div className="flex items-center justify-between">
                  <Tooltip>
                    <TooltipContent>Edit</TooltipContent>
                    <TooltipTrigger>
                      <Button className="m-1" variant="secondary">
                        <Edit size={16} />
                      </Button>
                    </TooltipTrigger>
                  </Tooltip>
                  <Tooltip>
                    <TooltipContent>Delete</TooltipContent>
                    <TooltipTrigger>
                      <Button className="m-1" variant="destructive">
                        <Trash2 size={16} />
                      </Button>
                    </TooltipTrigger>
                  </Tooltip>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {/* other staffs */}
      <div className="">
        <div className="flex justify-between items-center">
          <h1 className="font-bold">Staffs</h1>
          <Button variant="outline"> + Add Staff</Button>
        </div>
        <ul className="divide-y divide-gray-200">
          {staff.map((staff) => (
            <li key={staff.name} className="p-2">
              <div className="flex justify-between items-center">
                {/* details */}
                <div className="flex items-center">
                  {/* image */}
                  <div className="rounded-[50%] size-12 bg-slate-500 mr-2"></div>
                  {/* description */}
                  <div className="">
                    <h1>{staff.name}</h1>
                    <p className="text-sm text-gray-500">{staff.role}</p>
                  </div>
                </div>
                {/* operation buttons */}
                <div className="flex items-center justify-between">
                  <Tooltip>
                    <TooltipContent>Edit</TooltipContent>
                    <TooltipTrigger>
                      <Button className="m-1" variant="secondary">
                        <Edit size={16} />
                      </Button>
                    </TooltipTrigger>
                  </Tooltip>
                  <Tooltip>
                    <TooltipContent>Delete</TooltipContent>
                    <TooltipTrigger>
                      <Button className="m-1" variant="destructive">
                        <Trash2 size={16} />
                      </Button>
                    </TooltipTrigger>
                  </Tooltip>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Database;
