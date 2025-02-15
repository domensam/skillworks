"use client"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation";

export function SignOutButton() {
  const router = useRouter();

  const handleSignOut = () => {
    // Perform sign-out logic here (e.g., clear cookies, local storage)
    // For now, just redirect to the home page
    router.push("/");
  };

  return (
    <Button onClick={handleSignOut}>
      Sign Out
    </Button>
  )
}
