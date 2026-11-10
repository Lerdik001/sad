import { Crosshair, Eye, Target, ShieldCheck, Cloud, Settings2, type LucideIcon } from "lucide-react";
import { Container, SectionHeading } from "./Container";

const features: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Crosshair,
    title: "Aimbot",
    description: "Silent и legit режимы, предикт на дистанцию, выбор кости, настраиваемый FOV и smooth.",
  },
  {
    icon: Eye,
    title: "ESP",
    description: "Игроки, скелеты, здоровье и оружие. Лут, руда, звери, шкафы и турели с фильтрами.",
  },
  {
    icon: Target,
    title: "Weapon",
    description: "Отсутствие отдачи и разброса с регулируемым процентом для естественного вида.",
  },
  {
    icon: ShieldCheck,
    title: "Безопасность",
    description: "Приватный загрузчик, HWID-привязка, стриммер-режим. Авто-пауза в период обновления игры.",
  },
  {
    icon: Cloud,
    title: "Облачные конфиги",
    description: "Настройки сохраняются в облаке и подхватываются на любом компьютере после входа.",
  },
  {
    icon: Settings2,
    title: "Misc",
    description: "Spider climb, instant loot, admin flags, долгий прыжок, бесконечный бег и 30+ опций.",
  },
];

export function Features() {
  return (
    <section id="features" className="border-b border-neutral-800">
      <Container className="py-24">
        <SectionHeading
          label="Функции"
          title="Всё необходимое, без лишнего."
          description="Каждый модуль настраивается до мелочей. Никаких урезанных версий — один ключ открывает весь функционал."
        />
        <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-neutral-800 bg-neutral-800 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, description }) => (
            <div key={title} className="bg-neutral-950 p-7 transition-colors hover:bg-neutral-900/60">
              <Icon className="size-5 text-neutral-300" strokeWidth={1.75} />
              <h3 className="mt-5 text-base font-medium text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-400">{description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
