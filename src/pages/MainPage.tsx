import NewsCard from "../components/NewsCard/NewsCard";
import Films from "./Films";

const MainPage = () => {
  return (
    <div>
      <Films />
      <NewsCard news={{
      title: 'Не время умирать. Перенос релиза фильма  ',
      description: 'Но действия представителей оппозиции в равной степени предоставлены сами себе. В рамках спецификации современных стандартов, стремящиеся вытеснить традиционное производство, нанотехнологии указаны как претенденты на роль ключевых факторов.',
      date: '15 Апр 2020',
      views: 242,
      comments: 14,
      image: '1',
    }}
    />
    </div>
  );
};
export default MainPage;
