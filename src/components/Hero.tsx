import { ArrowRight, Check, Minus } from "lucide-react";
import { Container } from "./Container";

const stats = [
  { value: "12 400+", label: "пользователей" },
  { value: "430", label: "дней без детекта" },
  { value: "< 6 ч", label: "обновление после патча" },
  { value: "24/7", label: "поддержка" },
];

type Row = { label: string; on?: boolean; value?: number };

const groups: { title: string; rows: Row[] }[] = [
  {
    title: "Aimbot",
    rows: [
      { label: "Enable", on: true },
      { label: "Silent aim", on: true },
      { label: "Prediction", on: true },
      { label: "FOV", value: 45 },
      { label: "Smooth", value: 20 },
    ],
  },
  {
    title: "Visuals",
    rows: [
      { label: "Player box", on: true },
      { label: "Skeleton", on: true },
      { label: "Loot / Ore", on: true },
      { label: "Chams", on: false },
      { label: "Max distance", value: 70 },
    ],
  },
  {
    title: "Weapon",
    rows: [
      { label: "No recoil", on: true },
      { label: "No spread", on: true },
      { label: "Fast bullets", on: false },
      { label: "Recoil %", value: 85 },
    ],
  },
  {
    title: "Misc",
    rows: [
      { label: "Stream proof", on: true },
      { label: "Spider climb", on: false },
      { label: "Admin flags", on: true },
      { label: "Instant loot", on: true },
    ],
  },
];

function Toggle({ on }: { on: boolean }) {
  return (
    <span className={`relative inline-block h-4 w-7 rounded-full transition-colors ${on ? "bg-white" : "bg-neutral-800"}`}>
      <span
        className={`absolute top-0.5 size-3 rounded-full transition-transform ${on ? "translate-x-3.5 bg-neutral-950" : "translate-x-0.5 bg-neutral-500"}`}
      />
    </span>
  );
}

function Slider({ value }: { value: number }) {
  return (
    <span className="flex items-center gap-2">
      <span className="relative h-0.5 w-20 rounded bg-neutral-800">
        <span className="absolute inset-y-0 left-0 rounded bg-neutral-300" style={{ width: `${value}%` }} />
      </span>
      <span className="w-6 text-right font-mono text-[11px] text-neutral-500">{value}</span>
    </span>
  );
}

export function Hero() {
  return (
    <section className="border-b border-neutral-800">
      <Container className="pt-24 pb-20 sm:pt-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-800 px-3 py-1 font-mono text-xs text-neutral-400">
            <span className="size-1.5 rounded-full bg-emerald-400" />
            Undetected · обновлён 2 часа назад
          </div>
          <h1 className="mt-6 text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Приватный софт
            <br className="hidden sm:block" />
            для Rust.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-neutral-400">
            Aimbot, ESP и Misc в одном загрузчике. Обновления в день патча, облачные конфиги, стриммер-режим.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2.5 text-sm font-medium text-neutral-950 transition-colors hover:bg-neutral-200"
            >
              Получить доступ
              <ArrowRight className="size-4" />
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-md border border-neutral-800 px-4 py-2.5 text-sm font-medium text-neutral-200 transition-colors hover:border-neutral-700 hover:bg-neutral-900"
            >
              Функции
            </a>
          </div>
        </div>

        <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-neutral-800 bg-neutral-800 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-neutral-950 px-5 py-4">
              <dt className="text-xs text-neutral-500">{s.label}</dt>
              <dd className="mt-1 font-mono text-xl text-white">{s.value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-16 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950">
          <div className="flex items-center justify-between border-b border-neutral-800 px-4 py-2.5">
            <div className="flex items-center gap-2 font-mono text-xs text-neutral-500">
              <span className="size-2 rounded-full bg-neutral-700" />
              <span className="size-2 rounded-full bg-neutral-700" />
              <span className="size-2 rounded-full bg-neutral-700" />
              <span className="ml-2">0x · build 4.2.1</span>
            </div>
            <span className="inline-flex items-center gap-1.5 font-mono text-xs text-emerald-400">
              <Check className="size-3" /> session active
            </span>
          </div>
          <div className="grid grid-cols-1 divide-y divide-neutral-800 md:grid-cols-2 md:divide-x md:divide-y-0 lg:grid-cols-4">
            {groups.map((g) => (
              <div key={g.title} className="p-5">
                <p className="mb-4 font-mono text-[11px] uppercase tracking-widest text-neutral-500">{g.title}</p>
                <ul className="space-y-3">
                  {g.rows.map((r) => (
                    <li key={r.label} className="flex items-center justify-between text-sm text-neutral-300">
                      <span className="flex items-center gap-2">
                        <Minus className="size-3 text-neutral-700" />
                        {r.label}
                      </span>
                      {r.value !== undefined ? <Slider value={r.value} /> : <Toggle on={!!r.on} />}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
