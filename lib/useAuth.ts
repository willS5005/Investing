"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "@/app/components/SessionProvider";

export function useRequireAuth() {
  const router = useRouter();
  const { user, ready } = useSession();

  useEffect(() => {
    if (!ready) return;
    if (!user) {
      router.push("/login");
    }
  }, [ready, user, router]);

  return { user, ready };
}
