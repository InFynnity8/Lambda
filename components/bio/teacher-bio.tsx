import React from "react";
import { TeacherBio } from "@/types/bio";
import { CgProfile } from "react-icons/cg";

const TeacherBioData = ({ data }: { data: TeacherBio }) => {
  return (
    <div className="w-full flex items-center">
      <CgProfile className="size-52"/>
      <div className="flex items-center w-full justify-center">
        <ul className="text-">
          <li>Subject</li>
          <li>Gender</li>
          <li>Contact</li>
          <li>Date Of Birth</li>
          <li>Nationality</li>
          <li>Residence</li>
        </ul>
        <ul className="text-muted-foreground">
          <li>
            {": "}
            {data.subject}
          </li>
          <li>
            {": "}
            {data.gender}
          </li>
          <li>
            {": "}
            {data.contact}
          </li>
          <li>
            {": "}
            {data.dateOfBirth?.toDateString()}
          </li>
          <li>
            {": "}
            {data.nationality}
          </li>
          <li>
            {": "}
            {data.residence}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TeacherBioData;
