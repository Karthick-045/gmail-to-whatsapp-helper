import { motion } from "framer-motion";
import { Mail, MessageCircle, Sparkles, TrendingUp } from "lucide-react";

const stats = [
  {
    label: "Emails Today",
    value: "24",
    change: "+12%",
    icon: Mail,
    color: "gmail",
  },
  {
    label: "WhatsApp Sent",
    value: "8",
    change: "+5%",
    icon: MessageCircle,
    color: "whatsapp",
  },
  {
    label: "AI Responses",
    value: "15",
    change: "+23%",
    icon: Sparkles,
    color: "primary",
  },
  {
    label: "Time Saved",
    value: "2.5h",
    change: "+45%",
    icon: TrendingUp,
    color: "accent",
  },
];

export function StatsCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1 }}
          className="glass rounded-2xl p-5 hover:shadow-lg transition-all duration-300 group cursor-pointer"
        >
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
              <p className="text-3xl font-bold mt-1">{stat.value}</p>
            </div>
            <div
              className={`h-10 w-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 ${
                stat.color === "gmail"
                  ? "bg-gmail/10 text-gmail"
                  : stat.color === "whatsapp"
                  ? "bg-whatsapp/10 text-whatsapp"
                  : stat.color === "primary"
                  ? "bg-primary/10 text-primary"
                  : "bg-accent/10 text-accent"
              }`}
            >
              <stat.icon className="h-5 w-5" />
            </div>
          </div>
          <div className="mt-3 flex items-center gap-1">
            <span className="text-xs font-medium text-accent">{stat.change}</span>
            <span className="text-xs text-muted-foreground">vs last week</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
