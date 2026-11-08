import type { Metadata } from "next";
import { AuthShell } from "@/components/auth/AuthShell";
import { RegisterForm } from "@/components/auth/RegisterForm";

export const metadata: Metadata = {
  title: "Ro'yxatdan o'tish — xosting.net",
  description: "xosting.net da yangi hisob yarating va hosting xizmatlaridan foydalaning.",
};

export default function RegisterPage() {
  return (
    <AuthShell title="Hisob yaratish" subtitle="Bir necha daqiqada ro'yxatdan o'ting va loyihangizni ishga tushiring.">
      <RegisterForm />
    </AuthShell>
  );
}
