"use client"

import * as React from "react"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  MapPin,
  Mail,
  Phone,
  Globe,
  GitHub,
  Linkedin,
  Edit2,
  Plus,
  Star,
  Briefcase,
  GraduationCap,
  Award,
} from "lucide-react"

interface Skill {
  name: string
  level: string
  endorsements: number
}

interface Experience {
  title: string
  company: string
  period: string
  description: string
}

interface Education {
  degree: string
  school: string
  year: string
  achievements: string
}

interface Certification {
  name: string
  issuer: string
  year: string
}

interface SeekerProfilePageProps {}

const SeekerProfilePage: React.FC<SeekerProfilePageProps> = () => {
  const [editMode, setEditMode] = React.useState(false)

  const skills: Skill[] = [
    { name: "React", level: "Advanced", endorsements: 24 },
    { name: "TypeScript", level: "Intermediate", endorsements: 18 },
    { name: "Node.js", level: "Advanced", endorsements: 21 },
    { name: "UI/UX Design", level: "Intermediate", endorsements: 15 },
    { name: "Next.js", level: "Advanced", endorsements: 19 },
  ]

  const experience: Experience[] = [
    {
      title: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      period: "2022 - Present",
      description: "Led the frontend development team in building modern web applications using React and Next.js.",
    },
    {
      title: "Web Developer",
      company: "Digital Solutions",
      period: "2020 - 2022",
      description: "Developed and maintained client websites using modern JavaScript frameworks.",
    },
  ]

  const education: Education[] = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University of Technology",
      year: "2020",
      achievements: "Graduated with honors, Dean's Lister",
    },
  ]

  const certifications: Certification[] = [
    {
      name: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      year: "2023",
    },
    {
      name: "Professional Scrum Master I",
      issuer: "Scrum.org",
      year: "2022",
    },
  ]

  return (
    <div className="container mx-auto p-4 space-y-6 max-w-7xl">
      {/* Profile Header */}
      <Card className="p-6">
        <CardHeader>
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="relative">
              <Avatar className="h-32 w-32">
                <AvatarImage src="/avatars/user.jpg" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <Button
                size="icon"
                variant="secondary"
                className="absolute bottom-0 right-0"
              >
                <Edit2 className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="flex-1 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-2xl font-bold">John Doe</h1>
                  <p className="text-muted-foreground">Senior Frontend Developer</p>
                </div>
                <Button onClick={() => setEditMode(!editMode)}>
                  {editMode ? "Save Changes" : "Edit Profile"}
                </Button>
              </div>
              
              <div className="grid gap-2 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>Manila, Philippines</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span>john.doe@example.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span>+63 912 345 6789</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" size="sm">
                  <Globe className="h-4 w-4 mr-2" />
                  Portfolio
                </Button>
                <Button variant="outline" size="sm">
                  <GitHub className="h-4 w-4 mr-2" />
                  GitHub
                </Button>
                <Button variant="outline" size="sm">
                  <Linkedin className="h-4 w-4 mr-2" />
                  LinkedIn
                </Button>
              </div>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* About Section */}
      <Card className="p-6">
        <CardHeader>
          <h2 className="text-xl font-semibold mb-4">About Me</h2>
        </CardHeader>
        <CardContent>
          {editMode ? (
            <Textarea
              className="min-h-[200px]"
              defaultValue="Passionate frontend developer with 5+ years of experience in building modern web applications. Specialized in React and Next.js development with a strong focus on user experience and performance optimization."
            />
          ) : (
            <p className="text-muted-foreground">
              Passionate frontend developer with 5+ years of experience in building modern web applications. Specialized in React and Next.js development with a strong focus on user experience and performance optimization.
            </p>
          )}
        </CardContent>
      </Card>

      {/* Skills Section */}
      <Card className="p-6">
        <CardHeader>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Skills & Endorsements</h2>
            {editMode && (
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add Skill
              </Button>
            )}
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="p-4 rounded-lg bg-accent/50 space-y-2"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">{skill.name}</h3>
                  <Badge variant="secondary">{skill.level}</Badge>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Star className="h-4 w-4 fill-primary text-primary" />
                  <span className="text-sm">{skill.endorsements} endorsements</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Experience Section */}
      <Card className="p-6">
        <CardHeader>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Experience</h2>
            {editMode && (
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add Experience
              </Button>
            )}
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <div key={index} className="border-b last:border-0 pb-6 last:pb-0">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Briefcase className="h-4 w-4 text-muted-foreground" />
                      <h3 className="font-semibold">{exp.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground">{exp.period}</p>
                  </div>
                  {editMode && (
                    <Button variant="ghost" size="icon">
                      <Edit2 className="h-4 w-4" />
                    </Button>
                  )}
                </div>
                <p className="mt-4 text-muted-foreground">{exp.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Education Section */}
      <Card className="p-6">
        <CardHeader>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Education</h2>
            {editMode && (
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add Education
              </Button>
            )}
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="border-b last:border-0 pb-6 last:pb-0">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <GraduationCap className="h-4 w-4 text-muted-foreground" />
                      <h3 className="font-semibold">{edu.degree}</h3>
                    </div>
                    <p className="text-muted-foreground">{edu.school}</p>
                    <p className="text-sm text-muted-foreground">{edu.year}</p>
                  </div>
                  {editMode && (
                    <Button variant="ghost" size="icon">
                      <Edit2 className="h-4 w-4" />
                    </Button>
                  )}
                </div>
                <p className="mt-4 text-muted-foreground">{edu.achievements}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 space-y-4">
            <h3 className="text-lg font-semibold">Certifications</h3>
            {certifications.map((cert, index) => (
              <div key={index} className="p-4 bg-accent/50 rounded-lg">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-muted-foreground" />
                      <h4 className="font-medium">{cert.name}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {cert.issuer} • {cert.year}
                    </p>
                  </div>
                  {editMode && (
                    <Button variant="ghost" size="icon">
                      <Edit2 className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </div>
            ))}
            {editMode && (
              <Button className="w-full mt-4">
                <Plus className="h-4 w-4 mr-2" />
                Add Certification
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default SeekerProfilePage
