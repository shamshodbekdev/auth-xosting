"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Gauge, ShieldCheck, Headset } from "lucide-react";

const highlights = [
  { icon: Gauge, text: "NVMe SSD asosidagi tezkor serverlar" },
  { icon: ShieldCheck, text: "DDoS himoyasi va 99.9% Uptime" },
  { icon: Headset, text: "24/7 texnik yordam xizmati" },
];

interface AuthShellProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

export function AuthShell({ title, subtitle, children }: AuthShellProps) {
  return (
    <main className="min-h-dvh lg:grid lg:grid-cols-2">
      {/* Chap tomon: aurora fon va logo */}
      <aside className="relative hidden overflow-hidden border-r border-white/5 bg-surface lg:flex lg:flex-col lg:justify-between lg:p-12 xl:p-16">
        <AuroraBackground />

        <a href="https://xosting.net" className="relative z-10 inline-flex w-fit items-center">
          <Image src="/logo-full.png" alt="xosting.net" width={600} height={130} priority className="h-10 w-auto object-contain" />
        </a>

        <div className="relative z-10 max-w-lg">
          <h2 className="text-4xl font-bold leading-tight tracking-tight xl:text-5xl">
            Loyihangiz uchun <span className="text-gradient">mukammal muhit</span>
          </h2>
          <p className="mt-5 text-lg text-gray-400">
            Hisobingiz orqali hosting, domen va serverlaringizni bir joydan boshqaring.
          </p>

          <ul className="mt-10 space-y-4">
            {highlights.map(({ icon: Icon, text }, i) => (
              <motion.li
                key={text}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.12, duration: 0.5 }}
                className="glass-card flex items-center gap-4 rounded-2xl px-5 py-4"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-500/15 text-primary-400">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="text-gray-200">{text}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        <p className="relative z-10 text-sm text-gray-500">
          © {new Date().getFullYear()} xosting.net. Barcha huquqlar himoyalangan.
        </p>
      </aside>

      {/* O'ng tomon: forma */}
      <section className="relative flex min-h-dvh items-center justify-center overflow-hidden px-5 py-10 sm:px-8">
        {/* Mobil qurilmalarda yengil fon nuri */}
        <div className="bg-hero-glow pointer-events-none absolute inset-0 lg:hidden" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative w-full max-w-md"
        >
          <a href="https://xosting.net" className="mb-8 inline-flex items-center lg:hidden">
            <Image src="/logo-full.png" alt="xosting.net" width={600} height={130} priority className="h-9 w-auto object-contain" />
          </a>

          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h1>
          <p className="mt-2 text-gray-400">{subtitle}</p>

          <div className="mt-8">{children}</div>
        </motion.div>
      </section>
    </main>
  );
}

function AuroraBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <div className="animate-aurora absolute -left-24 -top-24 h-[28rem] w-[28rem] rounded-full bg-primary-600/30 blur-[120px]" />
      <div
        className="animate-aurora absolute -bottom-32 right-[-6rem] h-[32rem] w-[32rem] rounded-full bg-accent-500/20 blur-[130px]"
        style={{ animationDelay: "-6s", animationDirection: "alternate-reverse" }}
      />
      <div
        className="animate-aurora absolute left-1/3 top-1/2 h-72 w-72 rounded-full bg-indigo-500/20 blur-[110px]"
        style={{ animationDelay: "-10s" }}
      />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
    </div>
  );
}
