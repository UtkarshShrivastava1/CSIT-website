const nodemailer = require("nodemailer");
require("colors");

// Recipient emails (who should receive the contact messages)
const recipientEmails = [
  process.env.EMAIL_RECEIVER_1 || "utkarshzager@gmail.com",
  process.env.EMAIL_RECEIVER_2 || "",
];

// Email sender credentials (career.zager@gmail.com)
const senderEmail = {
  user: process.env.EMAIL_ADMIN_ID || "utkarshzager@gmail.com", // Sender email
  pass: process.env.EMAIL_ADMIN_PASS || "lfrbywlulnvpzree ", // Sender app password
};

// Enhanced email configuration with logging
const createTransporter = () => {
  console.log("Creating email transporter...".yellow);
  console.log("Email Config:".cyan, {
    host: "smtp.gmail.com",
    port: 587,
    user: process.env.EMAIL_ADMIN_ID,
    receiverEmail: process.env.EMAIL_RECEIVER_1,
  });

  return nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_ADMIN_ID,
      pass: process.env.EMAIL_ADMIN_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
};

// Controller function for contact form submissions
const createContact = async (req, res) => {
  try {
    console.log("Received a new contact request:", req.body);

    const { name, companyName, email, phone, message } = req.body;

    // Validate required fields
    if (!name || !companyName || !email || !phone || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    console.log("Validation passed: All fields are provided");

    // Email content
    const htmlContent = `
      <h2>New Contact Us Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Company Name:</strong> ${companyName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong><br>${message}</p>
    `;

    // Create transporter
    const transporter = createTransporter();

    // Send email to both recipient addresses
    const mailOptions = {
      from: senderEmail.user, // Sender: career.zager@gmail.com
      to: recipientEmails, // Send to both recipients
      subject: "New Contact Us Submission",
      html: htmlContent,
    };

    console.log("Sending contact form email from:", senderEmail.user);
    console.log("Recipients:", recipientEmails.join(", "));

    await transporter.sendMail(mailOptions);
    console.log("Emails sent successfully from:", senderEmail.user);

    return res.status(200).json({
      success: true,
      message: "Your message has been sent successfully to both recipients",
    });
  } catch (error) {
    console.error("Error occurred while sending email:", error.message);
    return res.status(500).json({
      success: false,
      message: "Server error while sending your message",
    });
  }
};

// Enhanced admission form submission handler
const submitAdmissionForm = async (req, res) => {
  try {
    console.log("Received admission form submission:".yellow, req.body);

    const { fullName, email, phone, city } = req.body;

    // Validation
    if (!fullName || !email || !phone || !city) {
      console.log("Missing required fields".red);
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Create email content
    const htmlContent = `
      <h2>New Admission Form Submission</h2>
      <p><strong>Full Name:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>City:</strong> ${city}</p>
      <p><em>Submitted on: ${new Date().toLocaleString()}</em></p>
    `;

    const transporter = createTransporter();

    const mailOptions = {
      from: process.env.EMAIL_ADMIN_ID,
      to: process.env.EMAIL_RECEIVER_1,
      subject: "New Admission Form Submission - CSIT",
      html: htmlContent,
    };

    console.log("Sending email...".yellow);
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully".green);

    return res.status(200).json({
      success: true,
      message: "Admission form submitted successfully",
    });
  } catch (error) {
    console.error("Error in admission form submission:".red, error);
    return res.status(500).json({
      success: false,
      message: "Error submitting admission form",
      error: error.message,
    });
  }
};

module.exports = {
  createContact,
  submitAdmissionForm,
};
