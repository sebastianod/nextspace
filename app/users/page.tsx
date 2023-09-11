import { prisma } from "@/lib/prisma";
import UserCard from "@/components/UserCard/UserCard";

export default async function Users() {
  const users = await prisma.user.findMany();

  const showUsers = users.map((user) => {
    return <UserCard key={user.id} {...user} />;
  });
  return <div className=" grid grid-cols-4 gap-2 p-5">{showUsers}</div>;
}
