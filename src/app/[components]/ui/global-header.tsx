"use client";

import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";

export default function GlobalHeader() {
  const pathname = usePathname() ?? "/";

  return (
    !pathname.startsWith("/sign-in") && (
      <header className="flex border-2 border-white justify-between">
        <div>yorpat</div>
        <div>
          <SignedOut>
            <a href="/dashboard">signin</a>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </header>
    )
  );
}
