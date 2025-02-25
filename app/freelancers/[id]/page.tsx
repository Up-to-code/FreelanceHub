import Image from "next/image"
import { Star, MapPin, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ProjectCard } from "@/components/project-card"

// This would typically come from your database
const FREELANCER = {
  id: "1",
  name: "Alice Johnson",
  title: "Full Stack Developer",
  rating: 4.9,
  reviews: 124,
  hourlyRate: 85,
  location: "San Francisco, CA",
  memberSince: "January 2020",
  bio: "Experienced full stack developer with a passion for creating efficient, scalable web applications. Specialized in React, Node.js, and cloud technologies.",
  skills: ["React", "Node.js", "TypeScript", "AWS", "MongoDB", "GraphQL"],
  completedProjects: 78,
  onTimeDelivery: 100,
  onBudgetCompletion: 98,
}

const COMPLETED_PROJECTS = [
  {
    id: "1",
    title: "E-commerce Platform Development",
    description: "Built a full-featured e-commerce platform with React and Node.js",
    budget: 12000,
    deadline: "Completed on time",
    bidsCount: 0,
  },
  {
    id: "2",
    title: "Real-time Chat Application",
    description: "Developed a scalable real-time chat app using Socket.io and React",
    budget: 8000,
    deadline: "Completed on time",
    bidsCount: 0,
  },
  // Add more projects...
]

export default function FreelancerProfilePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="flex items-start gap-6 mb-6">
            <Image
              src="/placeholder.svg?height=100&width=100"
              alt={FREELANCER.name}
              width={100}
              height={100}
              className="rounded-full"
            />
            <div>
              <h1 className="text-3xl font-bold">{FREELANCER.name}</h1>
              <p className="text-xl text-muted-foreground">{FREELANCER.title}</p>
              <div className="flex items-center mt-2">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <span className="ml-1 font-semibold">{FREELANCER.rating}</span>
                <span className="ml-1 text-muted-foreground">({FREELANCER.reviews} reviews)</span>
              </div>
            </div>
          </div>
          <Card className="mb-8">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">About Me</h2>
              <p className="text-muted-foreground">{FREELANCER.bio}</p>
            </CardContent>
          </Card>
          <Card className="mb-8">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {FREELANCER.skills.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
          <h2 className="text-2xl font-semibold mb-4">Completed Projects</h2>
          <div className="space-y-6">
            {COMPLETED_PROJECTS.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </div>
        <div>
          <Card className="sticky top-4">
            <CardContent className="p-6">
              <div className="text-2xl font-bold mb-2">${FREELANCER.hourlyRate}/hr</div>
              <Button className="w-full mb-4">Hire {FREELANCER.name.split(" ")[0]}</Button>
              <div className="space-y-4 text-sm">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-muted-foreground" />
                  {FREELANCER.location}
                </div>
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-muted-foreground" />
                  Member since {FREELANCER.memberSince}
                </div>
              </div>
              <div className="border-t border-border mt-4 pt-4">
                <h3 className="font-semibold mb-2">Work Stats</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Completed Projects</span>
                    <span className="font-semibold">{FREELANCER.completedProjects}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">On-Time Delivery</span>
                    <span className="font-semibold">{FREELANCER.onTimeDelivery}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">On-Budget Completion</span>
                    <span className="font-semibold">{FREELANCER.onBudgetCompletion}%</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

