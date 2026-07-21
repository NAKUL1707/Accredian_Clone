import { NextResponse } from "next/server";

// In-memory store — resets when the server restarts/redeploys.
// Fine for this assignment; a real product would use a database.
let leads = [];

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, company, message } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required." },
        { status: 400 }
      );
    }

    const lead = {
      id: Date.now(),
      name,
      email,
      company: company || "",
      message: message || "",
      submittedAt: new Date().toISOString(),
    };

    leads.push(lead);
    console.log("New lead received:", lead);

    return NextResponse.json({ success: true, lead }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}

export async function GET() {
  // Lets you check /api/lead in the browser to see stored submissions
  return NextResponse.json({ leads });
}