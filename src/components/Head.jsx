import { NavLink } from 'react-router-dom';

const links = [
  { to: '/', label: 'Новости' },
  { to: '/about', label: 'О проекте' },
  { to: '/contacts', label: 'Контакты' },
];

export default function Head() {
  return (
    <header className="site-header">
      <NavLink className="brand" to="/" aria-label="ЮФУ, главная">
        <span className="brand-mark">Ю</span>
        <span className="brand-name">ЮФУ<span>Южный федеральный университет</span></span>
      </NavLink>
      <nav className="site-nav" aria-label="Основная навигация">
        {links.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) => `nav-link${isActive ? ' is-active' : ''}`}
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}