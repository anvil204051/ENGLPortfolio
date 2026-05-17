import { useEffect, useState } from 'react';
import { navItems } from '../data';

export function Navbar() {
  const [activeId, setActiveId] = useState('#home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.slice(1));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          setActiveId(`#${visible[0].target.id}`);
        }
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.25, 0.5] },
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const closeOnResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener('resize', closeOnResize);
    return () => window.removeEventListener('resize', closeOnResize);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    setActiveId(href);
  };

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <a href="#home" className="navbar__brand" onClick={() => handleNavClick('#home')}>
          <span className="navbar__brand-name">Anvay Moghe</span>
          <span className="navbar__brand-tag">ENGL398B</span>
        </a>

        <button
          type="button"
          className="navbar__toggle"
          aria-expanded={menuOpen}
          aria-controls="main-nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="sr-only">Toggle navigation</span>
          <span className={`navbar__toggle-bar ${menuOpen ? 'is-open' : ''}`} />
        </button>

        <nav
          id="main-nav"
          className={`navbar__nav ${menuOpen ? 'navbar__nav--open' : ''}`}
          aria-label="Main"
        >
          <ul className="navbar__list">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`navbar__link ${activeId === item.href ? 'is-active' : ''}`}
                  onClick={() => handleNavClick(item.href)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
