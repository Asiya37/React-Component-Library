import { useEffect, useCallback } from 'react';
import './Modal.css';

/**
 * NexUI — Modal Component
 *
 * Props:
 *   isOpen        : boolean
 *   onClose       : function
 *   variant       : 'info' | 'confirm' | 'danger'
 *   title         : string
 *   description   : string | ReactNode
 *   confirmLabel  : string  (default: 'Confirm')
 *   cancelLabel   : string  (default: 'Cancel')
 *   onConfirm     : function
 *   children      : ReactNode (optional body override)
 */

const ICON_MAP = {
  info:    { emoji: 'ℹ️', cls: 'modal-icon--info' },
  confirm: { emoji: '✔️', cls: 'modal-icon--success' },
  danger:  { emoji: '⚠️', cls: 'modal-icon--danger' },
};

const CONFIRM_BTN = {
  info:    'btn btn--primary btn--md',
  confirm: 'btn btn--success btn--md',
  danger:  'btn btn--danger  btn--md',
};

export default function Modal({
  isOpen,
  onClose,
  variant      = 'info',
  title,
  description,
  confirmLabel = 'Confirm',
  cancelLabel  = 'Cancel',
  onConfirm,
  children,
}) {
  /* Close on Escape key */
  const handleKey = useCallback(
    (e) => { if (e.key === 'Escape') onClose(); },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [isOpen, handleKey]);

  /* Prevent body scroll while open */
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  const { emoji, cls } = ICON_MAP[variant] ?? ICON_MAP.info;

  return (
    <div
      className="modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className={`modal-box modal-box--${variant}`}>

        {/* Icon */}
        <div className={`modal-icon ${cls}`} aria-hidden="true">{emoji}</div>

        {/* Header */}
        <div className="modal-header">
          <h2 className="modal-title" id="modal-title">{title}</h2>
          <button
            className="modal-close"
            onClick={onClose}
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="modal-body">
          {children ?? <p>{description}</p>}
        </div>

        {/* Footer */}
        <div className="modal-footer">
          <button className="btn btn--secondary btn--md" onClick={onClose}>
            {cancelLabel}
          </button>
          {onConfirm && (
            <button className={CONFIRM_BTN[variant]} onClick={onConfirm}>
              {confirmLabel}
            </button>
          )}
        </div>

      </div>
    </div>
  );
}
