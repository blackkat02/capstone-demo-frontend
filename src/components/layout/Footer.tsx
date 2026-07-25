export function Footer() {
  return (
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
        © {new Date().getFullYear()} Зміна.ua. Усі права захищено.
      </p>
    </footer>
  );
}
