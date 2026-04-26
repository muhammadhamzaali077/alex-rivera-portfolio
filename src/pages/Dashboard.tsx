import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, LogOut, Mail, Sparkles, User } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

interface Profile {
  display_name: string | null;
  bio: string | null;
  created_at: string;
}

const Dashboard = () => {
  const { user, signOut } = useAuth();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;
    supabase
      .from("profiles")
      .select("display_name, bio, created_at")
      .eq("id", user.id)
      .maybeSingle()
      .then(({ data, error }) => {
        if (error) {
          toast({ title: "Could not load profile", description: error.message, variant: "destructive" });
        } else {
          setProfile(data as Profile | null);
        }
        setLoading(false);
      });
  }, [user]);

  const handleSignOut = async () => {
    await signOut();
    toast({ title: "Signed out" });
  };

  const joined = profile?.created_at
    ? new Date(profile.created_at).toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" })
    : "—";

  return (
    <main className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_70%)]" />
      <div className="absolute -top-40 -left-40 size-[480px] rounded-full bg-primary/25 blur-[120px] animate-float" />
      <div className="absolute -bottom-40 -right-40 size-[480px] rounded-full bg-secondary/25 blur-[120px] animate-float" style={{ animationDelay: "2s" }} />

      <div className="container relative pt-10 pb-20">
        <div className="flex items-center justify-between mb-12">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition">
            <ArrowLeft className="size-4" />
            Back to portfolio
          </Link>
          <button
            onClick={handleSignOut}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm font-medium text-foreground hover:border-secondary/60 hover:shadow-cyan transition-all"
          >
            <LogOut className="size-4" />
            Sign out
          </button>
        </div>

        <header className="mb-10">
          <p className="text-secondary font-mono text-sm uppercase tracking-widest mb-3">Private area</p>
          <h1 className="font-display text-4xl lg:text-5xl font-bold">
            Welcome{profile?.display_name ? "," : " back"}{" "}
            <span className="text-gradient">{profile?.display_name ?? "friend"}</span>.
          </h1>
          <p className="text-muted-foreground mt-3 max-w-xl">
            This dashboard is only visible to authenticated users. Build your private features here.
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="glass rounded-3xl p-6 md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <span className="size-10 rounded-xl bg-gradient-primary grid place-items-center text-primary-foreground shadow-glow">
                <User className="size-5" />
              </span>
              <h2 className="font-display text-xl font-bold">Your account</h2>
            </div>
            {loading ? (
              <div className="space-y-3">
                <div className="h-4 w-1/3 rounded bg-muted animate-pulse" />
                <div className="h-4 w-2/3 rounded bg-muted animate-pulse" />
              </div>
            ) : (
              <dl className="grid sm:grid-cols-2 gap-5">
                <div>
                  <dt className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Email</dt>
                  <dd className="font-mono text-foreground flex items-center gap-2">
                    <Mail className="size-3.5 text-secondary" />
                    {user?.email}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Display name</dt>
                  <dd className="text-foreground">{profile?.display_name ?? "—"}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Member since</dt>
                  <dd className="text-foreground">{joined}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-widest text-muted-foreground mb-1">User ID</dt>
                  <dd className="font-mono text-xs text-muted-foreground truncate">{user?.id}</dd>
                </div>
              </dl>
            )}
          </div>

          <div className="glass rounded-3xl p-6 flex flex-col justify-between">
            <div>
              <Sparkles className="size-6 text-secondary mb-3" />
              <h3 className="font-display text-lg font-bold">You're all set</h3>
              <p className="text-sm text-muted-foreground mt-2">
                Your session is secured by Lovable Cloud. Protected routes redirect to login automatically.
              </p>
            </div>
            <Link
              to="/"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-primary px-4 py-3 font-semibold text-primary-foreground shadow-glow hover:scale-[1.02] transition-transform"
            >
              View portfolio
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
