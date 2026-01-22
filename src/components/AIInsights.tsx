import { motion } from "framer-motion";
import { Sparkles, TrendingUp, AlertCircle, CheckCircle, Zap } from "lucide-react";
import { Button } from "./ui/button";

const insights = [
  {
    type: "urgent",
    icon: AlertCircle,
    title: "3 urgent emails need response",
    description: "From John, Sarah, and Mike - all marked high priority",
    action: "View All",
  },
  {
    type: "suggestion",
    icon: Zap,
    title: "Auto-reply suggestion",
    description: "5 similar inquiries could use a template response",
    action: "Create Template",
  },
  {
    type: "success",
    icon: CheckCircle,
    title: "12 emails auto-processed",
    description: "Newsletters and promotions archived automatically",
    action: "Review",
  },
];

const typeStyles = {
  urgent: "bg-gmail/10 text-gmail border-gmail/20",
  suggestion: "bg-primary/10 text-primary border-primary/20",
  success: "bg-accent/10 text-accent border-accent/20",
};

export function AIInsights() {
  return (
    <div className="glass rounded-2xl h-full">
      <div className="p-5 border-b border-border/50">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center glow">
            <Sparkles className="h-5 w-5 text-primary-foreground" />
          </div>
          <div>
            <h2 className="font-semibold">AI Insights</h2>
            <p className="text-sm text-muted-foreground">Smart recommendations</p>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-3">
        {insights.map((insight, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`p-4 rounded-xl border ${typeStyles[insight.type as keyof typeof typeStyles]}`}
          >
            <div className="flex items-start gap-3">
              <insight.icon className="h-5 w-5 mt-0.5" />
              <div className="flex-1">
                <p className="font-medium text-sm">{insight.title}</p>
                <p className="text-xs text-muted-foreground mt-1">{insight.description}</p>
                <Button variant="link" size="sm" className="h-auto p-0 mt-2 text-xs">
                  {insight.action} →
                </Button>
              </div>
            </div>
          </motion.div>
        ))}

        {/* AI Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="p-4 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10 mt-4"
        >
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium">Weekly Summary</span>
          </div>
          <p className="text-xs text-muted-foreground">
            You've saved approximately <span className="font-medium text-foreground">4.5 hours</span>{" "}
            this week using AI-powered responses and auto-processing.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
