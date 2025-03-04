export const dynamic = "force-dynamic"; // defaults to auto
import { NextResponse } from "next/server";

import * as interfaces from "@/types/interfaces";
import { payloadManipulation } from "@/utils/utils";

export async function GET(): Promise<
  NextResponse<{ data: interfaces.GithubReposProps[] }> | undefined
> {
  try {
    const response = await fetch(
      `https://api.github.com/users/matheusgomessouza/repos`,
      {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN_ACCESS}`,
          Accept: "application/vnd.github+json",
          "X-GitHub-Api-Version": "2022-11-28",
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
