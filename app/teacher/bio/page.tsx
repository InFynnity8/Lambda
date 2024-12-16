
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import React from 'react'
import { DataTableDemo } from '@/components/tables/data-table'
import {studentColumns} from "@/components/columns/student-columns"
import {teacherColumns} from "@/components/columns/teacher-columns"
import { StudentBio, TeacherBio } from '@/types/bio'

const students: StudentBio[] = [
  {
    name: "Alice Johnson",
    year: "First year",
    gender: "Female",
    role: "Class Representative",
    dateOfBirth: new Date("2006-03-15"),
    photo: "alice_johnson.jpg",
    remarks: "Excellent leader",
    residence: "Hostel A",
    performance: 92,
    contact: "123-456-7890",
    parent: {
      name: "Michael Johnson",
      contact: "987-654-3210",
      profession: "Engineer",
    },
    nationality: "American",
  },
  {
    name: "David Smith",
    year: "Second year",
    gender: "Male",
    role: "Sports Captain",
    dateOfBirth: new Date("2005-07-20"),
    photo: "david_smith.jpg",
    remarks: "Strong in athletics",
    residence: "Hostel B",
    performance: 85,
    contact: "234-567-8901",
    parent: {
      name: "Laura Smith",
      contact: "876-543-2109",
      profession: "Teacher",
    },
    nationality: "Canadian",
  },
  {
    name: "Emma Watson",
    year: "Final year",
    gender: "Female",
    role: "Prefect",
    dateOfBirth: new Date("2004-11-12"),
    photo: "emma_watson.jpg",
    remarks: "Outstanding academic performance",
    residence: "Hostel C",
    performance: 96,
    contact: "345-678-9012",
    parent: {
      name: "Richard Watson",
      contact: "765-432-1098",
      profession: "Doctor",
    },
    nationality: "British",
  },
  {
    name: "James Brown",
    year: "First year",
    gender: "Male",
    role: "Debate Club Member",
    dateOfBirth: new Date("2006-05-18"),
    photo: "james_brown.jpg",
    remarks: "Good orator",
    residence: "Hostel D",
    performance: 89,
    contact: "456-789-0123",
    parent: {
      name: "Catherine Brown",
      contact: "654-321-0987",
      profession: "Lawyer",
    },
    nationality: "Australian",
  },
  {
    name: "Sophia Lee",
    year: "Second year",
    gender: "Female",
    role: "Science Club Leader",
    dateOfBirth: new Date("2005-09-03"),
    photo: "sophia_lee.jpg",
    remarks: "Excellent in science projects",
    residence: "Hostel E",
    performance: 93,
    contact: "567-890-1234",
    parent: {
      name: "Daniel Lee",
      contact: "543-210-9876",
      profession: "Scientist",
    },
    nationality: "Korean",
  },
  {
    name: "Ethan Taylor",
    year: "Final year",
    gender: "Male",
    role: "Drama Club President",
    dateOfBirth: new Date("2004-12-22"),
    photo: "ethan_taylor.jpg",
    remarks: "Great actor",
    residence: "Hostel F",
    performance: 88,
    contact: "678-901-2345",
    parent: {
      name: "Susan Taylor",
      contact: "432-109-8765",
      profession: "Artist",
    },
    nationality: "American",
  },
  {
    name: "Mia Kim",
    year: "First year",
    gender: "Female",
    role: "Art Club Member",
    dateOfBirth: new Date("2006-01-29"),
    photo: "mia_kim.jpg",
    remarks: "Creative and artistic",
    residence: "Hostel G",
    performance: 87,
    contact: "789-012-3456",
    parent: {
      name: "William Kim",
      contact: "321-098-7654",
      profession: "Architect",
    },
    nationality: "Korean",
  },
  {
    name: "Liam Davis",
    year: "Second year",
    gender: "Male",
    role: "Library Assistant",
    dateOfBirth: new Date("2005-06-15"),
    photo: "liam_davis.jpg",
    remarks: "Loves reading",
    residence: "Hostel H",
    performance: 84,
    contact: "890-123-4567",
    parent: {
      name: "Helen Davis",
      contact: "210-987-6543",
      profession: "Librarian",
    },
    nationality: "Canadian",
  },
  {
    name: "Olivia Clark",
    year: "Final year",
    gender: "Female",
    role: "Environmental Club Leader",
    dateOfBirth: new Date("2004-03-10"),
    photo: "olivia_clark.jpg",
    remarks: "Passionate about the environment",
    residence: "Hostel I",
    performance: 90,
    contact: "901-234-5678",
    parent: {
      name: "Robert Clark",
      contact: "109-876-5432",
      profession: "Environmentalist",
    },
    nationality: "American",
  },
  {
    name: "Lucas Martinez",
    year: "First year",
    gender: "Male",
    role: "Music Club Member",
    dateOfBirth: new Date("2006-04-25"),
    photo: "lucas_martinez.jpg",
    remarks: "Talented musician",
    residence: "Hostel J",
    performance: 86,
    contact: "012-345-6789",
    parent: {
      name: "Maria Martinez",
      contact: "987-654-3210",
      profession: "Musician",
    },
    nationality: "Spanish",
  },
  {
    name: "Grace Wilson",
    year: "Second year",
    gender: "Female",
    role: "Volunteer Coordinator",
    dateOfBirth: new Date("2005-08-12"),
    photo: "grace_wilson.jpg",
    remarks: "Active in community service",
    residence: "Hostel K",
    performance: 91,
    contact: "567-432-1098",
    parent: {
      name: "Paul Wilson",
      contact: "876-543-2198",
      profession: "Social Worker",
    },
    nationality: "British",
  },
  {
    name: "Noah Patel",
    year: "Final year",
    gender: "Male",
    role: "Mathematics Club President",
    dateOfBirth: new Date("2004-10-05"),
    photo: "noah_patel.jpg",
    remarks: "Top math student",
    residence: "Hostel L",
    performance: 95,
    contact: "123-765-4321",
    parent: {
      name: "Meera Patel",
      contact: "987-345-6789",
      profession: "Statistician",
    },
    nationality: "Indian",
  },
  {
    name: "Ava Nguyen",
    year: "First year",
    gender: "Female",
    role: "Science Fair Organizer",
    dateOfBirth: new Date("2006-02-25"),
    photo: "ava_nguyen.jpg",
    remarks: "Creative in STEM projects",
    residence: "Hostel M",
    performance: 88,
    contact: "456-234-1234",
    parent: {
      name: "Huy Nguyen",
      contact: "654-876-5432",
      profession: "Engineer",
    },
    nationality: "Vietnamese",
  },
  {
    name: "Henry Lopez",
    year: "Second year",
    gender: "Male",
    role: "Peer Mentor",
    dateOfBirth: new Date("2005-11-19"),
    photo: "henry_lopez.jpg",
    remarks: "Helpful to fellow students",
    residence: "Hostel N",
    performance: 83,
    contact: "890-123-6543",
    parent: {
      name: "Isabella Lopez",
      contact: "543-876-2109",
      profession: "Psychologist",
    },
    nationality: "Mexican",
  },
  {
    name: "Emily Adams",
    year: "Final year",
    gender: "Female",
    role: "Yearbook Editor",
    dateOfBirth: new Date("2004-04-08"),
    photo: "emily_adams.jpg",
    remarks: "Great at writing",
    residence: "Hostel O",
    performance: 94,
    contact: "765-432-1098",
    parent: {
      name: "Charles Adams",
      contact: "234-876-5432",
      profession: "Writer",
    },
    nationality: "American",
  }
]

const teachers: TeacherBio[] = [
  {
    name: "Dr. Olivia Carter",
    subject: "Biology",
    gender: "Female",
    role: "Head of Department",
    dateOfBirth: new Date("1975-02-15"),
    photo: "olivia_carter.jpg",
    residence: "Springfield",
    nationality: "American",
    contact: "123-456-7890",
  },
  {
    name: "Mr. Ethan Roberts",
    subject: "Chemistry",
    gender: "Male",
    role: "Senior Teacher",
    dateOfBirth: new Date("1980-11-03"),
    photo: "ethan_roberts.jpg",
    residence: "Greenwood",
    nationality: "British",
    contact: "234-567-8901",
  },
  {
    name: "Ms. Sophia Martinez",
    subject: "Physics",
    gender: "Female",
    role: "Lab Coordinator",
    dateOfBirth: new Date("1985-07-12"),
    photo: "sophia_martinez.jpg",
    residence: "Madrid",
    nationality: "Spanish",
    contact: "345-678-9012",
  },
  {
    name: "Dr. Liam Brown",
    subject: "Mathematics",
    gender: "Male",
    role: "Math Club Advisor",
    dateOfBirth: new Date("1978-03-22"),
    photo: "liam_brown.jpg",
    residence: "Melbourne",
    nationality: "Australian",
    contact: "456-789-0123",
  },
  {
    name: "Mrs. Emily Wilson",
    subject: "Biology",
    gender: "Female",
    role: "Research Coordinator",
    dateOfBirth: new Date("1982-09-05"),
    photo: "emily_wilson.jpg",
    residence: "Toronto",
    nationality: "Canadian",
    contact: "567-890-1234",
  },
  {
    name: "Mr. Noah Patel",
    subject: "Chemistry",
    gender: "Male",
    role: "Class Teacher",
    dateOfBirth: new Date("1979-12-17"),
    photo: "noah_patel.jpg",
    residence: "New Delhi",
    nationality: "Indian",
    contact: "678-901-2345",
  },
  {
    name: "Dr. Isabella Nguyen",
    subject: "Physics",
    gender: "Female",
    role: "Curriculum Developer",
    dateOfBirth: new Date("1976-05-30"),
    photo: "isabella_nguyen.jpg",
    residence: "Hanoi",
    nationality: "Vietnamese",
    contact: "789-012-3456",
  },
  {
    name: "Mr. Jacob Adams",
    subject: "Mathematics",
    gender: "Male",
    role: "Exam Coordinator",
    dateOfBirth: new Date("1983-06-18"),
    photo: "jacob_adams.jpg",
    residence: "Los Angeles",
    nationality: "American",
    contact: "890-123-4567",
  },
  {
    name: "Dr. Grace Lopez",
    subject: "Biology",
    gender: "Female",
    role: "Field Trip Organizer",
    dateOfBirth: new Date("1981-08-25"),
    photo: "grace_lopez.jpg",
    residence: "Mexico City",
    nationality: "Mexican",
    contact: "901-234-5678",
  },
  {
    name: "Mr. Lucas Davis",
    subject: "Physics",
    gender: "Male",
    role: "Assistant Teacher",
    dateOfBirth: new Date("1987-04-14"),
    photo: "lucas_davis.jpg",
    residence: "London",
    nationality: "British",
    contact: "012-345-6789",
  },
];




const Bio = () => {
  return (
    <div className="w-full flex flex-col items-center p-4">

    <Tabs
      defaultValue="students"
      className="w-full flex flex-col items-center "
    >
        <TabsList>
          <TabsTrigger
            value="students"
          >
            Students&apos; Bio
          </TabsTrigger>
          <TabsTrigger
            value="teachers"
          >
            Teachers&apos; Bio
          </TabsTrigger>
         
        </TabsList>
      <TabsContent value="students" className="w-full">
        <div className="flex w-full items-center flex-col">
          <div className="w-full">
          <DataTableDemo columns={studentColumns} data={students} columnFilter='name'/>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="teachers" className="w-full">
        <div className="flex w-full items-center flex-col gap-4">
          <div className="w-full">
            <DataTableDemo columns={teacherColumns} data={teachers} columnFilter='name'/>
          </div>
        </div>
      </TabsContent>

    </Tabs>
  </div>
  )
}

export default Bio