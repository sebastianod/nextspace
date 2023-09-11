import { prisma } from "@/lib/prisma";
export default async function Users() {
  const users = await prisma.user.findMany();

  const showUsers = users.map((user) => {});
  return <div></div>;
}
