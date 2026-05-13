// WhatsAppModal.jsx — fake modal mocking the WhatsApp order intent
function WhatsAppModal({ items, onClose }) {
  const total = items.reduce((s, i) => s + i.price, 0);
  const list = items.map(i => `• ${i.name} — ₹${i.price}`).join('\n');
  const draft =
`Sindhu, hi 👋
${list || '• (no items yet)'}

Total: ₹${total}
Deliver to: VIT-AP Hostel — Block ___
Name:`;

  return (
    <div className="modal-back" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <button className="close" onClick={onClose} aria-label="close">×</button>
        <h3>Your WhatsApp draft</h3>
        <p style={{ color: 'var(--fg-soft)', margin: 0, fontSize: 15 }}>
          Tap send and we'll cook it up. No app, no fuss.
        </p>
        <div className="draft">{draft}</div>
        <button className="btn solid send">
          Open WhatsApp
          <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
        </button>
      </div>
    </div>
  );
}
