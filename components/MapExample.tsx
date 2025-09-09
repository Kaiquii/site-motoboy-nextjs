export default function MapExample() {
  const lat = -23.55052;
  const lng = -46.633308;
  return (
    <div style={{ width: '100%', height: '300px' }}>
      <iframe
        title="Mapa São Paulo"
        width="100%"
        height="100%"
        style={{ borderRadius: '12px', border: 0 }}
        src={`https://www.openstreetmap.org/export/embed.html?bbox=${lng-0.01}%2C${lat-0.01}%2C${lng+0.01}%2C${lat+0.01}&layer=mapnik&marker=${lat}%2C${lng}`}
        allowFullScreen
      ></iframe>
    </div>
  );
}

