import { motion, AnimatePresence } from "framer-motion";
import { Mail, Star, Clock, MoreHorizontal, Send, Sparkles } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

const mockEmails = [
  {
    id: 1,
    sender: "John Doe",
    email: "john@company.com",
    subject: "Project Update Required",
    preview: "Hi, I wanted to follow up on the project status...",
    time: "2 min ago",
    starred: true,
    priority: "high",
    aiSuggestion: "Suggest sending a brief status update with timeline",
  },
  {
    id: 2,
    sender: "Sarah Wilson",
    email: "sarah@client.io",
    subject: "Meeting Tomorrow",
    preview: "Can we reschedule our meeting to 3 PM?",
    time: "15 min ago",
    starred: false,
    priority: "medium",
    aiSuggestion: "Confirm availability and send calendar invite",
  },
  {
    id: 3,
    sender: "Newsletter",
    email: "news@techweekly.com",
    subject: "Weekly Tech Digest",
    preview: "This week's top stories in technology...",
    time: "1 hour ago",
    starred: false,
    priority: "low",
    aiSuggestion: "Archive - no response needed",
  },
  {
    id: 4,
    sender: "Mike Chen",
    email: "mike@startup.co",
    subject: "Partnership Opportunity",
    preview: "We'd love to discuss a potential collaboration...",
    time: "3 hours ago",
    starred: true,
    priority: "high",
    aiSuggestion: "Schedule a call to discuss further",
  },
];

const priorityColors = {
  high: "bg-gmail/10 text-gmail border-gmail/20",
  medium: "bg-primary/10 text-primary border-primary/20",
  low: "bg-muted text-muted-foreground border-muted",
};

export function EmailNotifications() {
  const [selectedEmail, setSelectedEmail] = useState<number | null>(null);
  const [emails, setEmails] = useState(mockEmails);

  const handleSendToWhatsApp = (emailId: number) => {
    // This would trigger WhatsApp integration
    console.log("Sending email summary to WhatsApp for email:", emailId);
  };

  return (
    <div className="glass rounded-2xl overflow-hidden">
      <div className="p-5 border-b border-border/50">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-gmail/10 flex items-center justify-center">
              <Mail className="h-5 w-5 text-gmail" />
            </div>
            <div>
              <h2 className="font-semibold">Gmail Notifications</h2>
              <p className="text-sm text-muted-foreground">{emails.length} unread messages</p>
            </div>
          </div>
          <Button variant="outline" size="sm" className="gap-2">
            <Sparkles className="h-4 w-4" />
            Auto-Process
          </Button>
        </div>
      </div>

      <div className="divide-y divide-border/50">
        <AnimatePresence>
          {emails.map((email) => (
            <motion.div
              key={email.id}
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: -100 }}
              className={`p-4 hover:bg-secondary/50 transition-colors cursor-pointer ${
                selectedEmail === email.id ? "bg-secondary/50" : ""
              }`}
              onClick={() => setSelectedEmail(selectedEmail === email.id ? null : email.id)}
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-sm font-medium">
                    {email.sender.charAt(0)}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="font-medium truncate">{email.sender}</span>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full border ${
                          priorityColors[email.priority as keyof typeof priorityColors]
                        }`}
                      >
                        {email.priority}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <button
                        className={`p-1 rounded hover:bg-secondary ${
                          email.starred ? "text-yellow-500" : "text-muted-foreground"
                        }`}
                        onClick={(e) => {
                          e.stopPropagation();
                          setEmails(
                            emails.map((e) =>
                              e.id === email.id ? { ...e, starred: !e.starred } : e
                            )
                          );
                        }}
                      >
                        <Star className="h-4 w-4" fill={email.starred ? "currentColor" : "none"} />
                      </button>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {email.time}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm font-medium mt-1">{email.subject}</p>
                  <p className="text-sm text-muted-foreground truncate">{email.preview}</p>

                  {/* AI Suggestion & Actions */}
                  <AnimatePresence>
                    {selectedEmail === email.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-3 pt-3 border-t border-border/50"
                      >
                        <div className="flex items-start gap-2 p-3 rounded-lg bg-primary/5 border border-primary/10">
                          <Sparkles className="h-4 w-4 text-primary mt-0.5" />
                          <div className="flex-1">
                            <p className="text-xs font-medium text-primary">AI Suggestion</p>
                            <p className="text-sm text-muted-foreground mt-0.5">
                              {email.aiSuggestion}
                            </p>
                          </div>
                        </div>
                        <div className="flex gap-2 mt-3">
                          <Button size="sm" variant="outline" className="flex-1 gap-2">
                            <Mail className="h-4 w-4" />
                            Reply with AI
                          </Button>
                          <Button
                            size="sm"
                            className="flex-1 gap-2 bg-whatsapp hover:bg-whatsapp/90"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleSendToWhatsApp(email.id);
                            }}
                          >
                            <Send className="h-4 w-4" />
                            Send to WhatsApp
                          </Button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
