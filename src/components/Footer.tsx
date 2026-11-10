import { ArrowRight, MessageCircle, Send } from "lucide-react";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer>
      <Container className="py-24">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Готовы начать?</h2>
            <p className="mt-3 text-neutral-400">Присоединяйтесь к 12 000+ игрокам, которые уже выбрали 0x.</p>
          </div>
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2.5 text-sm font-medium text-neutral-950 transition-colors hover:bg-neutral-200"
          >
            Получить ключ
            <ArrowRight className="size-4" />
          </a>
        </div>
      </Container>
      <div className="border-t border-neutral-800">
        <Container className="flex flex-col items-start justify-between gap-4 py-8 text-sm text-neutral-500 sm:flex-row sm:items-center">
          <p>© 2026 0x. Все права защищены.</p>
          <nav className="flex items-center gap-6">
            <a href="#" className="inline-flex items-center gap-1.5 transition-colors hover:text-white">
              <MessageCircle className="size-4" /> Discord
            </a>
            <a href="#" className="inline-flex items-center gap-1.5 transition-colors hover:text-white">
              <Send className="size-4" /> Telegram
            </a>
            <a href="#" className="transition-colors hover:text-white">
              Правила
            </a>
          </nav>
        </Container>
      </div>
    </footer>
  );
}
