import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Link } from "./components/Link/Link";
import { MenuList } from "./components/MenuList/MenuList";
import { PrivacyPolicy } from "./components/PrivacyPolicy/PrivacyPolicy";
import SocialIcons from "./components/SocialIcons/SocialIcons";

function App() {
  const data = [
    { text: "Афиша" },
    { text: "Новости" },
    { text: "Персоны" },
    { text: "Рейтинги" },
    { text: "Рецензии" },
    { text: "Каталог фильмов" },
  ];
  return (
    <>
      <Header />
      <Footer>
        <SocialIcons />
        <MenuList>
          {data.map((el, index) => (
            <Link key={index}>{el.text}</Link>
          ))}
        </MenuList>
        <PrivacyPolicy text={"Политика конфиденциальности"} />
      </Footer>
    </>
  );
}

export default App;
