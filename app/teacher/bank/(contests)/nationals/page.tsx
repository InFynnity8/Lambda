"use client";

import React from "react";
import { DataTableDemo } from "@/components/tables/data-table";
import {columns} from "@/components/tables/columns"
import { Payment } from "@/types/bank";

const data: Payment[] =[
  { "id": "abc123", "amount": 523, "status": "success", "email": "john.doe1@gmail.com" },
  { "id": "xyz456", "amount": 312, "status": "failed", "email": "jane.smith2@hotmail.com" },
  { "id": "def789", "amount": 741, "status": "processing", "email": "alice.w3@yahoo.com" },
  { "id": "ghi012", "amount": 873, "status": "success", "email": "bob.m4@gmail.com" },
  { "id": "jkl345", "amount": 295, "status": "failed", "email": "carla.t5@yahoo.com" },
  { "id": "mno678", "amount": 421, "status": "success", "email": "daniel.u6@hotmail.com" },
  { "id": "pqr901", "amount": 634, "status": "processing", "email": "eva.v7@gmail.com" },
  { "id": "stu234", "amount": 829, "status": "success", "email": "frank.w8@yahoo.com" },
  { "id": "vwx567", "amount": 207, "status": "failed", "email": "grace.x9@hotmail.com" },
  { "id": "yz0123", "amount": 509, "status": "success", "email": "henry.y1@gmail.com" },
  { "id": "abc234", "amount": 784, "status": "processing", "email": "iris.z2@yahoo.com" },
  { "id": "def456", "amount": 335, "status": "success", "email": "james.a3@gmail.com" },
  { "id": "ghi789", "amount": 621, "status": "failed", "email": "kelly.b4@hotmail.com" },
  { "id": "jkl012", "amount": 892, "status": "success", "email": "leo.c5@gmail.com" },
  { "id": "mno345", "amount": 145, "status": "processing", "email": "mia.d6@yahoo.com" },
  { "id": "pqr678", "amount": 337, "status": "success", "email": "nick.e7@hotmail.com" },
  { "id": "stu901", "amount": 781, "status": "success", "email": "olivia.f8@gmail.com" },
  { "id": "vwx234", "amount": 264, "status": "failed", "email": "paul.g9@gmail.com" },
  { "id": "yz5678", "amount": 507, "status": "success", "email": "queen.h1@hotmail.com" },
  { "id": "abc901", "amount": 383, "status": "processing", "email": "ryan.i2@yahoo.com" },
  { "id": "def123", "amount": 926, "status": "success", "email": "sarah.j3@gmail.com" },
  { "id": "ghi456", "amount": 711, "status": "failed", "email": "tom.k4@gmail.com" },
  { "id": "jkl789", "amount": 248, "status": "processing", "email": "uma.l5@hotmail.com" },
  { "id": "mno012", "amount": 329, "status": "success", "email": "victor.m6@yahoo.com" },
  { "id": "pqr345", "amount": 455, "status": "success", "email": "wendy.n7@gmail.com" },
  { "id": "stu678", "amount": 639, "status": "failed", "email": "xander.o8@gmail.com" },
  { "id": "vwx901", "amount": 825, "status": "success", "email": "yara.p9@hotmail.com" },
  { "id": "yz1234", "amount": 319, "status": "processing", "email": "zoe.q1@yahoo.com" },
  { "id": "abc567", "amount": 786, "status": "success", "email": "aaron.r2@gmail.com" },
  { "id": "def890", "amount": 431, "status": "failed", "email": "bella.s3@hotmail.com" },
  { "id": "ghi345", "amount": 892, "status": "success", "email": "carter.t4@gmail.com" },
  { "id": "jkl678", "amount": 284, "status": "processing", "email": "diana.u5@yahoo.com" },
  { "id": "mno901", "amount": 530, "status": "success", "email": "ethan.v6@hotmail.com" },
  { "id": "pqr123", "amount": 794, "status": "failed", "email": "flora.w7@gmail.com" },
  { "id": "stu456", "amount": 269, "status": "success", "email": "george.x8@yahoo.com" },
  { "id": "vwx789", "amount": 801, "status": "processing", "email": "hannah.y9@hotmail.com" },
  { "id": "yz012", "amount": 678, "status": "success", "email": "ian.z0@gmail.com" },
  { "id": "abc345", "amount": 395, "status": "failed", "email": "julia.a1@hotmail.com" },
  { "id": "def678", "amount": 450, "status": "success", "email": "kevin.b2@gmail.com" },
  { "id": "ghi901", "amount": 732, "status": "processing", "email": "lucy.c3@yahoo.com" },
  { "id": "jkl123", "amount": 281, "status": "success", "email": "mark.d4@hotmail.com" },
  { "id": "mno456", "amount": 847, "status": "failed", "email": "nina.e5@gmail.com" },
  { "id": "pqr789", "amount": 317, "status": "success", "email": "oliver.f6@yahoo.com" },
  { "id": "stu012", "amount": 638, "status": "processing", "email": "paula.g7@gmail.com" },
  { "id": "vwx345", "amount": 420, "status": "failed", "email": "quentin.h8@hotmail.com" },
  { "id": "yz678", "amount": 951, "status": "success", "email": "rachel.i9@yahoo.com" },
  { "id": "abc901", "amount": 304, "status": "processing", "email": "steve.j1@gmail.com" },
  { "id": "def123", "amount": 815, "status": "success", "email": "tina.k2@hotmail.com" },
  { "id": "ghi456", "amount": 474, "status": "failed", "email": "uma.l3@gmail.com" },
  { "id": "jkl789", "amount": 689, "status": "success", "email": "victor.m4@yahoo.com" },
  { "id": "mno012", "amount": 930, "status": "processing", "email": "wendy.n5@gmail.com" },
  { "id": "pqr345", "amount": 253, "status": "success", "email": "xander.o6@hotmail.com" },
  { "id": "stu678", "amount": 718, "status": "failed", "email": "yara.p7@yahoo.com" },
  { "id": "vwx901", "amount": 503, "status": "success", "email": "zoe.q8@gmail.com" }
]

const Page: React.FC = () => { 
 
  return (
    <div className="w-full">
     <DataTableDemo columns={columns} data={data}/>
    </div>
  );
};

export default Page;
