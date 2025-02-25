import { Suspense } from "react"
import { BarChart, BriefcaseIcon, Clock, DollarSign } from "lucide-react"

import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProjectCard } from "@/components/project-card"
import { Skeleton } from "@/components/ui/skeleton"

// This would come from your database
const ACTIVE_PROJECTS = [
  {
    id: "1",
    title: "Website Redesign",
    description: "Redesigning company website with modern UI/UX",
    budget: 4000,
    deadline: "15 days",
    bidsCount: 3,
  },
  // Add more projects...
]

function Stats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card className="p-6">
        <div className="flex items-center gap-2">
          <BriefcaseIcon className="h-4 w-4 text-muted-foreground" />
          <h3 className="font-semibold">Active Projects</h3>
        </div>
        <div className="mt-4">
          <div className="text-3xl font-bold">12</div>
          <p className="text-xs text-muted-foreground">+2 this month</p>
        </div>
      </Card>
      <Card className="p-6">
        <div className="flex items-center gap-2">
          <DollarSign className="h-4 w-4 text-muted-foreground" />
          <h3 className="font-semibold">Total Earnings</h3>
        </div>
        <div className="mt-4">
          <div className="text-3xl font-bold">$8,450</div>
          <p className="text-xs text-muted-foreground">+$1,250 this month</p>
        </div>
      </Card>
      <Card className="p-6">
        <div className="flex items-center gap-2">
          <BarChart className="h-4 w-4 text-muted-foreground" />
          <h3 className="font-semibold">Success Rate</h3>
        </div>
        <div className="mt-4">
          <div className="text-3xl font-bold">95%</div>
          <p className="text-xs text-muted-foreground">+2% from last month</p>
        </div>
      </Card>
      <Card className="p-6">
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4 text-muted-foreground" />
          <h3 className="font-semibold">Response Time</h3>
        </div>
        <div className="mt-4">
          <div className="text-3xl font-bold">2h</div>
          <p className="text-xs text-muted-foreground">Average response time</p>
        </div>
      </Card>
    </div>
  )
}

function ProjectList() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {ACTIVE_PROJECTS.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  )
}

export default function DashboardPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back! Here's what's happening with your projects.</p>
      </div>
      <Stats />
      <Tabs defaultValue="projects" className="mt-8">
        <TabsList>
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="bids">My Bids</TabsTrigger>
          <TabsTrigger value="messages">Messages</TabsTrigger>
        </TabsList>
        <TabsContent value="projects" className="mt-6">
          <Suspense fallback={<Skeleton className="h-[400px]" />}>
            <ProjectList />
          </Suspense>
        </TabsContent>
        <TabsContent value="bids">Bids content...</TabsContent>
        <TabsContent value="messages">Messages content...</TabsContent>
      </Tabs>
    </div>
  )
}

