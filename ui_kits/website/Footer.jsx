// Footer.jsx — hours, contact, socials on espresso
function Footer() {
  return (
    <footer data-screen-label="Footer">
      <div className="container">
        <div className="grid">
          <div>
            <img src="../../assets/logo.svg" alt="Sindhu" className="logo" />
            <div className="tag">Biryani, the Sindhu way. From our dum to your dorm.</div>
          </div>
          <div>
            <h4>Visit</h4>
            <ul>
              <li>Mandadam,</li>
              <li>Amaravathi,</li>
              <li>Andhra Pradesh —</li>
              <li>522237</li>
            </ul>
          </div>
          <div>
            <h4>Hours</h4>
            <ul>
              <li>Kitchen 11:00 — 22:30</li>
              <li>Delivery 12:00 — 22:00</li>
              <li>Daily, no off-days</li>
            </ul>
          </div>
          <div>
            <h4>Reach us</h4>
            <ul>
              <li><a href="tel:+910000000000">+91 00000 00000</a></li>
              <li><a href="https://wa.me/910000000000">WhatsApp</a></li>
              <li><a href="https://instagram.com/sindhu.mandadam">@sindhu.mandadam</a></li>
            </ul>
            <div className="socials">
              <a href="https://wa.me/910000000000" aria-label="WhatsApp"><img src="../../assets/icons/whatsapp.svg" alt="" style={{ width: 22, height: 22, filter: 'invert(95%) sepia(11%) saturate(388%) hue-rotate(348deg) brightness(102%) contrast(94%)' }} /></a>
              <a href="https://instagram.com/sindhu.mandadam" aria-label="Instagram"><img src="../../assets/icons/instagram.svg" alt="" style={{ width: 22, height: 22, filter: 'invert(95%) sepia(11%) saturate(388%) hue-rotate(348deg) brightness(102%) contrast(94%)' }} /></a>
              <a href="tel:+910000000000" aria-label="Call"><img src="../../assets/icons/phone.svg" alt="" style={{ width: 22, height: 22, filter: 'invert(95%) sepia(11%) saturate(388%) hue-rotate(348deg) brightness(102%) contrast(94%)' }} /></a>
            </div>
          </div>
        </div>
        <div className="legal">
          <span>© Sindhu 2026 — Made with love in Mandadam.</span>
          <span>Biryani, bagundi.</span>
        </div>
      </div>
    </footer>
  );
}
