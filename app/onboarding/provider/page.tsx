"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function ProviderOnboarding() {
  const [step, setStep] = useState(1)
  const router = useRouter()

  const [companyName, setCompanyName] = useState("")
  const [location, setLocation] = useState("")
  const [address, setAddress] = useState("")
  const [lineOfWork, setLineOfWork] = useState("")

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-4 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/onboarding-bg-plpBnQ0G3IYr2IamWNiYnaJlJ77ORv.png')`,
      }}
    >
      <div className="w-full max-w-md">
        <div className="flex justify-center mb-8">
          <Image
            src="skillworks-icon+title.svg"
            alt="Skillworks"
            className="mb-8 object-cover w-full h-[200px]"
            height={500}
            width={500}
          />
        </div>

        <Card className="p-6">
          <div className="space-y-6">
            {step === 1 && (
              <>
                <div className="space-y-4">
                  <h2 className="text-lg font-semibold">Company Information</h2>
                  <div className="space-y-2">
                    <Label htmlFor="companyName">Company Name</Label>
                    <Input id="companyName" placeholder="Enter company name" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location">City/Province</Label>
                    <Input id="location" placeholder="Enter city or province" value={location} onChange={(e) => setLocation(e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="address">Address</Label>
                    <Textarea id="address" placeholder="Enter complete address" value={address} onChange={(e) => setAddress(e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lineOfWork">Line of Work</Label>
                    <Input id="lineOfWork" placeholder="e.g. Construction, Manufacturing" value={lineOfWork} onChange={(e) => setLineOfWork(e.target.value)} />
                  </div>
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <div className="space-y-4">
                  <h2 className="text-lg font-semibold">Create Company Account</h2>
                  <div className="space-y-2">
                    <Label htmlFor="email">Company Email</Label>
                    <Input id="email" type="email" placeholder="Enter company email" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" placeholder="Create a password" />
                  </div>
                </div>
              </>
            )}

            {step === 3 && (
              <>
                <div className="space-y-4">
                  <h2 className="text-lg font-semibold">Document Upload</h2>
                  <div className="space-y-2">
                    <Label htmlFor="govId">Government ID</Label>
                    <Input id="govId" type="file" accept="image/*,.pdf" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="permits">Company Permits</Label>
                    <Input id="permits" type="file" accept="image/*,.pdf" multiple />
                  </div>
                </div>
              </>
            )}

            <div className="flex justify-between pt-4">
              {step > 1 && (
                <Button variant="outline" onClick={() => setStep(step - 1)}>
                  Back
                </Button>
              )}
              <Button
                className="ml-auto"
                onClick={() => {
                  if (step < 3) {
                    setStep(step + 1)
                  } else {
                    // After successful submission, store data and redirect to provider profile
                    const profileData = {
                      companyName,
                      location,
                      address,
                      lineOfWork,
                    }
                    localStorage.setItem("providerProfile", JSON.stringify(profileData))
                    router.push("/dashboard/provider")
                  }
                }}
              >
                {step === 3 ? "Submit" : "Next"}
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

