"use client"

import { useEffect, useState } from "react"
import { AuthenticatedLayout } from "@/components/layouts/authenticated-layout"
import { ArrowLeft, Star, Mail } from "lucide-react" // added new icons

interface SeekerProfileData {
  firstName: string
  lastName: string
  sex: string
  birthday: string
  address: string
}

// Moved mock data into a variable:
const mockSeekerProfileData: SeekerProfileData = {
  firstName: "Juan",
  lastName: "Dela Cruz",
  sex: "Male",
  birthday: "01/01/1990",
  address: "123 Main Street"
}

export default function SeekerProfile() {
  const [profileData, setProfileData] = useState<SeekerProfileData | null>(null)
  const [activeTab, setActiveTab] = useState("ABOUT") // added tab state

  useEffect(() => {
    const storedData = localStorage.getItem("seekerProfile")
    if (storedData) {
      setProfileData(JSON.parse(storedData))
    } else {
      setProfileData(mockSeekerProfileData) // use mock data if none exists in localStorage
    }
  }, [])

  if (!profileData) {
    return (
      <AuthenticatedLayout userType="seeker">
        <div>Loading profile...</div>
      </AuthenticatedLayout>
    )
  }

  return (
    <AuthenticatedLayout userType="seeker">
      <div className="p-4">
        {/* Profile Header */}
        <div className="flex items-center p-4 border-b">
          <button onClick={() => window.history.back()} className="mr-2">
            <ArrowLeft />
          </button>
          <img src="https://via.placeholder.com/80" alt="Profile picture" className="rounded-full w-16 h-16 mr-4" />
          <div>
            <h2 className="text-xl font-bold">Juan Dela Cruz - Painter</h2>
            <div className="flex">
              <Star className="text-yellow-400" />
              <Star className="text-yellow-400" />
              <Star className="text-yellow-400" />
              <Star className="text-yellow-400" />
              <Star className="text-yellow-400" />
            </div>
          </div>
          <div className="ml-auto text-right">
            <p>Followers 500</p>
            <button className="ml-2">
              <Mail />
            </button>
          </div>
        </div>
        {/* Tab Navigation */}
        <div className="mt-4">
          <div className="tabs flex border-b">
            <button
              onClick={() => setActiveTab("ABOUT")}
              className={`px-4 py-2 ${activeTab === "ABOUT" ? "border-b-2 border-blue-500" : ""}`}
            >
              ABOUT
            </button>
            <button
              onClick={() => setActiveTab("PROJECTS")}
              className={`px-4 py-2 ${activeTab === "PROJECTS" ? "border-b-2 border-blue-500" : ""}`}
            >
              PROJECTS
            </button>
            <button
              onClick={() => setActiveTab("REVIEWS")}
              className={`px-4 py-2 ${activeTab === "REVIEWS" ? "border-b-2 border-blue-500" : ""}`}
            >
              REVIEWS
            </button>
          </div>
          <div className="tab-content mt-4">
            {activeTab === "ABOUT" && (
              <div>
                <p>Contact: 123-456-7890 | juan@example.com</p>
                <p>
                  Experienced painter specializing in interior and exterior projects.
                </p>
              </div>
            )}
            {activeTab === "PROJECTS" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="border p-2">
                  <img
                    src="https://via.placeholder.com/150"
                    alt="Interior Painting"
                    className="w-full"
                  />
                  <h3>Interior Painting</h3>
                  <p>DECEMBER 2022</p>
                </div>
                <div className="border p-2">
                  <img
                    src="https://via.placeholder.com/150"
                    alt="Subdivision Painting Job In Antipolo"
                    className="w-full"
                  />
                  <h3>Subdivision Painting Job In Antipolo</h3>
                  <p>NOV 2022</p>
                </div>
              </div>
            )}
            {activeTab === "REVIEWS" && (
              <div>
                <p>No reviews yet.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  )
}
