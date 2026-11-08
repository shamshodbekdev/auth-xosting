"use client";

import Link from "next/link";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2, Lock, Mail, Phone, User } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Checkbox } from "@/components/ui/Checkbox";
import { SocialLogin } from "@/components/auth/SocialLogin";
import { register as registerUser } from "@/lib/auth-service";
import { formatUzPhone } from "@/lib/phone";
import { registerSchema, type RegisterValues } from "@/lib/validation";

export function RegisterForm() {
  const [succeeded, setSucceeded] = useState(false);

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<RegisterValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      terms: false,
    },
  });

  const onSubmit = async (values: RegisterValues) => {
    setSucceeded(false);
    await registerUser(values);
    setSucceeded(true);
    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
        <Input
          id="fullName"
          label="Ism va familiya"
          placeholder="Ali Valiyev"
          autoComplete="name"
          icon={<User className="h-5 w-5" />}
          error={errors.fullName?.message}
          {...register("fullName")}
        />

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

        <Controller
          name="phone"
          control={control}
          render={({ field }) => (
            <Input
              id="phone"
              type="tel"
              inputMode="tel"
              label="Telefon raqam"
              placeholder="+998 90 123 45 67"
              autoComplete="tel"
              icon={<Phone className="h-5 w-5" />}
              error={errors.phone?.message}
              name={field.name}
              ref={field.ref}
              onBlur={field.onBlur}
              value={field.value}
              onChange={(e) => field.onChange(formatUzPhone(e.target.value))}
              onFocus={() => {
                if (!field.value) field.onChange("+998 ");
              }}
            />
          )}
        />

        <Input
          id="password"
          type="password"
          label="Parol"
          placeholder="Kamida 8 ta belgi"
          autoComplete="new-password"
          icon={<Lock className="h-5 w-5" />}
          error={errors.password?.message}
          {...register("password")}
        />

        <Input
          id="confirmPassword"
          type="password"
          label="Parolni tasdiqlang"
          placeholder="Parolni qayta kiriting"
          autoComplete="new-password"
          icon={<Lock className="h-5 w-5" />}
          error={errors.confirmPassword?.message}
          {...register("confirmPassword")}
        />

        <div>
          <Checkbox
            label={
              <>
                Men{" "}
                <a href="https://xosting.net/terms" className="text-primary-400 hover:text-primary-100">
                  foydalanish shartlari
                </a>{" "}
                bilan roziman
              </>
            }
            {...register("terms")}
          />
          {errors.terms && (
            <p role="alert" className="mt-1.5 text-sm text-red-400">
              {errors.terms.message}
            </p>
          )}
        </div>

        {succeeded && (
          <div role="status" className="flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300">
            <CheckCircle2 className="h-5 w-5 shrink-0" />
            Hisobingiz muvaffaqiyatli yaratildi!
          </div>
        )}

        <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Yaratilmoqda...
            </>
          ) : (
            "Ro'yxatdan o'tish"
          )}
        </Button>
      </form>

      <SocialLogin />

      <p className="mt-8 text-center text-gray-400">
        Hisobingiz bormi?{" "}
        <Link href="/" className="font-medium text-primary-400 transition-colors hover:text-primary-100">
          Kirish
        </Link>
      </p>
    </>
  );
}
