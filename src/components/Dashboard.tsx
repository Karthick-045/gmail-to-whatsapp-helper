import { motion } from "framer-motion";
import { Mail, MessageCircle, Sparkles, Bell, Settings, BarChart3 } from "lucide-react";
import { EmailNotifications } from "./EmailNotifications";
import { WhatsAppComposer } from "./WhatsAppComposer";
import { AIInsights } from "./AIInsights";
import { StatsCards } from "./StatsCards";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

export function Dashboard() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 glass border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3"
            >
              <div className="relative">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center glow">
                  <Sparkles className="h-5 w-5 text-primary-foreground" />
                </div>
                <div className="absolute -top-1 -right-1 h-3 w-3 bg-accent rounded-full animate-pulse" />
              </div>
              <div>
                <h1 className="text-xl font-semibold tracking-tight">Hey, Karthi! 👋</h1>
                <p className="text-xs text-muted-foreground">Your AI Notification Manager</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2"
            >
              <button className="p-2 rounded-lg hover:bg-secondary transition-colors">
                <Bell className="h-5 w-5 text-muted-foreground" />
              </button>
              <button className="p-2 rounded-lg hover:bg-secondary transition-colors">
                <BarChart3 className="h-5 w-5 text-muted-foreground" />
              </button>
              <button className="p-2 rounded-lg hover:bg-secondary transition-colors">
                <Settings className="h-5 w-5 text-muted-foreground" />
              </button>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Stats Overview */}
          <motion.div variants={itemVariants}>
            <StatsCards />
          </motion.div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Email Notifications - Takes 2 columns */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <EmailNotifications />
            </motion.div>

            {/* AI Insights */}
            <motion.div variants={itemVariants}>
              <AIInsights />
            </motion.div>
          </div>

          {/* WhatsApp Composer */}
          <motion.div variants={itemVariants}>
            <WhatsAppComposer />
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}
