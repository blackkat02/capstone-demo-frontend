import { useState } from "react";
import { Heart, ArrowUpRight, MapPin, Star } from "lucide-react";

export function ShiftCard({ shift }) {
  const [favorite, setFavorite] = useState(false);

  return (
    <article className="group relative flex flex-col rounded-xl border border-[#E5E7EB] bg-white p-4 transition-shadow hover:shadow-[0_8px_30px_-12px_rgba(18,19,26,0.25)] sm:rounded-2xl sm:p-5">
      <div className="flex items-start justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F4F5F7] text-lg sm:h-11 sm:w-11 sm:text-xl">
          {shift.category}
        </div>
        <button
          type="button"
          onClick={() => setFavorite((v) => !v)}
          aria-pressed={favorite}
          aria-label="Додати до обраного"
          className="-m-2 p-2 text-[#9CA3AF] transition-colors hover:text-[#F5A623]"
        >
          <Heart
            className="h-5 w-5"
            fill={favorite ? "#F5A623" : "none"}
            stroke={favorite ? "#F5A623" : "currentColor"}
          />
        </button>
      </div>

      <h3 className="mt-3 font-['Space_Grotesk'] text-[15px] font-semibold text-[#12131A] sm:mt-4 sm:text-base">
        {shift.role}
      </h3>
      <p className="text-sm text-[#6B7280]">{shift.company}</p>

      <div className="mt-3 flex items-baseline gap-1 sm:mt-4">
        <span className="font-['JetBrains_Mono'] text-lg font-medium text-[#0EA89A]">
          {shift.rate}₴
        </span>
        <span className="text-xs text-[#6B7280]">
          /год · {shift.budget}₴ за зміну
        </span>
      </div>

      <div className="mt-3 flex items-center justify-between text-xs text-[#6B7280]">
        <span className="flex items-center gap-1">
          <MapPin className="h-3.5 w-3.5" /> {shift.distance} км
        </span>
        <span className="flex items-center gap-1">
          <Star className="h-3.5 w-3.5 fill-[#F5A623] text-[#F5A623]" />{" "}
          {shift.rating}
        </span>
      </div>

      <button
        type="button"
        className="mt-4 flex min-h-[44px] items-center justify-between rounded-xl bg-[#12131A] px-4 py-2.5 text-sm font-medium text-white transition-colors group-hover:bg-[#0EA89A]"
      >
        Детальніше
        <ArrowUpRight className="h-4 w-4" />
      </button>
    </article>
  );
}
