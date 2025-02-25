import { Suspense } from "react"
import Link from "next/link"
import { Filter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ProjectListItem } from "@/components/project-list-item"
import { Skeleton } from "@/components/ui/skeleton"
import { Input } from "@/components/ui/input"

// This would typically come from your database
const PROJECTS = [
  {
    id: "1",
    title: "E-commerce Website Development",
    description: "Need a full-stack developer to build a modern e-commerce platform with Next.js and Node.js",
    budget: 8000,
    deadline: "45 days",
    bidsCount: 5,
    skills: ["Next.js", "Node.js", "E-commerce"],
  },
  {
    id: "2",
    title: "Mobile App UI Design",
    description: "Looking for a talented UI designer to create a sleek and intuitive mobile app interface",
    budget: 3000,
    deadline: "30 days",
    bidsCount: 8,
    skills: ["UI Design", "Mobile App", "Figma"],
  },
  {
    id: "3",
    title: "Data Analysis and Visualization",
    description: "Seeking a data analyst to process large datasets and create insightful visualizations",
    budget: 5000,
    deadline: "60 days",
    bidsCount: 3,
    skills: ["Data Analysis", "Python", "Tableau"],
  },
  // Add more projects...
]

function ProjectList() {
  return (
    <div className="space-y-6">
      {PROJECTS.map((project) => (
        <ProjectListItem key={project.id} {...project} />
      ))}
    </div>
  )
}

function ProjectSkeleton() {
  return (
    <div className="space-y-6">
      {[...Array(3)].map((_, i) => (
        <Skeleton key={i} className="h-[180px]" />
      ))}
    </div>
  )
}

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Find Work</h1>
          <p className="text-muted-foreground mt-2">Browse through available projects and start bidding</p>
        </div>
        <div className="flex gap-4">
          <Button asChild size="sm">
            <Link href="/projects/post">Post a Project</Link>
          </Button>
        </div>
      </div>
      <div className="mb-8 flex flex-col md:flex-row gap-4">
        <Input placeholder="Search projects..." className="md:w-1/3" />
        <Button variant="outline" size="sm" className="md:w-auto">
          <Filter className="h-4 w-4 mr-2" />
          Filters
        </Button>
      </div>
      <Suspense fallback={<ProjectSkeleton />}>
        <ProjectList />
      </Suspense>
    </div>
  )
}

