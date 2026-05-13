// Hero.jsx — full-bleed cream hero with display headline, pot doodle, sticker
function Hero({ onOrder, onMenu }) {
  return (
    <section className="hero" data-screen-label="Hero">
      <svg className="corner-pot" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M70 30 q-6 -10 4 -20 q10 -10 -2 -22" />
        <path d="M100 30 q-6 -12 4 -22 q8 -10 -2 -20" />
        <path d="M130 30 q-6 -10 4 -20 q10 -10 -2 -22" />
        <circle cx="100" cy="60" r="6" />
        <line x1="100" y1="66" x2="100" y2="78" />
        <path d="M50 78 q50 -16 100 0" />
        <line x1="48" y1="78" x2="152" y2="78" />
        <path d="M52 80 q-2 50 14 80 q34 14 68 0 q16 -30 14 -80" />
        <path d="M50 92 q-12 4 -10 18" />
        <path d="M150 92 q12 4 10 18" />
        <line x1="62" y1="120" x2="138" y2="120" strokeDasharray="4 6" />
      </svg>

      <img className="sticker" src="../../assets/stickers/sticker-hostel-fav.svg" alt="" />

      <div className="container">
        <div style={{ paddingTop: 64, paddingBottom: 24, maxWidth: 920 }}>
          <span className="chip">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s-7-8-7-13a7 7 0 1 1 14 0c0 5-7 13-7 13z" />
              <circle cx="12" cy="9" r="2.5" />
            </svg>
            Delivering to Mandadam &amp; VIT-AP only
          </span>
          <span className="telugu-tag">సింధు</span>
          <h1>
            Biryani,<br /><span className="accent">bagundi.</span>
          </h1>
          <p className="sub">
            Handcrafted dum biryani, slow-cooked over coals and sealed with dough —
            delivered hot to Mandadam village and VIT-AP hostels.
          </p>
          <div className="ctas">
            <button className="btn solid lg" onClick={onOrder}>
              Order Now
              <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
            </button>
            <button className="btn outline lg" onClick={onMenu}>View Menu</button>
          </div>
        </div>
      </div>
    </section>
  );
}
