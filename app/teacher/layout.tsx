"use client";

import { SidebarLeft } from "@/components/sidebar-left";
import { SidebarRight } from "@/components/sidebar-right";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { usePathname } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <SidebarProvider>
      <SidebarLeft />
      <SidebarInset>
        <header className="sticky top-0 flex h-16 border-b-[1px] shrink-0 items-center gap-2 bg-transparent backdrop-blur-lg z-50">
          <div className="flex flex-1 items-center gap-2 px-3">
            <SidebarTrigger />
            <Separator orientation="vertical" className="mr-2 h-4" />

            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>  
                  <BreadcrumbPage className="line-clamp-1">
                    <p className="capitalize flex items-center pointer-events-none">
                      {pathname.slice(1).replaceAll("/", " » ")}
                    </p>
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        {/* watermark */}
        <div className="flex items-center justify-center pt-20 fixed w-full h-full p-4 pointer-events-none">
          <div
          className="w-full h-full "
            style={{
              backgroundImage: "url('watermark4.png')",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "", 
            }}  
          />
        </div>
        <div className="z-100">{children}</div>
      </SidebarInset>
      <SidebarRight />
    </SidebarProvider>
  );
}
