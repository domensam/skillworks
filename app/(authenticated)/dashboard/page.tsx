import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Mock data for active jobs/projects
const mockJobs = [
  {
    id: 1,
    title: "Construction Site Worker",
    company: "ABC Construction",
    location: "Manila",
    salary: "₱500-800/day",
    status: "In Progress",
    startDate: "2024-02-20",
    endDate: "2024-03-20",
  },
  {
    id: 2,
    title: "Electrician",
    company: "XYZ Electrical Services",
    location: "Quezon City",
    salary: "₱1000/day",
    status: "Starting Soon",
    startDate: "2024-02-25",
    endDate: "2024-03-10",
  },
]

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Here are your active jobs</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {mockJobs.map((job) => (
          <Card key={job.id} className="p-6">
            <div className="flex justify-between items-start">
              <div className="space-y-1">
                <h3 className="font-semibold">{job.title}</h3>
                <p className="text-sm text-muted-foreground">{job.company}</p>
              </div>
              <Badge variant={job.status === "In Progress" ? "default" : "secondary"}>{job.status}</Badge>
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex items-center text-sm">
                <span className="font-medium">Location:</span>
                <span className="ml-2 text-muted-foreground">{job.location}</span>
              </div>
              <div className="flex items-center text-sm">
                <span className="font-medium">Salary:</span>
                <span className="ml-2 text-muted-foreground">{job.salary}</span>
              </div>
              <div className="flex items-center text-sm">
                <span className="font-medium">Duration:</span>
                <span className="ml-2 text-muted-foreground">
                  {job.startDate} - {job.endDate}
                </span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

