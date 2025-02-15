"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Bell, Calendar, Home, Menu, MessageSquare, Search, Wallet, User, PlusIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { SignOutButton } from "../sign-out-button"

interface AuthenticatedLayoutProps {
  children: React.ReactNode
  userType: "seeker" | "provider"
}

export function AuthenticatedLayout({ children, userType }: AuthenticatedLayoutProps) {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const navigationItems =
    userType === "seeker"
      ? [
          { icon: Home, label: "Home", href: "/dashboard/seeker" },
          { icon: Calendar, label: "Calendar", href: "/calendar" },
          { icon: Search, label: "Search Jobs", href: "/job-search" },
          { icon: MessageSquare, label: "Chat", href: "/chat" },
          { icon: Wallet, label: "Wallet", href: "/wallet" },
          { icon: User, label: "Profile", href: "/profile/seeker" }, 
        ]
      : [
          { icon: Home, label: "Home", href: "/dashboard/provider" },
          { icon: Calendar, label: "Calendar", href: "/calendar" },
          { icon: PlusIcon, label: "Post Job", href: "/post-job" },
          { icon: MessageSquare, label: "Chat", href: "/chat" },
          { icon: Wallet, label: "Wallet", href: "/wallet" },
          { icon: User, label: "Profile", href: "/profile/provider" },
        ]

  return (
    <div className="min-h-screen bg-background p-2">
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="mr-2">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4">
                {navigationItems.map((item) => (
                  <Link key={item.href} href={item.href} className="flex items-center gap-2 text-lg font-medium">
                    <item.icon className="h-5 w-5" />
                    {item.label}
                  </Link>
                ))}
              </nav>
              <SignOutButton />
            </SheetContent>
          </Sheet>

          <div className="flex-1">
            <form className="flex items-center">
              <Input type="search" placeholder="Search..." className="h-9 md:w-[300px] lg:w-[400px]" />
            </form>
          </div>

          <Button variant="ghost" size="icon" className="ml-2">
            <Bell className="h-5 w-5" />
            <span className="sr-only">Notifications</span>
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-6">{children}</main>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 border-t bg-background py-2">
        <nav className="container flex items-center justify-around">
          {navigationItems.map((item) => (
            <Link key={item.href} href={item.href} className="flex flex-col items-center gap-1 p-2">
              <item.icon className="h-5 w-5" />
              <span className="text-xs">{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )
}

