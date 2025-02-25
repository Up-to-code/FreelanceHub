"use client"

import { motion } from "framer-motion"
import { CheckCircle, Users, DollarSign, Globe } from "lucide-react"

export default function AboutPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.h1
        className="text-4xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About FreelanceHub
      </motion.h1>

      <motion.p className="text-xl text-center text-gray-600 mb-12" {...fadeIn}>
        FreelanceHub is the leading platform connecting talented freelancers with exciting projects worldwide.
      </motion.p>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <motion.div className="space-y-4" {...fadeIn} transition={{ delay: 0.2 }}>
          <h2 className="text-2xl font-semibold">Our Mission</h2>
          <p className="text-gray-600">
            We aim to revolutionize the way people work by providing a platform that empowers freelancers and helps
            businesses find the perfect talent for their projects.
          </p>
        </motion.div>
        <motion.div className="space-y-4" {...fadeIn} transition={{ delay: 0.4 }}>
          <h2 className="text-2xl font-semibold">Our Vision</h2>
          <p className="text-gray-600">
            To create a global ecosystem where talent meets opportunity, fostering innovation and enabling people to
            work without boundaries.
          </p>
        </motion.div>
      </div>

      <motion.h2 className="text-3xl font-bold text-center mb-8" {...fadeIn} transition={{ delay: 0.6 }}>
        Why Choose FreelanceHub?
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { icon: Users, title: "Top Talent", description: "Access to skilled professionals from around the world" },
          { icon: CheckCircle, title: "Quality Work", description: "Guaranteed high-quality deliverables" },
          { icon: DollarSign, title: "Competitive Pricing", description: "Find the right talent within your budget" },
          { icon: Globe, title: "Global Reach", description: "Connect with clients and freelancers worldwide" },
        ].map((item, index) => (
          <motion.div
            key={item.title}
            className="flex flex-col items-center text-center"
            {...fadeIn}
            transition={{ delay: 0.8 + index * 0.2 }}
          >
            <item.icon className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

