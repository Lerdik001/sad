import { Container, SectionHeading } from "./Container";

type State = "online" | "undetected" | "updating";

const items: { name: string; version: string; state: State }[] = [
  { name: "0x Rust", version: "build 4.2.1", state: "undetected" },
  { name: "Loader", version: "v2.8", state: "online" },
  { name: "Cloud configs", version: "eu-1 · ru-2", state: "online" },
  { name: "Spoofer", version: "v1.3", state: "updating" },
];

const stateStyle: Record<State, { dot: string; label: string }> = {
  online: { dot: "bg-emerald-400", label: "Online" },
  undetected: { dot: "bg-emerald-400", label: "Undetected" },
  updating: { dot: "bg-amber-400", label: "Updating" },
};

export function Status() {
  return (
    <section id="status" className="border-b border-neutral-800">
      <Container className="py-24">
        <SectionHeading label="Статус" title="Прозрачность в реальном времени." />
        <ul className="mt-14 divide-y divide-neutral-800 rounded-lg border border-neutral-800">
          {items.map((i) => (
            <li key={i.name} className="flex items-center justify-between px-5 py-4">
              <div>
                <p className="text-sm font-medium text-white">{i.name}</p>
                <p className="mt-0.5 font-mono text-xs text-neutral-500">{i.version}</p>
              </div>
              <span className="inline-flex items-center gap-2 font-mono text-xs text-neutral-300">
                <span className={`size-1.5 rounded-full ${stateStyle[i.state].dot}`} />
                {stateStyle[i.state].label}
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
