import React, { useState, useEffect } from 'react';

interface NavItem {
  label: string;
  href: string;
}

interface MobileMenuProps {
  navItems: NavItem[];
  currentPath: string;
}

export default function MobileMenu({ navItems, currentPath }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent body scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const toggle = () => setIsOpen((prev) => !prev);
  const close = () => setIsOpen(false);

  return (
    <div className="md:hidden">
      {/* Hamburger Toggle Button */}
      <button
        type="button"
        onClick={toggle}
        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isOpen}
        className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-[#141414] text-text-secondary hover:border-white/20 hover:text-white focus:outline-none focus:ring-2 focus:ring-accent"
      >
        {isOpen ? (
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        )}
      </button>

      {/* Backdrop & Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 top-[65px] z-50 flex flex-col bg-[#0A0A0A]/95 backdrop-blur-xl border-t border-white/10 px-6 py-8 animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => {
              const isActive =
                item.href === '/'
                  ? currentPath === '/'
                  : currentPath.startsWith(item.href);

              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={close}
                  className={`text-lg font-medium transition-colors py-2 border-b border-white/5 ${
                    isActive
                      ? 'text-accent font-semibold pl-2 border-l-2 border-accent'
                      : 'text-text-secondary hover:text-white'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col gap-4">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for Freelance Projects
            </div>

            <a
              href="/contact"
              onClick={close}
              className="inline-flex w-full items-center justify-center rounded-lg bg-[#FF6B35] px-5 py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(255,107,53,0.3)] hover:bg-[#FF8252]"
            >
              Let's Discuss Your Project
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

