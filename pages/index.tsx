import { Welcome } from '../components/Welcome/Welcome';
import { HeaderMegaMenu } from '../components/Header/Header';
import { HeroText } from '../components/HeroHeader/HeroHeader';




export default function HomePage() {
  return (
    <>
      <HeaderMegaMenu />
      <Welcome />
      <HeroText />
    </>
  );
}
