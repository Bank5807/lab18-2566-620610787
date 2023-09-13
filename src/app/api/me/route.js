import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    ok: true,
    fullName: "Tanat Wipasaskunden",
    studentId: "620610787",
  });
};
