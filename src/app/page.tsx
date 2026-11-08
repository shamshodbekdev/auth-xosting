import type { Metadata } from "next";
import { AuthShell } from "@/components/auth/AuthShell";
import { LoginForm } from "@/components/auth/LoginForm";

export const metadata: Metadata = {
  title: "Kirish — xosting.net",
  description: "xosting.net mijozlar paneliga kiring.",
};

export default function LoginPage() {
  return (
    <AuthShell title="Xush kelibsiz" subtitle="Hisobingizga kirish uchun ma'lumotlaringizni kiriting.">
      <LoginForm />
    </AuthShell>
  );
}
