export default function Philosophy() {
  return (
    <section id="philosophy" className="bg-plum py-20 md:py-32 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-20 h-20 border border-butter/10 rounded-full" aria-hidden="true" />
      <div className="absolute bottom-10 left-10 w-12 h-12 border border-coral/20 rounded-full" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left metadata */}
          <div className="lg:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-butter/40">
              02 / Our Point of View
            </p>
          </div>

          {/* Center content */}
          <div className="lg:col-span-6">
            <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold text-butter leading-snug mb-8">
              Good design should feel clear, useful, and a little{' '}
              <span className="font-serif italic text-coral">unexpected</span>.
            </h2>
            <p className="text-butter/60 text-lg leading-relaxed mb-8 max-w-lg">
              A small studio for brands that want to make people stop, smile, and remember.
              We bring together thoughtful details and a point of view that makes every
              interaction feel considered.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-butter font-semibold hover:text-coral transition-colors group"
            >
              A little more about us
              <span className="transition-transform group-hover:translate-x-1">↗</span>
            </a>
          </div>

          {/* Right labels */}
          <div className="lg:col-span-3 flex lg:flex-col gap-4 lg:gap-6 lg:items-end lg:text-right">
            <div className="bg-butter/5 border border-butter/10 rounded-xl px-4 py-3">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-butter/50">
                Thoughtful by design
              </p>
            </div>
            <div className="bg-coral/10 border border-coral/20 rounded-xl px-4 py-3">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-coral/70">
                Built for people
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
