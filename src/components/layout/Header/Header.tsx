// import { useState } from "react";
// import { Menu, X } from "lucide-react";
// import { navLinks } from "../../../constants/navigation";

// interface HeaderProps {
//   isAuthenticated?: boolean;
//   userBalance?: number;
//   onOpenSignIn?: () => void;
//   onOpenSignUp?: () => void;
// }

// export function Header({
//   isAuthenticated = false,
//   userBalance = 0,
//   onOpenSignIn,
//   onOpenSignUp,
// }: HeaderProps) {
//   const [menuOpen, setMenuOpen] = useState(false);
//   return (
//     <header className="sticky top-0 z-40 border-b border-[#E5E7EB] bg-white/90 backdrop-blur">
//       <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
//         <a
//           href="/"
//           className="font-['Space_Grotesk'] text-lg font-bold tracking-tight sm:text-xl"
//         >
//           Зміна <span className="text-[#0EA89A]">.ua</span>
//         </a>

//         <nav className="hidden items-center gap-8 md:flex">
//           {navLinks.map((link) => (
//             <a
//               key={link.href}
//               href={link.href}
//               className="text-sm font-medium text-[#4B5563] transition-colors hover:text-[#0EA89A]"
//             >
//               {link.label}
//             </a>
//           ))}
//         </nav>

//         <div className="hidden items-center gap-3 md:flex">
//           {isAuthenticated ? (
//             <a
//               href="/profile"
//               className="flex items-center gap-2 rounded-full border border-[#E5E7EB] py-1.5 pl-1.5 pr-4 text-sm font-medium hover:border-[#0EA89A]"
//             >
//               <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#12131A] text-xs text-white">
//                 ПБ
//               </span>
//               <span className="font-['JetBrains_Mono']">{userBalance}₴</span>
//             </a>
//           ) : (
//             <>
//               <button
//                 type="button"
//                 onClick={onOpenSignIn}
//                 className="text-sm font-medium text-[#12131A] hover:text-[#0EA89A]"
//               >
//                 Увійти
//               </button>
//               <button
//                 type="button"
//                 onClick={onOpenSignUp}
//                 className="rounded-full bg-[#12131A] px-5 py-2 text-sm font-medium text-white hover:bg-[#0EA89A]"
//               >
//                 Реєстрація
//               </button>
//             </>
//           )}
//         </div>

//         <button
//           type="button"
//           onClick={() => setMenuOpen(true)}
//           aria-label="Відкрити меню"
//           className="-mr-2 flex h-11 w-11 items-center justify-center text-[#12131A] md:hidden"
//         >
//           <Menu className="h-6 w-6" />
//         </button>
//       </div>

{
  /* Мобільне бургер-меню */
}
{
  /* <div
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
        </div> */
}
{
  /* </div> */
}
// </header>
//   );
// }

import { useState } from "react";
import { Menu } from "lucide-react";
import { HeaderNav } from "./HeaderNav";
import { HeaderAuth } from "./HeaderAuth";
import { MobileMenu } from "./MobileMenu";

export interface HeaderProps {
  isAuthenticated?: boolean;
  userBalance?: number;
  onOpenSignIn?: () => void;
  onOpenSignUp?: () => void;
}

export function Header({
  isAuthenticated = false,
  userBalance = 0,
  onOpenSignIn,
  onOpenSignUp,
}: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[#E5E7EB] bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
        {/* Логотип */}
        <a
          href="/"
          className="font-['Space_Grotesk'] text-lg font-bold tracking-tight sm:text-xl"
        >
          Зміна <span className="text-[#0EA89A]">.ua</span>
        </a>

        {/* Навігація для десктопу */}
        <HeaderNav />

        {/* Авторизація / Баланс для десктопу */}
        <HeaderAuth
          isAuthenticated={isAuthenticated}
          userBalance={userBalance}
          onOpenSignIn={onOpenSignIn}
          onOpenSignUp={onOpenSignUp}
        />

        {/* Гамбургер-кнопка для мобільних */}
        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          aria-label="Відкрити меню"
          className="-mr-2 flex h-11 w-11 items-center justify-center text-[#12131A] md:hidden"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Мобільна шторка */}
      <MobileMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        isAuthenticated={isAuthenticated}
        userBalance={userBalance}
        onOpenSignIn={onOpenSignIn}
        onOpenSignUp={onOpenSignUp}
      />
    </header>
  );
}
