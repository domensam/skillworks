"use client"

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function SeekerDashboard() {
  const [activeJobs, setActiveJobs] = useState<Array<any>>([]);

  useEffect(() => {
    const storedJobsStr = localStorage.getItem("jobs") || "[]";
    const storedJobs = JSON.parse(storedJobsStr);
    setActiveJobs(storedJobs);
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Here are your active jobs</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {activeJobs.length > 0 ? (
          activeJobs.map((job) => (
            <Link key={job.id} href={`/dashboard/job/${job.id}`}>
              <Card className="p-6 cursor-pointer hover:bg-gray-50">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <h3 className="font-semibold">{job.title}</h3>
                    <p className="text-sm text-muted-foreground">{job.company}</p>
                  </div>
                  <Badge variant="default">Active</Badge>
                </div>
                {job.previewImage && (
                  <img src={job.previewImage} alt="Job Preview" className="mt-2 w-full h-24 object-cover" />
                )}
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
                    <span className="ml-2 text-muted-foreground">{job.startDate} - {job.endDate}</span>
                  </div>
                </div>
              </Card>
            </Link>
          ))
        ) : (
          <p>No active jobs found.</p>
        )}
      </div>
    </div>
  );
}
