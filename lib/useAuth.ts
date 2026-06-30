"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "./supabase";
import type { User } from "@supabase/supabase-js";

export function useRequireAuth() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const supabase = createClient();

    // Check session immediately from storage (fast, no network)
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        setUser(session.user);
        setReady(true);
      } else {
        router.push("/login");
      }
    });

    // Keep in sync for sign-out / token refresh
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_OUT") {
        router.push("/login");
      } else if (event === "SIGNED_IN" || event === "TOKEN_REFRESHED") {
        if (session) {
          setUser(session.user);
          setReady(true);
        }
      }
    });

    return () => subscription.unsubscribe();
  }, [router]);

  return { user, ready };
}
