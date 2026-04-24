import './Card.css';

/**
 * NexUI — Card Components
 *
 * Exports:
 *   Card         — base card wrapper  (variant: 'default' | 'accent' | 'glow' | 'teal')
 *   ProfileCard  — avatar + name + tag + bio
 *   ContentCard  — image placeholder + tag + title + meta
 *   StatCard     — metric number + label + trend
 *   IntegrationCard — CTA card with teal accent
 */

/* ─── Base Card ─── */
export function Card({ variant = 'default', children, className = '', ...rest }) {
  return (
    <div className={`card card--${variant} ${className}`} {...rest}>
      {children}
    </div>
  );
}

/* ─── Profile Card ─── */
export function ProfileCard({ initials, name, role, tag, tagVariant = 'accent', bio }) {
  return (
    <Card variant="glow">
      <div className="card-avatar">{initials}</div>
      <div className="card-profile-header">
        <div>
          <div className="card-name">{name}</div>
          <div className="card-role">{role}</div>
        </div>
        {tag && <span className={`card-tag tag-${tagVariant}`}>{tag}</span>}
      </div>
      <div className="card-divider" />
      <p className="card-bio">{bio}</p>
    </Card>
  );
}

/* ─── Content Card ─── */
export function ContentCard({ tag, tagVariant = 'teal', title, meta }) {
  return (
    <Card variant="accent">
      <div className="card-img-placeholder">[ image ]</div>
      {tag && (
        <span className={`card-tag tag-${tagVariant}`} style={{ marginBottom: '8px', display: 'inline-block' }}>
          {tag}
        </span>
      )}
      <div className="card-content-title">{title}</div>
      {meta && <div className="card-meta">{meta}</div>}
    </Card>
  );
}

/* ─── Stat Card ─── */
export function StatCard({ label, value, change, trend = 'up', color = 'var(--accent)' }) {
  return (
    <div className="card-stat">
      <div className="stat-label">{label}</div>
      <div className="stat-num" style={{ color }}>{value}</div>
      {change && (
        <div className={`stat-change stat-${trend}`}>
          {trend === 'up' ? '↑' : '↓'} {change}
        </div>
      )}
    </div>
  );
}

/* ─── Integration Card ─── */
export function IntegrationCard({ label, title, description, ctaText = 'Connect', onCtaClick }) {
  return (
    <Card variant="teal">
      {label && (
        <div className="integration-label">{label}</div>
      )}
      <div className="card-content-title" style={{ marginBottom: '8px' }}>{title}</div>
      <p className="card-bio" style={{ marginBottom: '1.2rem' }}>{description}</p>
      <button
        className="btn-integration"
        onClick={onCtaClick}
      >
        {ctaText}
      </button>
    </Card>
  );
}
