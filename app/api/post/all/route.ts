import Post from "@/models/post";
import { connectToDB } from "@/utils/dbconnect";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    connectToDB();
    //find all available posts
    const rs = await Post.find()
      .select("title body createdAt src _id")
      .populate({
        path: "author",
        select: "-password",
      });

    if (!rs) {
      return new Response(
        JSON.stringify({ message: "Something went wrong " }),
        {
          status: 400,
        }
      );
    }

    //return all the posts
    return new Response(JSON.stringify(rs), {
      status: 200,
    });
  } catch (err) {
    return new Response(JSON.stringify({ message: "Something went wrong " }), {
      status: 500,
    });
  }
}
