import { useState, useCallback, useEffect, useRef } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleMenu = useCallback(() => {
    setMenuOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  // Close on escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && menuOpen) {
        closeMenu();
        buttonRef.current?.focus();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen, closeMenu]);

  // Trap focus in mobile menu
  useEffect(() => {
    if (!menuOpen || !menuRef.current) return;
    const focusable = menuRef.current.querySelectorAll<HTMLElement>(
      'a, button, [tabindex]:not([tabindex="-1"])'
    );
    if (focusable.length > 0) focusable[0].focus();
  }, [menuOpen]);

  const navLinks = [
    { label: 'What we make', href: '#work' },
    { label: 'About', href: '#philosophy' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-butter/95 backdrop-blur-sm border-b border-plum/5">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-3 group" aria-label="Playful Studio — back to top">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true" className="transition-transform group-hover:rotate-45 duration-500">
            <circle cx="18" cy="18" r="16" fill="#FF6D59" />
            <path d="M18 6L20.5 14.5L29 12L23.5 18.5L29 25L20.5 22.5L18 31L15.5 22.5L7 25L12.5 18.5L7 12L15.5 14.5L18 6Z" fill="#FFF6D9" />
          </svg>
          <div className="flex flex-col">
            <span className="font-bold text-lg leading-tight text-plum">Playful Studio</span>
            <span className="font-mono text-[10px] uppercase tracking-wider text-plum/60 hidden sm:block">Independent creative studio</span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-plum/80 hover:text-coral transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-coral after:transition-all hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-coral text-warm-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-coral-dark transition-colors"
          >
            Meet the studio
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          ref={buttonRef}
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-lg hover:bg-plum/5 transition-colors"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {menuOpen ? (
              <>
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="6" y1="18" x2="18" y2="6" />
              </>
            ) : (
              <>
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          ref={menuRef}
          id="mobile-menu"
          className="md:hidden bg-butter border-t border-plum/10 px-5 py-6"
          role="navigation"
          aria-label="Mobile navigation"
        >
          <nav className="flex flex-col gap-4">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="text-lg font-medium text-plum hover:text-coral transition-colors py-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={closeMenu}
              className="bg-coral text-warm-white px-5 py-3 rounded-full text-center font-semibold hover:bg-coral-dark transition-colors mt-2"
            >
              Meet the studio
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
