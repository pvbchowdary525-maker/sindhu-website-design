// Header.jsx — top of page: logo + nav + order button
function Header({ onOrder }) {
  return (
    <header className="site-header">
      <div className="container">
        <div className="row">
          <img src="../../assets/logo.svg" alt="Sindhu" className="logo" />
          <nav className="nav">
            <a href="#menu">Menu</a>
            <a href="#story">Our Story</a>
            <a href="#delivery">Delivery</a>
            <button className="btn solid sm" onClick={onOrder}>Order Now</button>
          </nav>
        </div>
      </div>
    </header>
  );
}
