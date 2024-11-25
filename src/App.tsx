import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import AppRoutes from "./components/Routes/AppRoutes";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <AppRoutes/>
      <Footer />
    </>
  );
}

export default App;
