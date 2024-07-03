import nodemailer from "nodemailer";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ackEmailTemplate = fs.readFileSync(
  path.join(__dirname, "./emailAckTemplate.html"),
  "utf-8"
);

const emailTemplate = fs.readFileSync(
  path.join(__dirname, "./emailTemplate.html"),
  "utf-8"
);

const sendEmail = async (name, senderEmail, message) => {
  senderEmail = senderEmail.toLowerCase();
  const transporter = nodemailer.createTransport({
    service: "gmail",
    secure: true,
    port: 584,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const messageToAdmin = emailTemplate
    .replace("[name]", name)
    .replace("[email]", senderEmail)
    .replace("[message]", message);

  const receiver = {
    from: process.env.EMAIL_USER,
    to: process.env.ADMIN_EMAIL,
    subject: "Message from Portfolio Contact Form",
    html: messageToAdmin,
  };

  const ackMail = ackEmailTemplate.replace("[Recipient]", name);
  const acknowledgement = {
    from: process.env.EMAIL_USER,
    to: senderEmail,
    subject: "Thank You for Your Message - Dhruv Mishra",
    html: ackMail,
  };

  try {
    await transporter.sendMail(receiver);
    if (senderEmail) {
      await transporter.sendMail(acknowledgement);
    }
    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false };
  }
};

export default sendEmail;
