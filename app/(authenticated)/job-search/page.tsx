"use client"

import { CheckIcon, LoaderIcon, SparkleIcon } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";

const steps = [
    "Checking nearby areas",
    "Analyzing your skillset",
    "Filtering by TESDA-aligned job openings",
    "Summarizing results",
];

const dummyJobs = [
  { 
    id: 1, 
    title: "Construction Laborer", 
    company: "ABC Construction Co.",
    location: "Manila",
    salary: "₱500-800/day",
    startDate: "2024-02-20",
    endDate: "2024-03-20",
    description: "Assist with material handling, scaffolding, and site cleanup.",
    skillsRequired: ["Physical Strength", "Teamwork"],
    previewImages: ["/placeholder-image1.jpg", "/placeholder-image2.jpg"],
    documents: ["/document1.pdf"]
  },
  { 
    id: 2, 
    title: "Site Supervisor", 
    company: "BuildRight Industries",
    location: "Cebu",
    salary: "₱1000-1500/day",
    startDate: "2024-03-01",
    endDate: "2024-04-01",
    description: "Oversee construction site, manage teams, and ensure safety protocols.",
    skillsRequired: ["Leadership", "Communication", "Project Management"],
    previewImages: ["/placeholder-image3.jpg"],
    documents: ["/document2.pdf"]
  },
  { 
    id: 3, 
    title: "Mason", 
    company: "BrickMasters Inc.",
    location: "Davao",
    salary: "₱600/day",
    startDate: "2024-04-10",
    endDate: "2024-05-10",
    description: "Lay bricks and mortar as per blueprints.",
    skillsRequired: ["Attention to Detail"],
    previewImages: ["/placeholder-image4.jpg"],
    documents: []
  },
  { 
    id: 4, 
    title: "Carpenter", 
    company: "WoodCraft Builders",
    location: "Quezon City",
    salary: "₱800/day",
    startDate: "2024-05-05",
    endDate: "2024-06-05",
    description: "Craft and install wooden structures and frameworks.",
    skillsRequired: ["Precision", "Creativity"],
    previewImages: ["/placeholder-image5.jpg"],
    documents: ["/document3.pdf"]
  },
  { 
    id: 5, 
    title: "Electrician", 
    company: "Spark Energy Solutions",
    location: "Makati",
    salary: "₱900/day",
    startDate: "2024-06-01",
    endDate: "2024-07-01",
    description: "Install and maintain electrical systems ensuring compliance with safety standards.",
    skillsRequired: ["Technical Expertise", "Safety"],
    previewImages: ["/placeholder-image6.jpg"],
    documents: []
  },
];

export default function JobSearchPage() {
    const [searchStarted, setSearchStarted] = useState(false);
    const [currentStep, setCurrentStep] = useState(0);
    const [jobs, setJobs] = useState<Array<{ id: number; title: string; company: string }>>([]);

    const handleAISearch = () => {
        setSearchStarted(true);
        setCurrentStep(0);
        setJobs([]);
    };

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (searchStarted && currentStep < steps.length) {
            timer = setTimeout(() => {
                setCurrentStep((prev) => prev + 1);
            }, 500);
        } else if (searchStarted && currentStep === steps.length) {
            // After all steps completed, simulate delay before displaying jobs
            timer = setTimeout(() => {
                setJobs(dummyJobs);
            }, 500);
        }
        return () => clearTimeout(timer);
    }, [searchStarted, currentStep]);

    // Store jobs in local storage once they're loaded
    useEffect(() => {
        if(jobs.length > 0) {
            localStorage.setItem("jobs", JSON.stringify(jobs));
        }
    }, [jobs]);

    return (
        <div className="min-h-screen p-6 bg-white">
            {!searchStarted ? (
                <div className="space-y-4">
                    <h1 className="text-3xl font-bold">Job Search</h1>
                    <input
                        type="text"
                        placeholder="Enter job keywords..."
                        className="w-full p-2 border rounded-md"
                    />
                    <div className="flex space-x-2">
                        <button
                            onClick={handleAISearch}
                            className="px-4 py-2 text-white flex flex-row gap-2 bg-blue-600 rounded-md"
                        >
                            <SparkleIcon /> AI Search
                        </button>
                    </div>
                </div>
            ) : (
                <div className="space-y-6">
                    <header className="flex items-center space-x-2">
                        <button onClick={() => setSearchStarted(false)} className="text-xl">
                            ←
                        </button>
                        <h1 className="text-3xl font-bold">Find jobs</h1>
                    </header>
                    {jobs.length === 0 ? (
                        <div className="flex flex-col gap-4">
                            {steps.map((step, index) => (
                                <div
                                    key={index}
                                    className={`flex flex-col items-center justify-center p-4 rounded-md border ${index < currentStep
                                            ? "bg-gray-100"
                                            : "bg-gray-50 border-dashed"
                                        }`}
                                >
                                    <div className="mb-2">
                                        {index < currentStep ? <CheckIcon /> : index === currentStep ? <LoaderIcon className="animate-spin" /> : null}
                                    </div>
                                    <div className="text-sm text-gray-700 text-center">
                                        {step}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="max-h-96 overflow-y-auto space-y-4">
                            {jobs.map((job) => (
                                <Link key={job.id} href={`/dashboard/job/${job.id}`}>
                                    <div className="p-4 border rounded-md cursor-pointer hover:bg-gray-50">
                                        <h2 className="text-xl font-semibold">{job.title}</h2>
                                        <p className="text-gray-600">{job.company}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
