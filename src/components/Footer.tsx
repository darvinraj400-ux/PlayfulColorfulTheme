export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-plum border-t border-plum/10 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid md:grid-cols-3 gap-10 md:gap-8">
          {/* Brand */}
          <div>
            <a href="#top" className="flex items-center gap-3 group mb-4" aria-label="Playful Studio — back to top">
              <svg width="28" height="28" viewBox="0 0 36 36" fill="none" aria-hidden="true" className="transition-transform group-hover:rotate-45 duration-500">
                <circle cx="18" cy="18" r="16" fill="#FF6D59" />
                <path d="M18 6L20.5 14.5L29 12L23.5 18.5L29 25L20.5 22.5L18 31L15.5 22.5L7 25L12.5 18.5L7 12L15.5 14.5L18 6Z" fill="#FFF6D9" />
              </svg>
              <span className="font-bold text-butter">Playful Studio</span>
            </a>
            <p className="text-butter/40 text-sm font-mono">
              Independent creative studio.<br />
              Big ideas. Bright energy.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-butter/30 mb-4">
              Navigate
            </p>
            <nav aria-label="Footer navigation">
              <ul className="space-y-3">
                <li>
                  <a href="#work" className="text-butter/60 hover:text-coral transition-colors text-sm">
                    What we make
                  </a>
                </li>
                <li>
                  <a href="#philosophy" className="text-butter/60 hover:text-coral transition-colors text-sm">
                    About
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-butter/60 hover:text-coral transition-colors text-sm">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#top" className="text-butter/60 hover:text-coral transition-colors text-sm">
                    Back to top ↑
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Info */}
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-butter/30 mb-4">
              Studio
            </p>
            <p className="text-butter/40 text-sm leading-relaxed">
              A small studio for brands that want to make people stop, smile, and remember.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-butter/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-butter/30">
            © {currentYear} Playful Studio. All rights reserved.
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-butter/30">
            Made with care ✦
          </p>
        </div>
      </div>
    </footer>
  );
}
