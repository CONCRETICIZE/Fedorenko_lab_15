import Section from './Section.jsx';
import Article from './Article.jsx';
import Aside from './Aside.jsx';

export default function Main() {
  return (
    <main className="site-main">
      <Section />
      <Article />
      <Aside />
    </main>
  );
}