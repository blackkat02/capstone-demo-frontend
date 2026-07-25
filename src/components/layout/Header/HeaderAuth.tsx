export interface HeaderAuthProps {
  isAuthenticated?: boolean;
  userBalance?: number;
  onOpenSignIn?: () => void;
  onOpenSignUp?: () => void;
  mobile?: boolean;
}

export function HeaderAuth({
  isAuthenticated = false,
  userBalance = 0,
  onOpenSignIn,
  onOpenSignUp,
  mobile = false,
}: HeaderAuthProps) {
  if (mobile) {
    return (
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
    );
  }

  return (
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
  );
}
