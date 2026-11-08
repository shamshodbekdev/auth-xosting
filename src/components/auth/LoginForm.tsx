"use client";

import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2, Lock, Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Checkbox } from "@/components/ui/Checkbox";
import { SocialLogin } from "@/components/auth/SocialLogin";
import { login } from "@/lib/auth-service";
import { loginSchema, type LoginValues } from "@/lib/validation";

export function LoginForm() {
  const [succeeded, setSucceeded] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "", remember: false },
  });

  const onSubmit = async (values: LoginValues) => {
    setSucceeded(false);
    await login(values);
    setSucceeded(true);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
        <Input
          id="email"
          type="email"
          label="Email"
          placeholder="sizning@email.uz"
          autoComplete="email"
          icon={<Mail className="h-5 w-5" />}
          error={errors.email?.message}
          {...register("email")}
        />

        <Input
          id="password"
          type="password"
          label="Parol"
          placeholder="••••••••"
          autoComplete="current-password"
          icon={<Lock className="h-5 w-5" />}
          error={errors.password?.message}
          {...register("password")}
        />

        <div className="flex items-center justify-between gap-4">
          <Checkbox label="Meni eslab qol" {...register("remember")} />
          <Link
            href="https://xosting.net/forgot-password"
            className="text-sm text-primary-400 transition-colors hover:text-primary-100"
          >
            Parolni unutdingizmi?
          </Link>
        </div>

        {succeeded && (
          <div role="status" className="flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300">
            <CheckCircle2 className="h-5 w-5 shrink-0" />
            Muvaffaqiyatli kirdingiz!
          </div>
        )}

        <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Tekshirilmoqda...
            </>
          ) : (
            "Kirish"
          )}
        </Button>
      </form>

      <SocialLogin />

      <p className="mt-8 text-center text-gray-400">
        Hisobingiz yo&apos;qmi?{" "}
        <Link href="/register" className="font-medium text-primary-400 transition-colors hover:text-primary-100">
          Ro&apos;yxatdan o&apos;ting
        </Link>
      </p>
    </>
  );
}
