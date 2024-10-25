import { Experience } from "./components/experience/experience";
import { Header } from "./components/header/header";
import { Info } from "./components/information/information";
import { SocialBtns } from "./components/social-btns/socialButtons";

import './styles/home.scss';

export default function Home() {
  return (
    <div>
      <main className="container">
        <Header/>
        <Experience/>
        <Info/>
        <div className="buttons">
          <SocialBtns/>
          <a className="btn-primary" href="mailto:andreygoncalvesdev@gmail.com">
            Contact me ✉️
          </a>
        </div>
      </main>
    </div>
  );
}
