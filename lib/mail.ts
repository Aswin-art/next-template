import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const domain = process.env.NEXT_PUBLIC_APP_URL;

export const sendEmail = async (email: string, token: string) => {
  const confirmLink = `${domain}/new-verification?token=${token}`;

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "Email verification",
      html: `<p>Click <a href=${confirmLink}>here</a> to verified your email.</p>`,
    });
  } catch (err) {
    console.log(err);
  }
};

export const sendResetPasswordEmail = async (email: string, token: string) => {
  const resetLink = `${domain}/new-password?token=${token}`;
  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "Email reset password",
      html: `<p>Click <a href=${resetLink}>here</a> to reset your password.</p>`,
    });
  } catch (err) {
    console.log(err);
  }
};

export const sendTwoFactorTokenEmail = async (email: string, token: string) => {
  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "2FA Token",
      html: `<p>Your token is: ${token}</p>`,
    });
  } catch (err) {
    console.log(err);
  }
};
