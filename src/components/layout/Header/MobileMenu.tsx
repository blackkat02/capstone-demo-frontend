import React from "react";
import { X } from "lucide-react";
import { navLinks } from "../../../constants/navigation";
import { HeaderAuth } from "./HeaderAuth";

export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  isAuthenticated?: boolean;
  userBalance?: number;
  onOpenSignIn?: () => void;
  onOpenSignUp?: () => void;
}

export function MobileMenu({
  isOpen,
  onClose,
  isAuthenticated = false,
  userBalance = 0,
  onOpenSignIn,
  onOpenSignUp,
}: MobileMenuProps) {
  return (
    <div
      className={`fixed inset-0 z-50 transition-opacity duration-300 md:hidden ${
        isOpen
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0"
      }`}
    >
      {/* Затемнення фону */}
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />

      {/* Шторка меню */}
      <div
        className={`absolute right-0 top-0 flex h-full w-[85%] max-w-xs flex-col bg-white px-5 py-4 shadow-xl transition-transform duration-300 sm:px-6 sm:py-5 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Хедер шторки */}
        <div className="flex items-center justify-between">
          <span className="font-['Space_Grotesk'] text-lg font-bold">Меню</span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Закрити меню"
            className="-mr-2 flex h-11 w-11 items-center justify-center"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Навігаційні посилання */}
        <nav className="mt-6 flex flex-col gap-1 sm:mt-8 sm:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="flex min-h-[44px] items-center text-base font-medium text-[#12131A]"
              onClick={onClose}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Перевикористаний блок авторизації */}
        <HeaderAuth
          mobile
          isAuthenticated={isAuthenticated}
          userBalance={userBalance}
          onOpenSignIn={() => {
            onClose();
            onOpenSignIn?.();
          }}
          onOpenSignUp={() => {
            onClose();
            onOpenSignUp?.();
          }}
        />
      </div>
    </div>
  );
}
