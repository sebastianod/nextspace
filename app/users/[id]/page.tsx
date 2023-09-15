import FollowServerButton from "@/components/FollowButton/FollowServerButton";
import { prisma } from "@/lib/prisma";
import { Metadata } from "next"; //to give the type of promise for generateMetadata

interface Props {
  params: { id: string };
}

//generateMetadata docs: https://nextjs.org/docs/app/api-reference/functions/generate-metadata
//Input, Output explanation:
//1. Extract the params property from an object of type Props and assign it to a variable called params.
//2. `: Promise<Metadata>` specifies that this function returns a promise (asynchronous operation) that eventually resolves to an object of type Metadata. 
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const user = await prisma.user.findUnique({ where: { id: params.id } });
  return { title: `User profile of ${user?.name}`};
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
        className=" mb-3 rounded-lg"
      />
      <h3 className=" text-xl">Bio</h3>
      <p>{bio ?? "I'm a sample NextSpace participant's bio!"}</p>
      <FollowServerButton targetUserId={params.id}/>
    </div>
  );
}
