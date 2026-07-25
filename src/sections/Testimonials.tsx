import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS } from "../constants/mockData";

export function TestimonialsSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % TESTIMONIALS.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [index]);

  const go = (dir) => {
    setIndex((i) => (i + dir + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const t = TESTIMONIALS[index];

  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="font-['Space_Grotesk'] text-lg leading-relaxed text-[#12131A] sm:text-xl md:text-2xl">
        «{t.text}»
      </p>
      <p className="mt-5 text-sm font-medium text-[#12131A] sm:mt-6">
        {t.name}
      </p>
      <p className="text-sm text-[#6B7280]">{t.role}</p>

      <div className="mt-6 flex items-center justify-center gap-3 sm:mt-8 sm:gap-4">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Попередній відгук"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E5E7EB] text-[#12131A] hover:border-[#0EA89A] hover:text-[#0EA89A]"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <div className="flex gap-2">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Відгук ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-6 bg-[#0EA89A]" : "w-1.5 bg-[#E5E7EB]"
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Наступний відгук"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E5E7EB] text-[#12131A] hover:border-[#0EA89A] hover:text-[#0EA89A]"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
