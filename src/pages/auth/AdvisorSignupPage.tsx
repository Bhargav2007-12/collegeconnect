import { Button } from "@/components/ui/button";
import { UserPlus } from "lucide-react";
import { AuthShell } from "./AuthShell";

export default function AdvisorSignupPage() {
  return (
    <AuthShell
      title="Advisor Sign Up"
      subtitle="Create your advisor account to start listing sessions."
    >
      <div className="flex flex-col sm:flex-row gap-3">
        <Button className="bg-neon-orange hover:bg-neon-orange/90 text-background font-semibold rounded-xl px-5 glow-orange transition-all duration-300 hover:shadow-neon-orange">
          <UserPlus size={16} className="mr-2" />
          Continue
        </Button>
        <Button
          variant="outline"
          className="border-neon-orange/40 text-neon-orange hover:bg-neon-orange/10 hover:border-neon-orange rounded-xl px-5 transition-all duration-300"
        >
          Learn more
        </Button>
      </div>
    </AuthShell>
  );
}

