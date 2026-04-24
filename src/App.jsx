import { useState } from 'react';
import './index.css';

import Navbar from './components/Navbar';
import Button from './components/Button';
import {
  Card,
  ProfileCard,
  ContentCard,
  StatCard,
  IntegrationCard,
} from './components/Card';
import Modal from './components/Modal';

const NAV_LINKS = [
  { label: 'Buttons', href: '#buttons', badge: 12 },
  { label: 'Cards',   href: '#cards',   badge: 6 },
  { label: 'Modals',  href: '#modals',  badge: 3 },
];

function Showcase({ filename, children }) {
  return (
    <div className="showcase">
      <div className="showcase-header">
        <span className="showcase-dot" style={{ background: '#ff5f57' }} />
        <span className="showcase-dot" style={{ background: '#febc2e', marginLeft: 6 }} />
        <span className="showcase-dot" style={{ background: '#28c840', marginLeft: 6 }} />
        <span className="showcase-label">{filename}</span>
      </div>
      <div className="showcase-body">{children}</div>
    </div>
  );
}

/* ─── App ─── */
export default function App() {
  const [modal, setModal] = useState(null); // 'info' | 'confirm' | 'danger' | null

  return (
    <>
      <Navbar links={NAV_LINKS} />

      <main>
        {/* ── Hero ── */}
        <div className="hero">
          <div className="hero-badge">
            <span className="dot" />
            v1.0 · Dark Component Library
          </div>
          <h1>
            Build beautiful interfaces<br />
            <span>faster than ever</span>
          </h1>
          <p>
            A curated collection of dark-mode React components — buttons, cards,
            and modals — crafted for production-grade applications.
          </p>
          <div className="hero-actions">
            <Button variant="primary" size="lg" onClick={() => {
              document.querySelector('#buttons')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              Explore Components
            </Button>
            <Button variant="secondary" size="lg">View on GitHub</Button>
          </div>
        </div>

    
        <section id="buttons">
          <div className="section-label">01 — Buttons</div>
          <h2 className="section-title">Button Variants</h2>
          <p className="section-desc">
            Every interaction style — from primary actions to destructive operations.
          </p>

          <p className="sub-title">// style variants</p>
          <Showcase filename="btn-variants.jsx">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="success">Success</Button>
            <Button variant="pill">Pill</Button>
          </Showcase>

          <p className="sub-title">// size scale</p>
          <Showcase filename="btn-sizes.jsx">
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: 14, flexWrap: 'wrap' }}>
              <Button variant="primary" size="sm">Small</Button>
              <Button variant="primary" size="md">Default</Button>
              <Button variant="primary" size="lg">Large</Button>
              <Button variant="primary" size="xl">XL</Button>
            </div>
          </Showcase>

          <p className="sub-title">// states & icons</p>
          <Showcase filename="btn-states.jsx">
            <Button loading>Loading…</Button>
            <Button variant="primary" disabled>Disabled</Button>
            <Button variant="secondary" icon="★" />
            <Button variant="secondary" icon="⚙" />
            <Button variant="secondary" icon="＋" />
            <Button variant="primary">
              Deploy &nbsp;→
            </Button>
            <Button variant="ghost">
              ⬇&nbsp; Export
            </Button>
          </Showcase>
        </section>

     
        <section id="cards">
          <div className="section-label">02 — Cards</div>
          <h2 className="section-title">Card Components</h2>
          <p className="section-desc">
            Flexible card patterns for profiles, stats, content, and integrations.
          </p>

          <p className="sub-title">// profile &amp; content cards</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16, marginBottom: '1.5rem' }}>
            <ProfileCard
              initials="AK"
              name="Aiden Keller"
              role="Senior Engineer"
              tag="PRO"
              tagVariant="accent"
              bio="Building scalable systems at the intersection of design and engineering."
            />
            <ContentCard
              tag="Tutorial"
              tagVariant="teal"
              title="Getting started with dark UI design systems"
              meta="5 min read · Apr 24"
            />
            <IntegrationCard
              label="Integration"
              title="Connect your stack"
              description="One-click integrations with your existing tools and workflows."
              ctaText="Connect →"
            />
          </div>

          <p className="sub-title">// metric / stat cards</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
            <StatCard
              label="Monthly Revenue"
              value="$48.2k"
              change="12.4% from last month"
              trend="up"
              color="var(--accent)"
            />
            <StatCard
              label="Active Users"
              value="8,391"
              change="5.8% this week"
              trend="up"
              color="var(--teal)"
            />
            <StatCard
              label="Churn Rate"
              value="2.1%"
              change="0.3% — watch this"
              trend="down"
              color="var(--red)"
            />
          </div>
        </section>


        <section id="modals">
          <div className="section-label">03 — Modals</div>
          <h2 className="section-title">Modal Dialogs</h2>
          <p className="section-desc">
            Three modal patterns — informational, confirmation, and destructive.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: '2rem' }}>
            <Button variant="ghost"     onClick={() => setModal('info')}>Info Modal</Button>
            <Button variant="secondary" onClick={() => setModal('confirm')}>Confirm Modal</Button>
            <Button variant="danger"    onClick={() => setModal('danger')}>Danger Modal</Button>
          </div>

          {/* Info */}
          <Modal
            isOpen={modal === 'info'}
            onClose={() => setModal(null)}
            variant="info"
            title="What's new in v1.2"
            description="We've shipped brand-new motion primitives, improved accessibility across all components, and added 14 new dark-mode variants ready to drop into your project."
            confirmLabel="Read changelog"
            cancelLabel="Dismiss"
            onConfirm={() => setModal(null)}
          />

          {/* Confirm */}
          <Modal
            isOpen={modal === 'confirm'}
            onClose={() => setModal(null)}
            variant="confirm"
            title="Publish to production?"
            description="You're about to push v2.4.1 live. This will affect all users immediately. Double-check your changes before confirming."
            confirmLabel="Yes, publish"
            cancelLabel="Cancel"
            onConfirm={() => setModal(null)}
          />

          {/* Danger */}
          <Modal
            isOpen={modal === 'danger'}
            onClose={() => setModal(null)}
            variant="danger"
            title="Delete workspace?"
            confirmLabel="Delete forever"
            cancelLabel="Keep it safe"
            onConfirm={() => setModal(null)}
          >
            <p>
              This action is <strong>permanent and irreversible</strong>. All data,
              members, and settings will be deleted. You cannot undo this.
            </p>
          </Modal>
        </section>
      </main>

      <footer className="footer">
        Built with <span>NexUI</span> · Dark Component Library · v1.0.0
      </footer>
    </>
  );
}
