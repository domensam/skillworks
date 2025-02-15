"use client"

import { useEffect, useState } from "react"
import { AuthenticatedLayout } from "@/components/layouts/authenticated-layout"

interface ProviderProfileData {
  companyName: string
  location: string
  address: string
  lineOfWork: string
}

export default function ProviderProfile() {
  const [profileData, setProfileData] = useState<ProviderProfileData | null>(null)

  useEffect(() => {
    const storedData = localStorage.getItem("providerProfile")
    if (storedData) {
      setProfileData(JSON.parse(storedData))
    }
  }, [])

  if (!profileData) {
    return (
      <AuthenticatedLayout userType="provider">
        <div>Loading profile...</div>
      </AuthenticatedLayout>
    )
  }

  return (
    <AuthenticatedLayout userType="provider">
      <div>
        <h1>Provider Profile</h1>
        <p>
          <strong>Company Name:</strong> {profileData.companyName}
        </p>
        <p>
          <strong>Location:</strong> {profileData.location}
        </p>
        <p>
          <strong>Address:</strong> {profileData.address}
        </p>
        <p>
          <strong>Line of Work:</strong> {profileData.lineOfWork}
        </p>
      </div>
    </AuthenticatedLayout>
  )
}
