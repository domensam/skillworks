"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Drawer, DrawerContent } from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"

const mockChats = [
  {
    id: 1,
    name: "John from ABC Construction",
    lastMessage: "When can you start the project?",
    time: "2:30 PM",
    unread: true,
  },
  {
    id: 2,
    name: "XYZ Electrical Services",
    lastMessage: "Your application has been reviewed",
    time: "11:45 AM",
    unread: false,
  },
]

const mockMessages = [
  {
    id: 1,
    sender: "John from ABC Construction",
    message: "Hi! We reviewed your application for the construction worker position.",
    time: "2:25 PM",
    isSender: false,
  },
  {
    id: 2,
    sender: "You",
    message: "Thank you for considering my application!",
    time: "2:27 PM",
    isSender: true,
  },
  {
    id: 3,
    sender: "John from ABC Construction",
    message: "When can you start the project?",
    time: "2:30 PM",
    isSender: false,
  },
]

export default function ChatPage() {
  const [selectedChat, setSelectedChat] = useState<(typeof mockChats)[0] | null>(null)
  const [drawerOpen, setDrawerOpen] = useState(false)

  const handleChatSelect = (chat: typeof mockChats[0]) => {
    setSelectedChat(chat)
    setDrawerOpen(true)
  }

  const ChatMessages = () => (
    <div className="flex-1 flex flex-col h-full">
      <div className="border-b p-4 flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setDrawerOpen(false)}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <h2 className="font-semibold">{selectedChat?.name}</h2>
      </div>

      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {mockMessages.map((message) => (
            <div key={message.id} className={`flex ${message.isSender ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[80%] rounded-lg p-3 ${
                  message.isSender ? "bg-primary text-primary-foreground" : "bg-muted"
                }`}
              >
                <p className="text-sm">{message.message}</p>
                <p className="text-xs mt-1 opacity-70">{message.time}</p>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      <div className="border-t p-4">
        <div className="flex gap-2">
          <Input placeholder="Type a message..." className="flex-1" />
          <Button>Send</Button>
        </div>
      </div>
    </div>
  )

  return (
    <div className="flex h-[calc(100vh-8rem)]">
      {/* Chat List */}
      <div className="w-full md:max-w-xs md:border-r">
        <div className="p-4">
          <Input placeholder="Search chats..." className="w-full" />
        </div>
        <ScrollArea className="h-[calc(100vh-12rem)]">
          {mockChats.map((chat) => (
            <div
              key={chat.id}
              className="flex items-center gap-4 p-4 hover:bg-accent cursor-pointer"
              onClick={() => handleChatSelect(chat)}
            >
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-baseline">
                  <p className="font-medium truncate">{chat.name}</p>
                  <span className="text-xs text-muted-foreground">{chat.time}</span>
                </div>
                <p className="text-sm text-muted-foreground truncate">{chat.lastMessage}</p>
              </div>
              {chat.unread && <div className="h-2 w-2 rounded-full bg-primary"></div>}
            </div>
          ))}
        </ScrollArea>
      </div>

      {/* Desktop Chat Messages */}
      <div className="hidden md:flex flex-1">
        {selectedChat ? (
          <ChatMessages />
        ) : (
          <div className="flex-1 flex items-center justify-center text-muted-foreground">
            Select a chat to start messaging
          </div>
        )}
      </div>

      {/* Mobile Drawer */}
      <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
        <DrawerContent className="h-[calc(100vh-8rem)]">
          {selectedChat && <ChatMessages />}
        </DrawerContent>
      </Drawer>
    </div>
  )
}

