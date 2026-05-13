// CTABand.jsx — full-bleed saffron band with one big CTA
function CTABand({ onOrder }) {
  return (
    <section className="cta-band" data-screen-label="CTA">
      <svg className="corner tl" viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="40" cy="20" rx="22" ry="9" />
        <line x1="40" y1="13" x2="40" y2="27" strokeDasharray="2 4" />
      </svg>
      <svg className="corner br" viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 60 q4 -28 28 -34 q14 -2 18 8 q2 8 -8 12 q-22 6 -28 22 q-6 4 -10 -8 z" />
        <path d="M58 26 q4 -8 12 -10" />
      </svg>
      <div className="container">
        <h2>Hungry? Order in 60 seconds.</h2>
        <button className="btn dark lg" onClick={onOrder}>
          WhatsApp Us
          <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
        </button>
      </div>
    </section>
  );
}
