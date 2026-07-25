import { navLinks } from "../../../constants/navigation";

export function HeaderNav() {
  return (
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
  );
}
