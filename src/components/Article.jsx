import { Route, Routes } from 'react-router-dom';

function News() {
  return (
    <div className="article-copy">
      <p className="eyebrow">Дневник проекта <span>·</span> 16 мая 2026</p>
      <h1>Кампус, в котором легко найти своё место</h1>
      <p className="lead">
        Для лабораторной работы я собираю цифровой путеводитель по ЮФУ: не сухой
        список корпусов, а понятный маршрут от первой пары до места, где можно
        спокойно поработать.
      </p>
      <p>
        В основу легли простые вопросы новичка: где находится нужная аудитория,
        куда зайти между занятиями и как спланировать дорогу по кампусу. Так
        знакомое пространство превращается в карту, которой удобно пользоваться
        каждый день.
      </p>
      <div className="article-footnote">Полевые заметки Степана Федоренко · Lab 15</div>
    </div>
  );
}

function About() {
  return (
    <div className="article-copy">
      <p className="eyebrow">О проекте</p>
      <h1>Южный федеральный университет</h1>
      <p className="lead">
        Университет с кампусами в Ростове-на-Дону и Таганроге, где учебный день
        складывается из разных пространств, людей и идей.
      </p>
      <p>
        Этот сайт сделан как лабораторный проект: его задача — представить ЮФУ
        через удобную навигацию и небольшой путеводитель по университетской жизни.
        Новостная страница рассказывает о замысле, а разделы помогают быстро найти
        информацию об авторе и проекте.
      </p>
      <div className="article-footnote">Студенческий проект · Южный федеральный университет</div>
    </div>
  );
}

function Contacts() {
  return (
    <div className="article-copy">
      <p className="eyebrow">Связаться</p>
      <h1>Контакты</h1>
      <p className="lead">Федоренко Степан Дмитриевич</p>
      <p className="phone-link">+7 (863) 555-15-26</p>
      <p className="contact-hint">Учебный макет контактов · stepan.fedorenko@example.com</p>
    </div>
  );
}

function NotFound() {
  return (
    <div className="article-copy not-found">
      <p className="eyebrow">Страница не найдена</p>
      <h1>404</h1>
      <p className="lead">Кажется, такой страницы пока нет.</p>
    </div>
  );
}

export default function Article() {
  return (
    <article className="article-panel">
      <Routes>
        <Route path="/" element={<News />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </article>
  );
}