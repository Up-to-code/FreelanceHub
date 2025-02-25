"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle, FileText, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-white to-gray-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Find the Perfect Freelancer for Your Project
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Connect with skilled professionals and get your projects done efficiently and affordably.
                </p>
              </motion.div>
              <motion.div
                className="space-x-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <Button asChild>
                  <Link href="/projects">
                    Find Freelancers
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/projects/post">Post a Project</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <motion.h2
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8"
              {...fadeIn}
            >
              How It Works
            </motion.h2>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: FileText,
                  title: "Post a Project",
                  description: "Describe your project and the skills you need.",
                },
                { icon: Users, title: "Receive Bids", description: "Get proposals from skilled freelancers." },
                {
                  icon: CheckCircle,
                  title: "Choose & Collaborate",
                  description: "Select the best fit and start working together.",
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center text-center"
                  {...fadeIn}
                  transition={{ delay: 0.2 * index }}
                >
                  <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mb-4">
                    <step.icon size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-500">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <motion.h2
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8"
              {...fadeIn}
            >
              Why Choose FreelanceHub?
            </motion.h2>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "Access to top talent worldwide",
                "Secure payment protection",
                "24/7 customer support",
                "Easy-to-use platform",
                "Competitive pricing",
                "Quality work guaranteed",
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-4"
                  {...fadeIn}
                  transition={{ delay: 0.1 * index }}
                >
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <p className="text-lg font-medium">{feature}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <motion.div className="flex flex-col items-center space-y-4 text-center" {...fadeIn}>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Get Started?</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Join thousands of freelancers and businesses already using FreelanceHub.
              </p>
              <Button asChild size="lg">
                <Link href="/signup">
                  Sign Up Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="w-full py-6 bg-gray-100">
        <div className="container px-4 md:px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-sm text-gray-500">© 2023 FreelanceHub. All rights reserved.</p>
          </div>
          <nav className="flex space-x-4">
            <Link href="/about" className="text-sm text-gray-500 hover:text-gray-900">
              About
            </Link>
            <Link href="#" className="text-sm text-gray-500 hover:text-gray-900">
              Terms
            </Link>
            <Link href="#" className="text-sm text-gray-500 hover:text-gray-900">
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

