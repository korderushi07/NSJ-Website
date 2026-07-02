import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validation";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate the incoming request body with Zod schema
    const result = contactFormSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          errors: result.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    // Server-side logging of form data (for local testing/demonstration)
    console.log("-----------------------------------------");
    console.log("NEW INQUIRY RECEIVED at NSJ Studio:");
    console.log("Name:   ", result.data.name);
    console.log("Email:  ", result.data.email);
    console.log("Phone:  ", result.data.phone);
    console.log("Service:", result.data.service);
    console.log("Message:", result.data.message);
    console.log("-----------------------------------------");

    // Simulate network latency (e.g. database insertion or email sending)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return NextResponse.json({
      success: true,
      message: "Thank you. Your inquiry has been received. Our team will get in touch with you shortly.",
    });
  } catch (error) {
    console.error("API contact route error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An internal server error occurred. Please try again later.",
      },
      { status: 500 }
    );
  }
}
