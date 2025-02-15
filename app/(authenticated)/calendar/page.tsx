import { Calendar } from "@/components/ui/calendar"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const mockUpcomingJobs = [
  {
    id: 1,
    title: "Construction Site Work",
    company: "ABC Construction",
    date: "2024-02-20",
    time: "8:00 AM - 5:00 PM",
    location: "Manila",
  },
  {
    id: 2,
    title: "Electrical Installation",
    company: "XYZ Electrical",
    date: "2024-02-25",
    time: "9:00 AM - 6:00 PM",
    location: "Quezon City",
  },
]

export default function CalendarPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Calendar</h1>
        <p className="text-muted-foreground">View and manage your upcoming jobs</p>
      </div>

      <div className="grid gap-6 md:grid-cols-[1fr_300px]">
        <Card className="p-4">
          <Calendar mode="single" className="rounded-md border" />
        </Card>

        <div className="space-y-4">
          <h2 className="font-semibold">Upcoming Jobs</h2>
          {mockUpcomingJobs.map((job) => (
            <Card key={job.id} className="p-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">{job.title}</h3>
                  <Badge variant="outline">{job.date}</Badge>
                </div>
                <p className="text-sm text-muted-foreground">{job.company}</p>
                <div className="text-sm">
                  <p>{job.time}</p>
                  <p>{job.location}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

