import { useState } from "react";
import {
  MapPin,
  Menu,
  X,
  Search,
  Wallet,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { ShiftCard } from "../components/cards/ShiftCard";
import { Ticker } from "../components/ui/Ticker";
import { TestimonialsSlider } from "../sections/Testimonials";
import { FEATURED_SHIFTS, HOW_IT_WORKS } from "../constants/mockData";

export default function HomePage({
  isAuthenticated = false,
  userBalance = 0,
  onOpenSignIn = () => {},
  onOpenSignUp = () => {},
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [audience, setAudience] = useState("worker");

  const navLinks = [
    { href: "/", label: "Головна" },
    { href: "/shifts", label: "Біржа змін" },
    { href: "/my-shifts", label: "Кабінет виконавця" },
    { href: "/dashboard", label: "Кабінет замовника" },
  ];

  return (
    <div className="min-h-screen bg-white font-['Inter'] text-[#12131A] antialiased">
      {/* ---------------- HEADER ---------------- */}
      <header className="sticky top-0 z-40 border-b border-[#E5E7EB] bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
          <a
            href="/"
            className="font-['Space_Grotesk'] text-lg font-bold tracking-tight sm:text-xl"
          >
            Зміна <span className="text-[#0EA89A]">.ua</span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#4B5563] transition-colors hover:text-[#0EA89A]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            {isAuthenticated ? (
              <a
                href="/profile"
                className="flex items-center gap-2 rounded-full border border-[#E5E7EB] py-1.5 pl-1.5 pr-4 text-sm font-medium hover:border-[#0EA89A]"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#12131A] text-xs text-white">
                  ПБ
                </span>
                <span className="font-['JetBrains_Mono']">{userBalance}₴</span>
              </a>
            ) : (
              <>
                <button
                  type="button"
                  onClick={onOpenSignIn}
                  className="text-sm font-medium text-[#12131A] hover:text-[#0EA89A]"
                >
                  Увійти
                </button>
                <button
                  type="button"
                  onClick={onOpenSignUp}
                  className="rounded-full bg-[#12131A] px-5 py-2 text-sm font-medium text-white hover:bg-[#0EA89A]"
                >
                  Реєстрація
                </button>
              </>
            )}
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Відкрити меню"
            className="-mr-2 flex h-11 w-11 items-center justify-center text-[#12131A] md:hidden"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Мобільне бургер-меню */}
        <div
          className={`fixed inset-0 z-50 transition-opacity duration-300 md:hidden ${
            menuOpen
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMenuOpen(false)}
          />
          <div
            className={`absolute right-0 top-0 flex h-full w-[85%] max-w-xs flex-col bg-white px-5 py-4 shadow-xl transition-transform duration-300 sm:px-6 sm:py-5 ${
              menuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="font-['Space_Grotesk'] text-lg font-bold">
                Меню
              </span>
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                aria-label="Закрити меню"
                className="-mr-2 flex h-11 w-11 items-center justify-center"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="mt-6 flex flex-col gap-1 sm:mt-8 sm:gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="flex min-h-[44px] items-center text-base font-medium text-[#12131A]"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="mt-auto flex flex-col gap-3">
              {isAuthenticated ? (
                <a
                  href="/profile"
                  className="flex min-h-[44px] items-center justify-center rounded-full border border-[#E5E7EB] px-5 text-sm font-medium"
                >
                  Профіль · {userBalance}₴
                </a>
              ) : (
                <>
                  <button
                    type="button"
                    onClick={onOpenSignIn}
                    className="min-h-[44px] rounded-full border border-[#E5E7EB] px-5 text-sm font-medium"
                  >
                    Увійти
                  </button>
                  <button
                    type="button"
                    onClick={onOpenSignUp}
                    className="min-h-[44px] rounded-full bg-[#12131A] px-5 text-sm font-medium text-white"
                  >
                    Реєстрація
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* ---------------- HERO ---------------- */}
      <section className="relative overflow-hidden bg-[#F4F5F7]">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:gap-10 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:grid-cols-2 lg:items-center lg:py-28">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#0EA89A]/30 bg-[#0EA89A]/10 px-3 py-1 text-xs font-medium text-[#0B7F75]">
              <Zap className="h-3.5 w-3.5" /> Нові зміни з’являються щохвилини
            </span>
            <h1 className="mt-4 font-['Space_Grotesk'] text-3xl font-bold leading-[1.15] tracking-tight sm:mt-5 sm:text-4xl sm:leading-[1.1] md:text-5xl lg:text-[3.25rem]">
              Робота на сьогодні,
              <br />
              не на місяць.
            </h1>
            <p className="mt-4 max-w-md text-sm text-[#4B5563] sm:mt-5 sm:text-base lg:text-lg">
              Ludi.ua — біржа змін: виконавці знаходять оплачувану роботу поруч
              за годину, а бізнес закриває вакансію за хвилини.
            </p>

            {/* Пошуковий віджет */}
            <form className="mt-6 flex flex-col gap-2 rounded-2xl border border-[#E5E7EB] bg-white p-2 shadow-sm sm:mt-8 sm:flex-row">
              <label className="flex flex-1 items-center gap-2 rounded-xl px-3 py-3 sm:py-2.5">
                <MapPin className="h-4 w-4 shrink-0 text-[#9CA3AF]" />
                <input
                  type="text"
                  placeholder="Ваше місто або район"
                  className="w-full bg-transparent text-sm outline-none placeholder:text-[#9CA3AF]"
                />
              </label>
              <span className="hidden w-px self-stretch bg-[#E5E7EB] sm:block" />
              <label className="flex flex-1 items-center gap-2 rounded-xl px-3 py-3 sm:py-2.5">
                <Search className="h-4 w-4 shrink-0 text-[#9CA3AF]" />
                <input
                  type="text"
                  placeholder="Категорія: бариста, склад, промо…"
                  className="w-full bg-transparent text-sm outline-none placeholder:text-[#9CA3AF]"
                />
              </label>
              <button
                type="submit"
                className="min-h-[44px] w-full rounded-xl bg-[#0EA89A] px-6 text-sm font-medium text-white hover:bg-[#0B8F83] sm:w-auto"
              >
                Знайти зміну
              </button>
            </form>

            <div className="mt-4 flex flex-col gap-3 text-sm sm:flex-row sm:flex-wrap">
              <a
                href="/shifts"
                className="flex min-h-[44px] items-center justify-center rounded-full bg-[#12131A] px-5 font-medium text-white hover:bg-[#0EA89A] sm:justify-start"
              >
                Я шукаю зміну
              </a>
              <a
                href="/dashboard"
                className="flex min-h-[44px] items-center justify-center rounded-full border border-[#E5E7EB] bg-white px-5 font-medium hover:border-[#34314C] sm:justify-start"
              >
                Мені потрібен персонал
              </a>
            </div>
          </div>

          {/* Тизер мапи змін */}
          <div className="relative rounded-2xl border border-[#E5E7EB] bg-white p-2.5 shadow-[0_20px_60px_-30px_rgba(18,19,26,0.35)] sm:rounded-3xl sm:p-3">
            <svg
              viewBox="0 0 400 320"
              className="aspect-[4/3] h-full w-full rounded-xl bg-[#EEF1F0] sm:aspect-auto sm:rounded-2xl"
            >
              <path
                d="M0 60 Q100 20 200 70 T400 50"
                stroke="#D9DEDC"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M0 180 Q120 140 220 190 T400 170"
                stroke="#D9DEDC"
                strokeWidth="2"
                fill="none"
              />
              <path d="M40 0 L60 320" stroke="#D9DEDC" strokeWidth="2" />
              <path d="M300 0 L320 320" stroke="#D9DEDC" strokeWidth="2" />
              {[
                [90, 90],
                [220, 60],
                [150, 180],
                [300, 150],
                [260, 240],
                [60, 230],
              ].map(([x, y], i) => (
                <g key={i}>
                  <circle cx={x} cy={y} r="16" fill="#0EA89A" opacity="0.15" />
                  <circle cx={x} cy={y} r="7" fill="#0EA89A" />
                </g>
              ))}
            </svg>
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl bg-white/95 px-3 py-2.5 shadow-lg backdrop-blur sm:bottom-6 sm:left-6 sm:right-6 sm:px-4 sm:py-3">
              <div>
                <p className="text-xs text-[#6B7280]">Найближча зміна</p>
                <p className="text-sm font-semibold">Бариста · 0.8 км</p>
              </div>
              <span className="font-['JetBrains_Mono'] text-sm font-semibold text-[#0EA89A]">
                220₴/год
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- ЖИВА СТРІЧКА ЗМІН ---------------- */}
      <Ticker />

      {/* ---------------- ЯК ЦЕ ПРАЦЮЄ ---------------- */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 md:px-8 md:py-20">
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
          <h2 className="font-['Space_Grotesk'] text-2xl font-bold tracking-tight sm:text-3xl">
            Як це працює
          </h2>
          <div className="flex w-full rounded-full border border-[#E5E7EB] p-1 text-sm sm:w-auto">
            <button
              type="button"
              onClick={() => setAudience("worker")}
              className={`flex-1 rounded-full px-3 py-2 font-medium transition-colors sm:flex-initial sm:px-4 sm:py-1.5 ${
                audience === "worker"
                  ? "bg-[#12131A] text-white"
                  : "text-[#4B5563]"
              }`}
            >
              Для виконавця
            </button>
            <button
              type="button"
              onClick={() => setAudience("business")}
              className={`flex-1 rounded-full px-3 py-2 font-medium transition-colors sm:flex-initial sm:px-4 sm:py-1.5 ${
                audience === "business"
                  ? "bg-[#12131A] text-white"
                  : "text-[#4B5563]"
              }`}
            >
              Для бізнесу
            </button>
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-3 sm:gap-6">
          {HOW_IT_WORKS[audience].map(([title, desc], i) => (
            <div
              key={title}
              className="rounded-2xl border border-[#E5E7EB] p-5 sm:p-6"
            >
              <span className="font-['JetBrains_Mono'] text-sm text-[#0EA89A]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-['Space_Grotesk'] text-lg font-semibold">
                {title}
              </h3>
              <p className="mt-2 text-sm text-[#6B7280]">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-col gap-3 border-t border-[#E5E7EB] pt-6 text-sm text-[#4B5563] sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-6 sm:pt-8">
          <span className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 shrink-0 text-[#0EA89A]" /> Ескроу -
            захист виплат
          </span>
          <span className="flex items-center gap-2">
            <Wallet className="h-4 w-4 shrink-0 text-[#0EA89A]" /> Виплата
            одразу після зміни
          </span>
          <span className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 shrink-0 text-[#0EA89A]" />{" "}
            Верифікація через Дію
          </span>
        </div>
      </section>

      {/* ---------------- РЕКОМЕНДОВАНІ ЗМІНИ ---------------- */}
      <section className="bg-[#F4F5F7] py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-end sm:justify-between sm:gap-4">
            <h2 className="font-['Space_Grotesk'] text-2xl font-bold tracking-tight sm:text-3xl">
              Доступно поруч із тобою
            </h2>
            <a href="/shifts" className="text-sm font-medium text-[#0EA89A]">
              Усі зміни →
            </a>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
            {FEATURED_SHIFTS.map((shift) => (
              <ShiftCard key={shift.id} shift={shift} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- ВІДГУКИ ---------------- */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 md:px-8 md:py-20">
        <TestimonialsSlider />
      </section>

      {/* ---------------- ФІНАЛЬНИЙ CTA ---------------- */}
      <section className="bg-[#12131A] py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 md:px-8">
          <h2 className="font-['Space_Grotesk'] text-2xl font-bold text-white sm:text-3xl md:text-4xl">
            Перша зміна може початися вже сьогодні
          </h2>
          <p className="mt-3 text-sm text-[#9CA3AF] sm:mt-4 sm:text-base">
            Реєстрація займає дві хвилини. Обери роль — виконавець чи бізнес — і
            починай.
          </p>
          <button
            type="button"
            onClick={onOpenSignUp}
            className="mt-6 min-h-[44px] w-full rounded-full bg-[#0EA89A] px-7 text-sm font-medium text-white hover:bg-[#14C4B4] sm:mt-8 sm:w-auto"
          >
            Зареєструватися безкоштовно
          </button>
        </div>
      </section>

      {/* ---------------- FOOTER ---------------- */}
      <footer className="border-t border-[#E5E7EB] bg-white py-10 sm:py-12">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-6 gap-y-8 px-4 sm:px-6 md:grid-cols-4 md:px-8">
          <div className="col-span-2 md:col-span-1">
            <span className="font-['Space_Grotesk'] text-lg font-bold">
              Ludi <span className="text-[#0EA89A]">.ua</span>
            </span>
            <p className="mt-3 max-w-xs text-sm text-[#6B7280]">
              Біржа змін для тих, кому потрібна робота чи персонал просто зараз.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Виконавцям</h4>
            <ul className="mt-3 space-y-2 text-sm text-[#6B7280]">
              <li>
                <a href="/shifts" className="hover:text-[#0EA89A]">
                  Знайти зміну
                </a>
              </li>
              <li>
                <a href="/my-shifts" className="hover:text-[#0EA89A]">
                  Мої бронювання
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Бізнесу</h4>
            <ul className="mt-3 space-y-2 text-sm text-[#6B7280]">
              <li>
                <a href="/dashboard" className="hover:text-[#0EA89A]">
                  Розмістити вакансію
                </a>
              </li>
              <li>
                <a href="/dashboard" className="hover:text-[#0EA89A]">
                  Кабінет замовника
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Компанія</h4>
            <ul className="mt-3 space-y-2 text-sm text-[#6B7280]">
              <li>
                <a href="/about" className="hover:text-[#0EA89A]">
                  Про нас
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-[#0EA89A]">
                  Умови використання
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="mx-auto mt-8 max-w-7xl px-4 text-xs text-[#9CA3AF] sm:mt-10 sm:px-6 md:px-8">
          © {new Date().getFullYear()} Ludi.ua. Усі права захищено.
        </p>
      </footer>
    </div>
  );
}
