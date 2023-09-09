"use client";

import { SessionProvider } from "next-auth/react"; //access to current user

type Props = {
  children: React.ReactNode; //very broad, like saying any
};

//Since sessionProvider is client-side, we created this file to act as a wrapper
// that can work inside our server app in layout.tsx
export default function AuthProvider({ children }: Props) {
  return <SessionProvider>{children}</SessionProvider>;
}
