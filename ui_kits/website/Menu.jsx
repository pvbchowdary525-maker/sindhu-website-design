// Menu.jsx — "Mana Biryani" three cards
const MENU = [
  { name: 'Dum Biryani', price: 170, desc: 'Slow-cooked over coals, sealed with dough. The classic that started it all.', sticker: 'sticker-dum-special.svg' },
  { name: 'Fry Biryani', price: 190, desc: 'Wok-tossed, smoky, with a crisp edge. For when you want bold.', sticker: null },
  { name: 'Mix Biryani', price: 200, desc: "The best of both worlds — dum's depth, fry's fire. Hostel favourite.", sticker: 'sticker-hostel-fav.svg' },
];

// Photo slot — drop a top-down banana-leaf shot in assets/photos/<name>.jpg
// matching the lowercased item name (e.g. dum-biryani.jpg). Falls back to
// the SVG placeholder until a real photo lands.
function MenuCard({ item, onClick }) {
  const slug = item.name.toLowerCase().replace(/\s+/g, '-');
  return (
    <div className="menu-card" onClick={onClick} data-comment-anchor={`menu-${slug.split('-')[0]}`}>
      {item.sticker && (
        <img className="sticker-overlay" src={`../../assets/stickers/${item.sticker}`} alt="" />
      )}
      <div className="photo">
        <img
          src={`../../assets/photos/${slug}.jpg`}
          alt={item.name}
          onError={(e) => { e.currentTarget.src = '../../assets/biryani-placeholder.svg'; }}
        />
      </div>
      <div className="row">
        <div className="name">{item.name}</div>
        <div className="price"><span className="rupee">₹</span>{item.price}</div>
      </div>
      <div className="desc">{item.desc}</div>
    </div>
  );
}

function Menu({ onAdd }) {
  return (
    <section id="menu" className="section" data-screen-label="Menu">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="h-eyebrow">మన బిర్యానీ</span>
            <h2>Mana Biryani.</h2>
          </div>
          <p className="blurb">
            Three biryanis. Each one slow, each one ours. Tap a plate to add it to your WhatsApp order.
          </p>
        </div>
        <div className="menu-grid">
          {MENU.map(item => (
            <MenuCard key={item.name} item={item} onClick={() => onAdd(item)} />
          ))}
        </div>
        <div className="menu-note">More dishes coming soon. A poc a poc… slowly, slowly.</div>
      </div>
    </section>
  );
}
