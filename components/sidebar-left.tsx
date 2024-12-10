"use client"

import * as React from "react"
import {
  AudioWaveform,
  Blocks,
  Calendar,
  Command,
  Home,
  Inbox,
  MessageCircleQuestion,
  Search,
  Settings2,
  Sparkles,
  Trash2,
} from "lucide-react"

import { NavFavorites } from "@/components/nav-favorites"
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
const data = {
  teams: [
    {
      name: "Alpha",
      logo: Command,
      plan: "Enterprise",
    },
    {
      name: "Beta",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Gamma",
      logo: Command,
      plan: "Free",
    },
  ],
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
      icon: Search,
    },
    {
      title: "Bank",
      url: "/teacher/bank",
      icon: Sparkles,
    },
    {
      title: "Bio",
      url: "/teacher/bio",
      icon: Blocks,
      badge: "10",
    },
    {
      title: "Database",
      url: "/teacher/database",
      icon: Trash2,
      badge: "10",
    },
    {
      title: "Tools",
      url: "/teacher/tools",
      icon: Inbox,
      badge: "10",
    },
    {
      title: "Upload",
      url: "/teacher/upload",
      icon: Calendar,
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
  ],
  favorites: [
    {
      name: "Project Management & Task Tracking",
      url: "#",
      emoji: "📊",
    },
  ]
}

export function SidebarLeft({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar className="border-r-0" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
        <NavMain items={data.navMain} />
      </SidebarHeader>
      <SidebarContent>
        <NavFavorites favorites={data.favorites} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
