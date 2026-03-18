import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";
import { AuthShell } from "./AuthShell";

export default function StudentLoginPage() {
  return (
    <AuthShell
      title="Student Sign In"
      subtitle="Welcome back. Sign in to book and manage sessions."
    >
      <div className="flex flex-col sm:flex-row gap-3">
        <Button className="bg-neon-teal hover:bg-neon-teal/90 text-background font-semibold rounded-xl px-5 glow-teal transition-all duration-300 hover:shadow-neon-teal">
          <LogIn size={16} className="mr-2" />
          Continue
        </Button>
        <Button
          variant="outline"
          className="border-neon-teal/40 text-neon-teal hover:bg-neon-teal/10 hover:border-neon-teal rounded-xl px-5 transition-all duration-300"
        >
          Forgot password
        </Button>
      </div>
    </AuthShell>
  );
}

