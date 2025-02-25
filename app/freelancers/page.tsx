import { Suspense } from "react"
import { Search } from "lucide-react"

import { Input } from "@/components/ui/input"
import { FreelancerCard } from "@/components/freelancer-card"
import { Skeleton } from "@/components/ui/skeleton"

// This would come from your database
const FREELANCERS = [
  {
    id: "1",
    name: "Sarah Johnson",
    title: "Full Stack Developer",
    rating: 4.9,
    hourlyRate: 65,
    skills: ["React", "Node.js", "PostgreSQL"],
    completedProjects: 34,
  },
  // Add more freelancers...
]

function FreelancerList() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {FREELANCERS.map((freelancer) => (
        <FreelancerCard key={freelancer.id} {...freelancer} />
      ))}
    </div>
  )
}

function FreelancerSkeleton() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {[...Array(6)].map((_, i) => (
        <Skeleton key={i} className="h-[200px]" />
      ))}
    </div>
  )
}

export default function FreelancersPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Find Freelancers</h1>
        <p className="text-muted-foreground">Browse through our talented freelancers</p>
        <div className="mt-4 flex gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search by skill or job title..." className="pl-9" />
          </div>
        </div>
      </div>
      <Suspense fallback={<FreelancerSkeleton />}>
        <FreelancerList />
      </Suspense>
    </div>
  )
}

