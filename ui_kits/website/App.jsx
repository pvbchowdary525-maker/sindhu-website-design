// App.jsx — composes the full Sindhu landing
function App() {
  const [cart, setCart] = React.useState([]);
  const [modalOpen, setModalOpen] = React.useState(false);

  const addItem = (item) => {
    setCart(c => [...c, item]);
    setModalOpen(true);
  };
  const openOrder = () => setModalOpen(true);
  const scrollMenu = () => {
    const el = document.getElementById('menu');
    if (el) window.scrollTo({ top: el.offsetTop - 20, behavior: 'smooth' });
  };

  return (
    <>
      <Header onOrder={openOrder} />
      <Hero onOrder={openOrder} onMenu={scrollMenu} />
      <Marquee variant="brick" phrases={[
        'FRESH DUM', 'SLOW COOKED', 'SOUL SERVED', 'CHALA BAGUNDI'
      ]} />
      <Menu onAdd={addItem} />
      <Story />
      <Marquee variant="cream" phrases={[
        'AMMA\u2019S RECIPE', 'COAL FIRED', 'BANANA LEAF', 'BAGUNDI?'
      ]} />
      <Why />
      <DeliveryZone />
      <CTABand onOrder={openOrder} />
      <Footer />
      {modalOpen && <WhatsAppModal items={cart} onClose={() => setModalOpen(false)} />}
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
