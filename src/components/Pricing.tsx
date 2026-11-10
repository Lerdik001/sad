import { Check } from "lucide-react";
import { Container, SectionHeading } from "./Container";

const plans = [
  {
    name: "День",
    price: "5",
    period: "24 часа",
    features: ["Полный функционал", "Облачные конфиги", "Поддержка в Discord"],
    featured: false,
  },
  {
    name: "Неделя",
    price: "18",
    period: "7 дней",
    features: ["Полный функционал", "Облачные конфиги", "Поддержка в Discord"],
    featured: false,
  },
  {
    name: "Месяц",
    price: "45",
    period: "30 дней",
    features: ["Полный функционал", "Облачные конфиги", "Приоритетная поддержка", "Сброс HWID — 1 раз"],
    featured: true,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="border-b border-neutral-800">
      <Container className="py-24">
        <SectionHeading label="Цены" title="Выберите срок." description="Один ключ — все функции. Оплата картой, криптовалютой или через СБП." />
        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`flex flex-col rounded-lg border p-7 ${
                p.featured ? "border-neutral-600 bg-neutral-900/50" : "border-neutral-800"
              }`}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-white">{p.name}</h3>
                {p.featured && (
                  <span className="rounded-full border border-neutral-700 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-neutral-300">
                    популярный
                  </span>
                )}
              </div>
              <div className="mt-5 flex items-baseline gap-1">
                <span className="text-4xl font-semibold tracking-tight text-white">${p.price}</span>
                <span className="text-sm text-neutral-500">/ {p.period}</span>
              </div>
              <ul className="mt-7 flex-1 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-neutral-300">
                    <Check className="mt-0.5 size-4 shrink-0 text-neutral-500" strokeWidth={2} />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className={`mt-8 rounded-md px-4 py-2.5 text-center text-sm font-medium transition-colors ${
                  p.featured
                    ? "bg-white text-neutral-950 hover:bg-neutral-200"
                    : "border border-neutral-800 text-neutral-200 hover:border-neutral-700 hover:bg-neutral-900"
                }`}
              >
                Купить
              </a>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
