import { z } from "zod";

const emailField = z
  .string()
  .trim()
  .min(1, "Email manzilini kiriting")
  .email("Email manzili noto'g'ri kiritilgan");

export const loginSchema = z.object({
  email: emailField,
  password: z.string().min(1, "Parolni kiriting"),
  remember: z.boolean(),
});

export const registerSchema = z
  .object({
    fullName: z
      .string()
      .trim()
      .min(3, "Ism va familiyani to'liq kiriting")
      .max(80, "Ism juda uzun kiritilgan"),
    email: emailField,
    phone: z
      .string()
      .regex(/^\+998 \d{2} \d{3} \d{2} \d{2}$/, "Telefon raqamini to'liq kiriting"),
    password: z
      .string()
      .min(8, "Parol kamida 8 ta belgidan iborat bo'lishi kerak")
      .max(64, "Parol 64 ta belgidan oshmasligi kerak"),
    confirmPassword: z.string().min(1, "Parolni qayta kiriting"),
    terms: z.boolean().refine((v) => v, "Foydalanish shartlariga rozilik bering"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Parollar bir-biriga mos kelmadi",
  });

export type LoginValues = z.infer<typeof loginSchema>;
export type RegisterValues = z.infer<typeof registerSchema>;
