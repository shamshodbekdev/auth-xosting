import { GitHubIcon, GoogleIcon, TelegramIcon } from "@/components/auth/SocialIcons";

const providers = [
  { name: "Google", icon: <GoogleIcon className="h-5 w-5" /> },
  { name: "Telegram", icon: <TelegramIcon className="h-5 w-5" /> },
  { name: "GitHub", icon: <GitHubIcon className="h-5 w-5 text-white" /> },
];

export function SocialLogin() {
  return (
    <div>
      <div className="relative my-6 flex items-center">
        <span className="h-px flex-1 bg-white/10" />
        <span className="px-4 text-xs uppercase tracking-wider text-gray-500">
          yoki quyidagilar orqali
        </span>
        <span className="h-px flex-1 bg-white/10" />
      </div>

      <div className="grid grid-cols-3 gap-3">
        {providers.map(({ name, icon }) => (
          <button
            key={name}
            type="button"
            aria-label={`${name} orqali davom etish`}
            title={name}
            className="glass-card flex h-12 items-center justify-center rounded-xl transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-primary-500/50"
          >
            {icon}
          </button>
        ))}
      </div>
    </div>
  );
}
