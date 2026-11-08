const COUNTRY_CODE = "998";

/**
 * Foydalanuvchi kiritgan matnni "+998 90 123 45 67" ko'rinishiga keltiradi.
 * Faqat raqamlar olinadi, 998 prefiksi avtomatik qo'yiladi.
 */
export function formatUzPhone(input: string): string {
  let digits = input.replace(/\D/g, "");

  if (digits.startsWith(COUNTRY_CODE)) {
    digits = digits.slice(COUNTRY_CODE.length);
  }
  digits = digits.slice(0, 9);

  if (digits.length === 0) return input.trim() === "" ? "" : "+998 ";

  const parts = [
    digits.slice(0, 2),
    digits.slice(2, 5),
    digits.slice(5, 7),
    digits.slice(7, 9),
  ].filter(Boolean);

  return `+${COUNTRY_CODE} ${parts.join(" ")}`;
}
