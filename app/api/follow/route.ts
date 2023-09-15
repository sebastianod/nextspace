import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  const currentUserEmail = session?.user?.email!;
  const { userToFollowId } = await req.json();

  //currentUser and userToFollow's ids make the following-relation's unique id= CUid+UFid
  //so let's find the currentUser's id
  const currentUserId = await prisma.user
    .findUnique({ where: { email: currentUserEmail } })
    .then((user) => user?.id!);

  //Create the follows relationship and show a record of it
  const record = await prisma.follows.create({
    data: { followerId: currentUserEmail, followingId: userToFollowId },
  });
  return NextResponse.json(record);
}

export async function DELETE(req: NextRequest) {
  const session = await getServerSession(authOptions);
  const currentUserEmail = session?.user?.email!;
  const userToFollowId = req.nextUrl.searchParams.get("userToFollowId");

  const currentUserId = await prisma.user
    .findUnique({ where: { email: currentUserEmail } })
    .then((user) => user?.id!);

  const record = await prisma.follows.delete({
    where: {
      followerId_followingId: {
        followerId: currentUserId,
        followingId: userToFollowId!,
      },
    },
  });

  return NextResponse.json(record);
}
