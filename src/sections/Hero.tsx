import React, { useState } from "react";
import { MapPin, Search, Wallet, ShieldCheck, Zap } from "lucide-react";
import { ShiftCard } from "../components/cards/ShiftCard";
import { Ticker } from "../components/ui/Ticker";
import { TestimonialsSlider } from "../sections/Testimonials";
import { FEATURED_SHIFTS, HOW_IT_WORKS } from "../constants/mockData";

interface HeroProps {
  onOpenSignUp?: () => void;
}

export function Hero({ onOpenSignUp }: HeroProps) {
  const [audience, setAudience] = useState<"worker" | "business">("worker");

  return (
    <div>
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
    </div>
  );
}
