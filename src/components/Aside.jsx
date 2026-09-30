export default function Aside() {
  return (
    <aside className="aside-panel">
      <p className="eyebrow">Автор проекта</p>
      <p className="author-name">
        <span>Федоренко</span>
        <span>Степан</span>
        <span>Дмитриевич</span>
      </p>
      <div className="author-details">
        <span>Прикладная информатика</span>
        <span>Таганрог · 2 курс</span>
      </div>
      <span className="author-course">Лабораторная работа № 15</span>
    </aside>
  );
}