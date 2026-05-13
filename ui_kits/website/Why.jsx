// Why.jsx — Four-icon strip "Why Sindhu?"
const REASONS = [
  { ic: 'wheat.svg',   lbl: 'Aged basmati',    desc: 'Long-grain, perfumed, never broken.' },
  { ic: 'flame.svg',   lbl: 'Slow-cooked dum', desc: 'Coals and patience. Sealed with dough.' },
  { ic: 'scooter.svg', lbl: '30-min to VIT-AP', desc: 'Hot to the hostel door, every time.' },
  { ic: 'rupee.svg',   lbl: 'Hostel pricing',  desc: 'Built around what a student can spend.' },
];

function Why() {
  return (
    <section className="section tight" data-screen-label="Why">
      <div className="container">
        <div className="section-head" style={{ marginBottom: 8 }}>
          <div>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}>Why Sindhu.</h2>
          </div>
        </div>
        <div className="why-grid">
          {REASONS.map(r => (
            <div className="why-tile" key={r.lbl}>
              <img className="ic" src={`../../assets/icons/${r.ic}`} alt="" />
              <div className="lbl">{r.lbl}</div>
              <div className="desc">{r.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
