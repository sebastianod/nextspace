import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const users = await prisma.user.findMany(); //retrieves all users and shows them as json objects
    console.log(users);
    return NextResponse.json(users);
}