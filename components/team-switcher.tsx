"use client"

import * as React from "react"
import { ChevronDown} from "lucide-react"
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { setTheme } from '../store/themeSlice';
import { useEffect } from 'react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

export function TeamSwitcher({
  themes,
}: {
  themes: {
    name: string
    logo: React.ElementType
    value: 'light' | 'dark' | 'night' | 'emerald'
  }[]
}) {
   
  const theme = useSelector((state: RootState) => state.theme.mode);
  const dispatch = useDispatch();
  const [activeTeam, setActiveTeam] = React.useState(themes.find(item => item.value === theme))

  useEffect(() => {
    const html = document.documentElement;
    html.className = ''; // Reset previous classes
    html.classList.add(theme); // Apply current theme 
  }, [theme]);

  const handleThemeChange = (theme: 'light' | 'dark' | 'night' | 'emerald') => {
    dispatch(setTheme(theme));
    setActiveTeam(themes.find(item => item.value === theme))
  };

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton className="w-fit px-1.5">
              <div className="flex aspect-square size-5 items-center justify-center rounded-md bg-sidebar-primary text-sidebar-primary-foreground">
                <activeTeam.logo className="size-3" />
              </div>
              <span className="truncate font-semibold">{activeTeam?.name}</span>
              <ChevronDown className="opacity-50" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-64 rounded-lg"
            align="start"
            side="bottom"
            sideOffset={4}
          >
            <DropdownMenuLabel className="text-xs text-muted-foreground">
              Themes
            </DropdownMenuLabel>
            {themes.map((theme) => (
              <DropdownMenuItem
                key={theme.name} 
                className="gap-2 p-2"
                onClick={ () => handleThemeChange(theme.value)}
              >
                <div className="flex size-6 items-center justify-center rounded-sm border">
                  <theme.logo className="size-4 shrink-0" />
                </div>
                {theme.name}
                <DropdownMenuShortcut>⌘{theme.value}</DropdownMenuShortcut>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
