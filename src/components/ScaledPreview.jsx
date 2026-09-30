import { useEffect, useRef, useState } from 'react';

// Renders a full template HTML doc inside an iframe, scaled down to fit its tile.
export default function ScaledPreview({ html, width = 1280, className = '' }) {
  const ref = useRef(null);
  const [scale, setScale] = useState(0.3);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => setScale(el.clientWidth / width);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [width]);

  const height = Math.round(width * 0.75);

  return (
    <div ref={ref} className={`relative overflow-hidden aspect-[4/3] ${className}`}>
      <iframe
        srcDoc={html}
        title="template preview"
        loading="lazy"
        sandbox="allow-scripts allow-same-origin"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width,
          height,
          border: 0,
          transform: `scale(${scale})`,
          transformOrigin: 'top left',
          pointerEvents: 'none'
        }}
      />
    </div>
  );
}