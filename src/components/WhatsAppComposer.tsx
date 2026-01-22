import { motion } from "framer-motion";
import { MessageCircle, Send, Sparkles, User, Users, Paperclip, Smile } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const recentContacts = [
  { id: 1, name: "John Doe", phone: "+1 234 567 8900", avatar: "J" },
  { id: 2, name: "Team Group", phone: "12 members", avatar: "T", isGroup: true },
  { id: 3, name: "Sarah Wilson", phone: "+1 987 654 3210", avatar: "S" },
];

const quickReplies = [
  "I'll check and get back to you",
  "Thanks for the update!",
  "Let's schedule a call",
  "Received, processing now",
];

export function WhatsAppComposer() {
  const [selectedContact, setSelectedContact] = useState<number | null>(null);
  const [message, setMessage] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerateAI = () => {
    setIsGenerating(true);
    // Simulate AI generation
    setTimeout(() => {
      setMessage(
        "Hi! I wanted to follow up on our earlier email conversation. I've reviewed the project details and would like to discuss the next steps. Would you be available for a quick call this week?"
      );
      setIsGenerating(false);
    }, 1500);
  };

  return (
    <div className="glass rounded-2xl overflow-hidden">
      <div className="p-5 border-b border-border/50">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-whatsapp/10 flex items-center justify-center">
            <MessageCircle className="h-5 w-5 text-whatsapp" />
          </div>
          <div>
            <h2 className="font-semibold">WhatsApp Composer</h2>
            <p className="text-sm text-muted-foreground">Send AI-powered messages</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-border/50">
        {/* Contacts */}
        <div className="p-4">
          <p className="text-sm font-medium mb-3 text-muted-foreground">Recent Contacts</p>
          <div className="space-y-2">
            {recentContacts.map((contact) => (
              <motion.button
                key={contact.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedContact(contact.id)}
                className={`w-full p-3 rounded-xl flex items-center gap-3 transition-colors ${
                  selectedContact === contact.id
                    ? "bg-whatsapp/10 border border-whatsapp/20"
                    : "hover:bg-secondary"
                }`}
              >
                <div
                  className={`h-10 w-10 rounded-full flex items-center justify-center text-sm font-medium ${
                    contact.isGroup
                      ? "bg-gradient-to-br from-whatsapp/20 to-accent/20"
                      : "bg-gradient-to-br from-primary/20 to-whatsapp/20"
                  }`}
                >
                  {contact.isGroup ? <Users className="h-5 w-5" /> : contact.avatar}
                </div>
                <div className="text-left">
                  <p className="font-medium text-sm">{contact.name}</p>
                  <p className="text-xs text-muted-foreground">{contact.phone}</p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Composer */}
        <div className="lg:col-span-2 p-4">
          <div className="space-y-4">
            {/* Quick Replies */}
            <div>
              <p className="text-sm font-medium mb-2 text-muted-foreground">Quick Replies</p>
              <div className="flex flex-wrap gap-2">
                {quickReplies.map((reply, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setMessage(reply)}
                    className="px-3 py-1.5 rounded-full text-xs bg-secondary hover:bg-secondary/80 transition-colors"
                  >
                    {reply}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Message Input */}
            <div className="space-y-3">
              <Textarea
                placeholder="Type your message or let AI generate one..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="min-h-[120px] resize-none bg-secondary/50 border-border/50"
              />

              <div className="flex items-center justify-between gap-2">
                <div className="flex gap-2">
                  <Button variant="outline" size="icon" className="h-9 w-9">
                    <Paperclip className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="h-9 w-9">
                    <Smile className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleGenerateAI}
                    disabled={isGenerating}
                    className="gap-2"
                  >
                    <Sparkles className={`h-4 w-4 ${isGenerating ? "animate-spin" : ""}`} />
                    {isGenerating ? "Generating..." : "AI Generate"}
                  </Button>
                </div>

                <Button
                  className="gap-2 bg-whatsapp hover:bg-whatsapp/90"
                  disabled={!message || !selectedContact}
                >
                  <Send className="h-4 w-4" />
                  Send Message
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
