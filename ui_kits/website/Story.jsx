// Story.jsx — editorial two-column origin story on saffron
function Story() {
  return (
    <section id="story" className="story section" data-screen-label="Story">
      <div className="container">
        <div className="grid">
          <div className="img-frame">
            <img
              src="../../assets/photos/story.jpg"
              alt="Top-down biryani on banana leaf"
              onError={(e) => { e.currentTarget.src = '../../assets/biryani-placeholder.svg'; e.currentTarget.style.width = '90%'; e.currentTarget.style.height = 'auto'; }}
            />
            <svg className="frame-leaf" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M30 120 q40 -90 140 -90 q-10 110 -120 130 q-20 -10 -20 -40 z" />
              <path d="M40 130 q60 -70 130 -100" />
              <path d="M60 110 q15 -10 30 -30" />
              <path d="M75 95 q15 -10 30 -30" />
              <path d="M90 80 q15 -10 30 -30" />
            </svg>
          </div>
          <div>
            <span style={{ fontFamily: 'var(--font-telugu)', fontWeight: 700, color: 'var(--brick)', fontSize: 22, display: 'block', marginBottom: 10 }}>మన కథ</span>
            <h2>From amma's kitchen — to your hostel door.</h2>
            <div className="body">
              <p>
                Sindhu started on a coastal stretch of Andhra, in a kitchen where the
                rice was washed three times and the dough on the pot was sealed by hand.
                A recipe handed down, never written.
              </p>
              <p>
                Today we cook the same way in Mandadam — coal, dum, patience —
                and carry it the last mile to students far from home. No app.
                No queue. Just one number, one neighbourhood, one plate at a time.
              </p>
              <div className="sig">— from our dum to your dorm.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
