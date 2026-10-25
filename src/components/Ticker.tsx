export default function Ticker() {
  const content = "MADE WITH INTENTION ✳ BUILT TO INSPIRE ✳ PLAYFUL STUDIO ✳ ";
  const repeated = content.repeat(6);

  return (
    <section id="ticker" className="bg-coral py-4 overflow-hidden" aria-label="Brand ticker">
      <div className="ticker-track flex whitespace-nowrap">
        <span className="font-mono text-sm md:text-base text-warm-white tracking-[0.15em] px-4">
          {repeated}
        </span>
        <span className="font-mono text-sm md:text-base text-warm-white tracking-[0.15em] px-4" aria-hidden="true">
          {repeated}
        </span>
      </div>
    </section>
  );
}
