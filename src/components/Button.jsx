import './Button.css';

/**
 * NexUI — Button Component
 *
 * Props:
 *  variant  : 'primary' | 'secondary' | 'ghost' | 'danger' | 'success' | 'pill'
 *  size     : 'sm' | 'md' | 'lg' | 'xl'
 *  loading  : boolean
 *  disabled : boolean
 *  icon     : ReactNode  (renders an icon-only square button when set without children)
 *  onClick  : function
 *  children : ReactNode
 */
export default function Button({
  variant  = 'primary',
  size     = 'md',
  loading  = false,
  disabled = false,
  icon     = null,
  onClick,
  children,
  ...rest
}) {
  const isIconOnly = icon && !children;

  const cls = [
    'btn',
    `btn--${variant}`,
    `btn--${size}`,
    isIconOnly ? 'btn--icon' : '',
    loading    ? 'btn--loading' : '',
  ].filter(Boolean).join(' ');

  return (
    <button
      className={cls}
      disabled={disabled || loading}
      onClick={onClick}
      {...rest}
    >
      {loading && <span className="spinner" aria-hidden="true" />}
      {icon && <span className="btn__icon" aria-hidden="true">{icon}</span>}
      {children && <span className="btn__label">{children}</span>}
    </button>
  );
}
