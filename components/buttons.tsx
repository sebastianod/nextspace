"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export function SignInButton() {
  const { data: session, status } = useSession();
  console.log(session, status);

  const handleSignIn = () => {
    signIn();
  };

  if (status === "loading") {
    return <>...</>;
  }

  if (status === "authenticated") {
    return (
      <Link href={`/dashboard`}>
        <Image
          src={session.user?.image ?? "/mememan.webp"}
          width={32}
          height={32}
          alt="Your Name"
          className=" rounded-full border-white border-dashed border-2"
        />
      </Link>
    );
  }

  return <button onClick={handleSignIn}>Sign in</button>;
}

export function SignOutButton() {
  const { data: session, status } = useSession();

  const handleSignOut = () => {
    signOut();
  };

  if (status === "authenticated") {
    return <button onClick={handleSignOut}>Sign out</button>;
  } else if (status === "unauthenticated" || "loading") {
    return <></>;
  }
}
