import * as interfaces from "@/types/interfaces";
import { payloadManipulation } from "@/utils/utils";
import { NextResponse } from "next/server";

export async function GET(): Promise<
  NextResponse<{ data: interfaces.GithubReposProps[] }> | undefined
> {
  try {
    const response = await fetch(
      `https://api.github.com/users/matheusgomessouza/repos`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN_ACCESS}`,
        },
        method: "GET",
      }
    );
    const data = await response.json();
    const payload = payloadManipulation(data);

    return NextResponse.json({ data: payload });
  } catch (error) {
    console.error("Unable to retrieve data form Github API /repos", error);
  }
}
