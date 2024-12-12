"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import React from "react";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";

export default function Home() {
  const [value, setValue] = React.useState("");
  const router = useRouter();
  const { toast } = useToast();

  const validateTeacher = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (value.length !== 6) {
      toast({
        title: "Uh oh! Something went wrong.",
        description: "Pin must not be less than 6.",
      });
    } else if (value !== "123456") {
      toast({
        title: "Oops!",
        description: "Pin is incorrect!",
      });
    } else {
      toast({
        description: "Successfully validated.",
      });
      router.push("/teacher");
      setTimeout(() => {
        setValue("");
      }, 3000);
    }
  };

  return (
    <div className="flex items-center justify-center flex-col h-[100vh]">
      <Tabs defaultValue="teacher" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="teacher">Teacher</TabsTrigger>
          <TabsTrigger value="student">Student</TabsTrigger>
        </TabsList>
        <TabsContent value="teacher">
          <Card>
            <CardHeader>
              <CardTitle>Teacher</CardTitle>
              <CardDescription>
                Enter your 6-digit pin to get access.
              </CardDescription>
            </CardHeader>
            <CardContent className="">
              <Label htmlFor="name">Pin</Label>
              <InputOTP
                maxLength={6}
                pattern={REGEXP_ONLY_DIGITS}
                value={value}
                onChange={(value) => setValue(value)}
              >
                <InputOTPGroup>
                  <InputOTPSlot index={0} className="size-[58px] text-3xl" />
                  <InputOTPSlot index={1} className="size-[58px] text-3xl" />
                  <InputOTPSlot index={2} className="size-[58px] text-3xl" />
                  <InputOTPSlot index={3} className="size-[58px] text-3xl" />
                  <InputOTPSlot index={4} className="size-[58px] text-3xl" />
                  <InputOTPSlot index={5} className="size-[58px] text-3xl" />
                </InputOTPGroup>
              </InputOTP>
            </CardContent>
            <CardFooter>
              <Button onClick={validateTeacher}>Validate</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="student">
          <Card>
            <CardHeader>
              <CardTitle>Student</CardTitle>
              <CardDescription>Enter your student ID.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <Label htmlFor="stuID">Student ID</Label>
              <Input id="stuID" type="text" placeholder="eg. eofynn123" />
            </CardContent>
            <CardFooter>
              <Link href="/student">
                <Button>login</Button>
              </Link>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
