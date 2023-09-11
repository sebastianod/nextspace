import { prisma } from "@/lib/prisma";

interface Props {
  params: { id: string };
}

export default async function UserProfile({ params }: Props) {
  //destructuring params only
  const user = await prisma.user.findUnique({ where: { id: params.id } });
  const { name, bio, image } = user ?? {};
  return (
    <div className=" flex flex-col p-5">
      <h1 className=" text-4xl mb-3">{name}</h1>
      <img
        width={300}
        src={image ?? `/mememan.webp`}
        alt={`${name}'s profile`}
        className=" mb-3"
      />
      <h3 className=" text-xl">Bio</h3>
      <p>{bio ?? "This is a sample bio."}</p>
    </div>
  );
}
