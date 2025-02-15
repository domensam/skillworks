"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function SeekerOnboarding() {
  const [step, setStep] = useState(1)
  const router = useRouter()
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [sex, setSex] = useState("")
  const [birthday, setBirthday] = useState("")
  const [address, setAddress] = useState("")

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
                  <h2 className="text-lg font-semibold">Create Your Account</h2>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" placeholder="Create a password" />
                  </div>
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <div className="space-y-4">
                  <h2 className="text-lg font-semibold">Personal Information</h2>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="First name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Last name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="sex">Sex</Label>
                    <Select onValueChange={setSex}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select sex" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="birthday">Birthday</Label>
                    <Input id="birthday" type="date" value={birthday} onChange={(e) => setBirthday(e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="address">Address</Label>
                    <Input id="address" placeholder="Enter your address" value={address} onChange={(e) => setAddress(e.target.value)} />
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
                    <Label htmlFor="tesda">TESDA Certificates</Label>
                    <Input id="tesda" type="file" accept="image/*,.pdf" multiple />
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
                    // After successful submission, store data and redirect to seeker profile
                    const profileData = {
                      firstName,
                      lastName,
                      sex,
                      birthday,
                      address,
                    }
                    localStorage.setItem("seekerProfile", JSON.stringify(profileData))
                    router.push("/dashboard/seeker")
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

