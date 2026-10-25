export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <div className="order-2 lg:order-1">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-plum/60 mb-6">
              Colorful & Creative / Independent Studio
            </p>
            <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[0.95] text-plum mb-6">
              Big ideas.<br />
              <span className="text-coral">Bright energy.</span>
            </h1>
            <p className="text-lg md:text-xl text-plum/70 max-w-md mb-8 leading-relaxed">
              A small studio for brands that want to make people stop, smile, and remember.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="bg-coral text-warm-white px-7 py-3.5 rounded-full font-semibold hover:bg-coral-dark transition-all hover:scale-105 active:scale-95"
              >
                Meet the studio
              </a>
              <a
                href="#philosophy"
                className="border-2 border-plum text-plum px-7 py-3.5 rounded-full font-semibold hover:bg-plum hover:text-butter transition-all"
              >
                Our point of view
              </a>
            </div>
          </div>

          {/* Artwork */}
          <div className="order-1 lg:order-2 relative flex items-center justify-center min-h-[320px] md:min-h-[420px] lg:min-h-[500px]">
            <HeroArtwork />
          </div>
        </div>

        {/* Hero footer */}
        <div className="mt-16 md:mt-24 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-plum/10 pt-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-plum/50">
            Designed for real life
          </p>
          <a href="#ticker" className="font-mono text-[10px] uppercase tracking-[0.2em] text-plum/50 hover:text-coral transition-colors flex items-center gap-2">
            Scroll to explore
            <span className="animate-bounce">↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function HeroArtwork() {
  return (
    <div className="relative w-full max-w-[480px] aspect-square">
      {/* Background circle */}
      <div className="absolute inset-8 bg-lilac/30 rounded-full animate-float-slow" />

      {/* Large organic shape */}
      <svg className="absolute inset-0 w-full h-full animate-float" viewBox="0 0 400 400" fill="none" aria-hidden="true">
        <path
          d="M200 60C260 60 320 100 340 160C360 220 340 280 300 320C260 360 200 370 150 350C100 330 60 280 60 220C60 160 100 100 140 75C160 62 180 60 200 60Z"
          fill="#FF6D59"
          opacity="0.85"
        />
      </svg>

      {/* Overlapping ring */}
      <div className="absolute top-[10%] right-[5%] w-32 h-32 md:w-44 md:h-44 border-4 border-plum/20 rounded-full animate-float-slow" />

      {/* Mint blob */}
      <svg className="absolute bottom-[5%] left-[5%] w-28 h-28 md:w-36 md:h-36 animate-float" viewBox="0 0 120 120" fill="none" aria-hidden="true" style={{ animationDelay: '-2s' }}>
        <ellipse cx="60" cy="60" rx="55" ry="50" fill="#B9F3C7" opacity="0.8" />
      </svg>

      {/* Sky blue circle */}
      <div className="absolute top-[15%] left-[10%] w-20 h-20 md:w-24 md:h-24 bg-sky/60 rounded-full animate-float-slow" style={{ animationDelay: '-3s' }} />

      {/* Starburst */}
      <div className="absolute top-[5%] right-[20%] w-12 h-12 md:w-16 md:h-16 animate-spin-slow">
        <svg viewBox="0 0 60 60" fill="none" aria-hidden="true">
          <path d="M30 0L34 22L56 18L38 30L56 42L34 38L30 60L26 38L4 42L22 30L4 18L26 22L30 0Z" fill="#FFF6D9" stroke="#292342" strokeWidth="1.5" />
        </svg>
      </div>

      {/* Small decorative dots */}
      <div className="absolute bottom-[20%] right-[15%] flex gap-2">
        <div className="w-3 h-3 bg-plum/30 rounded-full" />
        <div className="w-3 h-3 bg-coral rounded-full" />
        <div className="w-3 h-3 bg-lilac rounded-full" />
      </div>

      {/* "Made with care" sticker */}
      <div className="absolute bottom-[10%] right-[5%] bg-warm-white border-2 border-plum/20 rounded-full px-4 py-2 shadow-lg animate-float-slow" style={{ animationDelay: '-1s' }}>
        <span className="font-mono text-[10px] uppercase tracking-wider text-plum/70">Made with care ✦</span>
      </div>

      {/* Studio reference label */}
      <div className="absolute top-[40%] left-[-5%] bg-plum text-butter rounded-lg px-3 py-2 shadow-lg animate-float" style={{ animationDelay: '-4s' }}>
        <span className="font-mono text-[10px] uppercase tracking-wider">PS / Vol.01</span>
      </div>

      {/* Technical annotations */}
      <div className="absolute top-[60%] right-[-2%] font-mono text-[9px] text-plum/40 uppercase tracking-wider hidden md:block">
        <div>fig. 01</div>
        <div>abstract composition</div>
      </div>

      {/* Center flower/star */}
      <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-32 md:h-32 animate-spin-slow" viewBox="0 0 100 100" fill="none" aria-hidden="true" style={{ animationDirection: 'reverse' }}>
        <circle cx="50" cy="50" r="20" fill="#FFF6D9" stroke="#292342" strokeWidth="1.5" />
        <circle cx="50" cy="50" r="35" fill="none" stroke="#292342" strokeWidth="1" strokeDasharray="4 4" />
        <path d="M50 15L53 42L75 30L55 48L80 55L55 53L65 78L50 58L35 78L45 53L20 55L45 48L25 30L47 42L50 15Z" fill="#FF6D59" opacity="0.6" />
      </svg>
    </div>
  );
}
