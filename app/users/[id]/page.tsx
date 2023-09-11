import { prisma } from "@/lib/prisma";

interface Props {
  params: { id: string };
}

export default async function UserProfile({ params }: Props) {
  //destructuring params only
  const user = await prisma.user.findUnique({ where: { id: params.id } });
  const { name, bio, image } = user ?? {};
  return (
    <div className=" flex flex-col p-2">
      <h1>{name}</h1>
      <img
        width={300}
        src={image ?? `/mememan.webp`}
        alt={`${name}'s profile`}
      />
      <h3>Bio</h3>
      <p>{bio}</p>
    </div>
  );
}
