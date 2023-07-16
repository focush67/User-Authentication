import { NextResponse } from "next/server";
export async function GET() {
  try {
    const response = NextResponse.json({
      message: "Logged out",
      success: true,
    });

    console.log("Deleting Token");
    response.cookies.set("token", "", { httpOnly: true, expires: new Date(0) });
    return response;
  } catch (error: any) {
    return NextResponse.json({ error: "Error logging out" }, { status: 500 });
  }
}
