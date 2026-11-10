import { useState } from "react";
import { Plus } from "lucide-react";
import { Container, SectionHeading } from "./Container";

const items = [
  {
    q: "Как получить доступ после оплаты?",
    a: "Ключ приходит мгновенно на почту и в личный кабинет. Скачайте загрузчик, введите ключ — готово.",
  },
  {
    q: "Что происходит во время обновления игры?",
    a: "Доступ автоматически ставится на паузу, чтобы вы не потеряли аккаунт. Время простоя компенсируется продлением подписки.",
  },
  {
    q: "Какие системные требования?",
    a: "Windows 10 / 11 (x64), процессоры Intel и AMD. Поддерживаются все актуальные сборки игры.",
  },
  {
    q: "Можно ли сменить компьютер?",
    a: "Да. Один бесплатный сброс HWID включён в месячный тариф, остальные решаются через поддержку.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="border-b border-neutral-800">
      <Container className="py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
          <SectionHeading label="FAQ" title="Вопросы и ответы." />
          <ul className="divide-y divide-neutral-800 border-y border-neutral-800">
            {items.map((item, i) => {
              const isOpen = open === i;
              return (
                <li key={item.q}>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-6 py-5 text-left"
                  >
                    <span className="text-sm font-medium text-white">{item.q}</span>
                    <Plus
                      className={`size-4 shrink-0 text-neutral-500 transition-transform ${isOpen ? "rotate-45" : ""}`}
                    />
                  </button>
                  {isOpen && <p className="pb-5 text-sm leading-relaxed text-neutral-400">{item.a}</p>}
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
}
