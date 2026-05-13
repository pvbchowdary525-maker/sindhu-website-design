// Marquee.jsx — scrolling band, used for both brick and cream variants
function Marquee({ phrases, variant = 'brick' }) {
  // duplicate phrases to make the loop continuous (transform: -50% lands on copy 1)
  const list = [...phrases, ...phrases];
  return (
    <div className={`marquee ${variant === 'cream' ? 'cream' : ''}`}>
      <div className="track">
        {list.map((p, i) => (
          <React.Fragment key={i}>
            <span>{p}</span>
            <span className="dot" aria-hidden="true"></span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
