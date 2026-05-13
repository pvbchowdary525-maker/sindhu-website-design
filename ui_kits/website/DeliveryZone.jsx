// DeliveryZone.jsx — map illustration + zone copy
function DeliveryZone() {
  return (
    <section id="delivery" className="delivery section" data-screen-label="Delivery">
      <div className="container">
        <div className="grid">
          <div className="map-card">
            <img src="../../assets/map-delivery-zone.svg" alt="Delivery map of Mandadam and VIT-AP" />
          </div>
          <div>
            <span className="h-eyebrow" style={{ fontFamily: 'var(--font-telugu)', color: 'var(--brick)', fontSize: 22, display: 'block', marginBottom: 10, fontWeight: 700 }}>డెలివరీ జోన్</span>
            <h2>We deliver here — only here.</h2>
            <p style={{ fontSize: 18, lineHeight: 1.6, color: 'var(--fg-soft)' }}>
              Mandadam village and the VIT-AP University hostels. 522237. That's it.
              We like keeping it close, like family — and it means your biryani
              shows up hot, not lukewarm.
            </p>
            <div className="meta">
              <div className="meta-row">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s-7-8-7-13a7 7 0 1 1 14 0c0 5-7 13-7 13z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
                <span>Mandadam, Amaravathi, Andhra Pradesh — 522237</span>
              </div>
              <div className="meta-row">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 2" />
                </svg>
                <span>Kitchen 11:00 — 22:30 · Delivery 12:00 — 22:00 · Daily</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
