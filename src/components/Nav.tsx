import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Container } from "./Container";

const links = [
  { href: "#features", label: "Функции" },
  { href: "#pricing", label: "Цены" },
  { href: "#status", label: "Статус" },
  { href: "#faq", label: "FAQ" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-neutral-800/80 bg-neutral-950/80 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <a href="#" className="flex items-center gap-2.5">
          <span className="grid size-7 place-items-center rounded-md bg-white font-mono text-xs font-semibold text-neutral-950">0x</span>
          <span className="text-sm font-semibold tracking-tight text-white">0x</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-neutral-400 transition-colors hover:text-white">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a href="#" className="text-sm text-neutral-400 transition-colors hover:text-white">
            Войти
          </a>
          <a
            href="#pricing"
            className="rounded-md bg-white px-3.5 py-2 text-sm font-medium text-neutral-950 transition-colors hover:bg-neutral-200"
          >
            Купить
          </a>
        </div>

        <button
          type="button"
          aria-label="Меню"
          onClick={() => setOpen((v) => !v)}
          className="grid size-9 place-items-center rounded-md text-neutral-400 hover:text-white md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </Container>

      {open && (
        <div className="border-t border-neutral-800 md:hidden">
          <Container className="flex flex-col gap-1 py-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2.5 text-sm text-neutral-300 hover:bg-neutral-900 hover:text-white"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#pricing"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-md bg-white px-3.5 py-2.5 text-center text-sm font-medium text-neutral-950"
            >
              Купить
            </a>
          </Container>
        </div>
      )}
    </header>
  );
}
