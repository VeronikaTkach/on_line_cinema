import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Link } from "./components/Link/Link";
import { MenuList } from "./components/MenuList/MenuList";
import { PrivacyPolicy } from "./components/PrivacyPolicy/PrivacyPolicy";
import SocialIcons from "./components/SocialIcons/SocialIcons";
import Container from "./layouts/Container/Container";

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
        <Container>
          <SocialIcons />
          <MenuList>
            {data.map((el, index) => (
              <Link key={index}>{el.text}</Link>
            ))}
          </MenuList>
          <PrivacyPolicy text={"Политика конфиденциальности"} />
        </Container>
      </Footer>
    </>
  );
}

export default App;
