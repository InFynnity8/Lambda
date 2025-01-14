import * as React from "react"
import AudioPlayer from "./audio-player"

import { Calendars } from "@/components/calendars"
import { DatePicker } from "@/components/date-picker"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarSeparator,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "MPASS Quiz Team",
    email: "mpraesoshsteam@gmail.com",
    avatar: "nsmq.png",
  }
}

export function SidebarRight({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      collapsible="none"
      className="sticky hidden lg:flex top-0 h-svh border-l"
      {...props}
    >
      <SidebarHeader className="h-16 border-b border-sidebar-border">
        <NavUser user={data.user} />
      </SidebarHeader>
      <SidebarContent>
        <DatePicker />
        <SidebarSeparator className="mx-0" />
        {/* <Calendars calendars={data.calendars} /> */}
      </SidebarContent>
      <SidebarFooter>
        <AudioPlayer/>
      </SidebarFooter>
    </Sidebar>
  )
}
