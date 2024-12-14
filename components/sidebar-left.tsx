"use client"

import * as React from "react"
import {
  AudioWaveform,
  Fingerprint,
  HardDriveUpload,
  Command,
  Home,
  Pickaxe,
  MessageCircleQuestion,
  ChartNoAxesCombined,
  Settings2,
  Library,
  Database,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const themes: {
  name: string
  logo: React.ElementType
  value: 'light' | 'dark' | 'night' | 'emerald'
}[] = [
  {
    name: "Alpha",
    logo: Command,
    value: 'light',
  },
  {
    name: "Beta",
    logo: AudioWaveform,
    value: 'dark',
  },
  {
    name: "Gamma",
    logo: Command,
    value: 'night',
  },
  {
    name: "Delta",
    logo: Command,
    value: 'emerald',
  },
]
const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/teacher",
      icon: Home,
      isActive: true,
    },
    {
      title: "Analysis",
      url: "/teacher/analysis",
      icon: ChartNoAxesCombined,
    },
    {
      title: "Bank",
      url: "/teacher/bank",
      icon: Library,
    },
    {
      title: "Bio",
      url: "/teacher/bio",
      icon:  Fingerprint,
      badge: "10",
    },
    {
      title: "Database",
      url: "/teacher/database",
      icon: Database,
      badge: "10",
    },
    {
      title: "Tools",
      url: "/teacher/tools",
      icon: Pickaxe,
      badge: "10",
    },
    {
      title: "Upload",
      url: "/teacher/upload",
      icon: HardDriveUpload,
      badge: "10",
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "/teacher/settings",
      icon: Settings2,
    },
    {
      title: "Help",
      url: "/teacher/help",
      icon: MessageCircleQuestion,
    },
  ]
}

export function SidebarLeft({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar className="border-r-0" {...props}>
      <SidebarHeader>
        <TeamSwitcher themes={themes} />
        <NavMain items={data.navMain} />
      </SidebarHeader>
      <SidebarContent>
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
