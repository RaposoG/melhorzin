import { NextResponse, NextRequest } from "next/server";

export async function GET(
  request: NextRequest
): Promise<
  NextResponse<
    | { payload: string | null; message: string }
    | { message: string; messageError: unknown }
  >
> {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("url");

  try {
    return NextResponse.json({
      payload: query,
      message: "Automation operation performed successfully",
    });
  } catch (error) {
    return NextResponse.json({
      message: "Unable to perform automation operation",
      messageError: error,
    });
  }
}
