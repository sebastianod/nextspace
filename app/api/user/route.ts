import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function PUT(req: Request) { // PUT is used for db updates
    const session = await getServerSession(authOptions);
    const currentUserEmail = session?.user?.email!;

    const data = await req.json(); //get the incoming data in req as json
    data.age = Number(data.age); //json has age as a string, turn to #

    //update the db with "data" given
    const user= await prisma.user.update({
        where: { email: currentUserEmail }, 
        data,
    });

    return NextResponse.json(user);
}