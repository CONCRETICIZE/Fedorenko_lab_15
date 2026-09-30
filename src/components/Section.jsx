export default function Section() {
  return (
    <section className="section-panel" aria-label="Южный федеральный университет">
      <p className="eyebrow">Ростов-на-Дону · Таганрог</p>
      <figure className="campus-figure">
        <img
          src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=900&q=85"
          alt="Университетский кампус среди деревьев"
        />
        <figcaption>Ориентир для первого маршрута по кампусу</figcaption>
      </figure>
      <span className="section-note">Основан в 1915 году</span>
    </section>
  );
}