import './Navbar.css';

/**
 * NexUI — Navbar Component
 *
 * Props:
 *   links : [{ label: string, href: string, badge?: string|number }]
 */
export default function Navbar({ links = [] }) {
  const scrollTo = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav className="navbar">
      <div className="navbar__brand">
        <span className="navbar__brand-dot" aria-hidden="true" />
        NexUI
      </div>

      <ul className="navbar__links" role="list">
        {links.map(({ label, href, badge }) => (
          <li key={href}>
            <a
              className="navbar__link"
              href={href}
              onClick={(e) => scrollTo(e, href)}
            >
              {label}
              {badge !== undefined && (
                <span className="navbar__badge">{badge}</span>
              )}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
