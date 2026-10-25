export default function FeatureBand() {
  return (
    <section className="bg-mint/30 py-20 md:py-28 relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-mint/20 rounded-full -translate-y-1/2 translate-x-1/2" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-sky/10 rounded-full translate-y-1/2 -translate-x-1/2" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-5 md:px-8 relative">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-plum/50 mb-6">
            The Good Stuff
          </p>
          <h2 className="text-[clamp(2rem,4vw,3.25rem)] font-bold text-plum leading-tight mb-8">
            Digital playgrounds,<br />
            without the extra noise.
          </h2>

          {/* Starburst in coral circle */}
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 bg-coral rounded-full flex items-center justify-center shadow-lg">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <path d="M16 2L18.5 12.5L28 10L21 16L28 22L18.5 19.5L16 30L13.5 19.5L4 22L11 16L4 10L13.5 12.5L16 2Z" fill="#FFF6D9" />
              </svg>
            </div>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-plum text-butter px-8 py-4 rounded-full font-semibold hover:bg-plum-light transition-all hover:scale-105 active:scale-95 text-lg"
          >
            Let's talk
            <span>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
