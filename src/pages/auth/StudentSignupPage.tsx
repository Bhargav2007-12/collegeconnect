import { Button } from "@/components/ui/button";
import { UserPlus } from "lucide-react";
import { AuthShell } from "./AuthShell";

export default function StudentSignupPage() {
  return (
    <AuthShell
      title="Student Sign Up"
      subtitle="Create your student account to book sessions with advisors."
    >
      <div className="flex flex-col sm:flex-row gap-3">
        <Button className="bg-neon-teal hover:bg-neon-teal/90 text-background font-semibold rounded-xl px-5 glow-teal transition-all duration-300 hover:shadow-neon-teal">
          <UserPlus size={16} className="mr-2" />
          Continue
        </Button>
        <Button
          variant="outline"
          className="border-neon-teal/40 text-neon-teal hover:bg-neon-teal/10 hover:border-neon-teal rounded-xl px-5 transition-all duration-300"
        >
          Learn more
        </Button>
      </div>
    </AuthShell>
  );
}

