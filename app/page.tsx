"use client"

import Image from "next/image"
import Link from "next/link"
import { Card } from "@/components/ui/card"

export default function UserTypePage() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-4 bg-cover bg-center bg-no-repeat"
     style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('onboarding-bg.png')`,
      }}
    >
      <div className="w-full max-w-md space-y-2">
        <div className="flex flex-col items-center justify-center space-y-4">
          <Image
            src="/skiillworks-full-light.png"
            alt="Skillworks"
            className="mb-8 object-contain w-max"
            height={883}
            width={282}
          />
          <h1 className="text-2xl font-bold text-center text-white">Choose Your Role</h1>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Link href="/onboarding/seeker">
            <Card className="p-6 hover:bg-accent transition-colors cursor-pointer">
              <h3 className="text-lg font-semibold mb-2">Job Seeker</h3>
              <p className="text-sm text-muted-foreground">
                Find skilled work opportunities and connect with employers
              </p>
            </Card>
          </Link>

          <Link href="/onboarding/provider">
            <Card className="p-6 hover:bg-accent transition-colors cursor-pointer">
              <h3 className="text-lg font-semibold mb-2">Job Provider</h3>
              <p className="text-sm text-muted-foreground">Post jobs and find skilled workers for your projects</p>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  )
}

