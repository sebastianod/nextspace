import Image from "next/image";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(); //get user on server

  // if (!session) { //protecting route server side
  //   redirect("/api/auth/signin");
  //   // return <p>You must be signed in...</p>
  // }
  return <main></main>;
}
