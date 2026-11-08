import type { LoginValues, RegisterValues } from "@/lib/validation";

/**
 * Autentifikatsiya so'rovlari shu qatlam orqali o'tadi.
 * Backend tayyor bo'lgach, faqat shu fayldagi `request` funksiyasini
 * haqiqiy API chaqiruvi bilan almashtirish kifoya.
 */
async function request(_endpoint: string, _payload: unknown): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 1400));
}

export function login(values: LoginValues) {
  return request("/auth/login", values);
}

export function register(values: RegisterValues) {
  const { confirmPassword: _confirm, terms: _terms, ...payload } = values;
  return request("/auth/register", payload);
}
