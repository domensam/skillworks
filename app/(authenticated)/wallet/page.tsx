import { redirect } from "next/navigation"

// Simulated user type. In production, derive from session or context.
const userType: "seeker" | "provider" = "seeker"

export default function WalletRoute() {
  // Redirect based on user type.
  redirect(`/wallet/${userType}`)
  return null
}

