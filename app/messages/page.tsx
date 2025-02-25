"use client"

import { useState } from "react"
import { Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

// This would come from your database
const CONVERSATIONS = [
  {
    id: "1",
    user: "John Doe",
    lastMessage: "Hey, I'm interested in your proposal",
    timestamp: "2 min ago",
    unread: true,
  },
  // Add more conversations...
]

const MESSAGES = [
  {
    id: "1",
    sender: "John Doe",
    content: "Hi, I saw your bid on my project",
    timestamp: "10:30 AM",
  },
  {
    id: "2",
    sender: "me",
    content: "Yes, I'm very interested in working on it",
    timestamp: "10:32 AM",
  },
  // Add more messages...
]

export default function MessagesPage() {
  const [message, setMessage] = useState("")

  return (
    <div className="container mx-auto grid h-[calc(100vh-4rem)] gap-8 px-4 py-8 lg:grid-cols-[300px_1fr]">
      <div className="flex flex-col border rounded-lg">
        <div className="p-4">
          <h2 className="font-semibold">Messages</h2>
        </div>
        <Separator />
        <ScrollArea className="flex-1">
          {CONVERSATIONS.map((conversation) => (
            <button key={conversation.id} className="flex w-full items-center gap-4 p-4 hover:bg-muted">
              <div className="flex-1 text-left">
                <div className="font-semibold">{conversation.user}</div>
                <div className="text-sm text-muted-foreground">{conversation.lastMessage}</div>
              </div>
              <div className="text-xs text-muted-foreground">{conversation.timestamp}</div>
              {conversation.unread && <div className="h-2 w-2 rounded-full bg-primary" />}
            </button>
          ))}
        </ScrollArea>
      </div>
      <div className="flex flex-col border rounded-lg">
        <div className="border-b p-4">
          <h2 className="font-semibold">John Doe</h2>
          <div className="text-sm text-muted-foreground">Website Redesign Project</div>
        </div>
        <ScrollArea className="flex-1 p-4">
          <div className="space-y-4">
            {MESSAGES.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`rounded-lg px-4 py-2 ${
                    msg.sender === "me" ? "bg-primary text-primary-foreground" : "bg-muted"
                  }`}
                >
                  <div className="text-sm">{msg.content}</div>
                  <div className="mt-1 text-xs opacity-70">{msg.timestamp}</div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
        <div className="border-t p-4">
          <form
            onSubmit={(e) => {
              e.preventDefault()
              // Handle message sending
              setMessage("")
            }}
            className="flex gap-4"
          >
            <Input placeholder="Type a message..." value={message} onChange={(e) => setMessage(e.target.value)} />
            <Button type="submit" size="icon">
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

