import { notFound } from "next/navigation"
import { Clock, DollarSign, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { BidForm } from "@/components/bid-form"

// This would come from your database
const PROJECT = {
  id: "1",
  title: "E-commerce Website Development",
  description:
    "We're looking for an experienced full-stack developer to build a modern, scalable e-commerce platform. The ideal candidate will have strong skills in Next.js, Node.js, and experience with payment gateway integrations.",
  budget: 8000,
  deadline: "2023-08-30",
  postedDate: "2023-06-15",
  client: {
    name: "TechCorp Inc.",
    rating: 4.8,
    projectsPosted: 12,
  },
  skills: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "AWS"],
  bids: [
    {
      id: "1",
      freelancer: "Alice Smith",
      amount: 7500,
      duration: "40 days",
      proposal:
        "I have extensive experience in e-commerce development and have worked with all the technologies you've mentioned. I can deliver a high-quality, scalable solution within your timeframe.",
    },
    // Add more bids...
  ],
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  if (!PROJECT) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h1 className="text-3xl font-bold mb-2">{PROJECT.title}</h1>
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
            <div className="flex items-center">
              <DollarSign className="mr-1 h-4 w-4" />${PROJECT.budget}
            </div>
            <div className="flex items-center">
              <Clock className="mr-1 h-4 w-4" />
              Posted {PROJECT.postedDate}
            </div>
            <div className="flex items-center">
              <Users className="mr-1 h-4 w-4" />
              {PROJECT.bids.length} bids
            </div>
          </div>
          <Card className="mb-8">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Project Description</h2>
              <p className="text-muted-foreground mb-4">{PROJECT.description}</p>
              <h3 className="font-semibold mb-2">Required Skills</h3>
              <div className="flex flex-wrap gap-2">
                {PROJECT.skills.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
          <h2 className="text-2xl font-semibold mb-4">Bids</h2>
          <div className="space-y-4">
            {PROJECT.bids.map((bid) => (
              <Card key={bid.id}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-semibold">{bid.freelancer}</div>
                    <div className="text-xl font-bold">${bid.amount}</div>
                  </div>
                  <div className="text-sm text-muted-foreground mb-2">Delivery in {bid.duration}</div>
                  <p className="text-sm">{bid.proposal}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <div>
          <Card className="sticky top-4">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">About the Client</h3>
              <div className="space-y-2 text-sm">
                <div>
                  <span className="text-muted-foreground">Company:</span> {PROJECT.client.name}
                </div>
                <div>
                  <span className="text-muted-foreground">Rating:</span> {PROJECT.client.rating}/5
                </div>
                <div>
                  <span className="text-muted-foreground">Projects Posted:</span> {PROJECT.client.projectsPosted}
                </div>
              </div>
              <Separator className="my-6" />
              <BidForm projectId={PROJECT.id} />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

