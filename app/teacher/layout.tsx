'use client'

import { SidebarLeft } from "@/components/sidebar-left"
import { SidebarRight } from "@/components/sidebar-right"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger
} from "@/components/ui/sidebar"
import { ChevronRight } from 'lucide-react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import { usePathname } from "next/navigation"

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  return (
    <SidebarProvider>
      <SidebarLeft />
      <SidebarInset>
      <header className="sticky top-0 flex h-14 shrink-0 items-center gap-2 bg-background">
          <div className="flex flex-1 items-center gap-2 px-3">
            <SidebarTrigger />
            <Separator orientation="vertical" className="mr-2 h-4" />

            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbPage className="line-clamp-1">
                    <p className="capitalize flex items-center">
                    {pathname.slice(1, 8)}
                    <ChevronRight className="text-gray-300 size-[15px]"/>
                    {pathname.slice(9)}
                    </p>
                  </BreadcrumbPage>
                </BreadcrumbItem> 
              </BreadcrumbList>
            </Breadcrumb> 
          </div>
        </header>

        {children}
      </SidebarInset>
      <SidebarRight />
    </SidebarProvider>
  )
}
