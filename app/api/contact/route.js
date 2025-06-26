import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { name, email, phone, message } = await req.json();

  // 1. Validate input
  if (!name || !email || !phone || !message) {
    console.warn("Missing fields:", { name, email, phone, message });
    return NextResponse.json(
      { success: false, error: "All fields required" },
      { status: 400 }
    );
  }

  try {
    // 2. Read environment variables
    const emailUser = process.env.EMAIL_USER || "chinmay.endlostech@gmail.com";
    const emailPass = process.env.EMAIL_PASS || "scsitmuuryhvxfdg";
    const emailTo = process.env.EMAIL_RECEIVER || "info@endlos.in";

    console.log("EMAIL_USER:", emailUser);
    console.log("EMAIL_RECEIVER:", emailTo);

    // 3. Configure transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    // 4. Email content
    const mailOptions = {
      from: `"Website Contact" <${emailUser}>`, // Make sure this is not undefined
      to: emailTo,
      subject:
        "(ENDLOS.IN) - Endlos Innovation Contact Form Submit From Endlos.In",
      html: `
        <h3>(ENDLOS.IN) Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    };

    console.log("Sending email with options:", mailOptions);

    // 5. Send email
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", info);

    return NextResponse.json({
      success: true,
      message: "Email sent successfully!",
    });
  } catch (error) {
    console.error("Mail error:", error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || "Failed to send email",
        debug: error,
      },
      { status: 500 }
    );
  }
}
