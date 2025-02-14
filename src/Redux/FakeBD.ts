export type MovieType = {
  id: string;
  title: string;
  rating: string;
  genre: string[];
  likes: number;
  dislikes: number;
  image: string;
};

export type PersonType = {
  id: string;
  name: string;
  englishName: string;
  career: string[];
  height: string;
  birthDate: string;
  zodiac: string;
  age: number;
  birthPlace: string;
  genres: string[];
  moviesCount: number;
  yearsActive: string;
  awards: string[];
  image: string;
};

export type FakeDatabaseType = {
  movies: MovieType[];
  persons: PersonType[];
};

export const fakeDatabase: FakeDatabaseType = {
  movies: [
    {
      id: "1",
      title: "Побег из Претории",
      rating: "6.70",
      genre: ["триллер"],
      likes: 222,
      dislikes:111,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaOoN8kN6jA46g-oDZHf_WExHFvhr869H79Q&s",
    },
    {
      id: "2",
      title: "Джокер",
      rating: "8.50",
      genre: ["триллер", "драма", "криминал"],
      likes: 999,
      dislikes: 88,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy3fSfoZTBCRrcT9_s3Wua9moYhG8VOYOcuA&s",
    },
    {
      id: "3",
      title: "Начало",
      rating: "8.80",
      genre: ["триллер", "научная фантастика", "драма"],
      likes: 777,
      dislikes: 666,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSsQXiWIXXiUit3vgzZvjCgIMGGhnNKCvx1w&s",
    },
    {
      id: "4",
      title: "Матрица",
      rating: "8.70",
      genre: ["научная фантастика", "боевик", "драма"],
      likes: 555,
      dislikes: 444,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBSCFdhe31YTtfnpIHBbJZqVyPSZUxhwiltQ&s",
    },
    {
      id: "5",
      title: "Побег из Шоушенка",
      rating: "9.30",
      genre: ["драма", "криминал"],
      likes: 333,
      dislikes: 222,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXlCqox8TkefRkm6AoUg8yxOwKlLCia8-pTA&s",
    },
    {
      id: "6",
      title: "Темный рыцарь",
      rating: "9.00",
      genre: ["боевик", "драма", "криминал"],
      likes: 111,
      dislikes: 999,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuUzeaYLRfo8o6Gz5vtkRPiVhTsb3MGXbJSg&s",
    },
    {
      id: "7",
      title: "Интерстеллар",
      rating: "8.60",
      genre: ["научная фантастика", "драма"],
      likes: 888,
      dislikes: 777,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBUj7vKc1FWtxeuQfSI7ocdS8bzy5eDgoxAA&s",
    },
    {
      id: "8",
      title: "Бойцовский клуб",
      rating: "8.80",
      genre: ["драма", "криминал"],
      likes: 666,
      dislikes: 555,
      image:
        "https://s1.afisha.ru/mediastorage/a6/a0/81e2d43fa763441294fad29fa0a6.jpg",
    },
    {
      id: "9",
      title: "Рапунцель: Запутанная история",
      rating: "8.20",
      genre: ["приключения", "семейный", "фэнтези"],
      likes: 444,
      dislikes: 333,
      image:
        "https://play-lh.googleusercontent.com/lMtuaBGBTlDeRLgBAhYbJzwCCiSyPvwIejWu2w6Nicrg9DXW5etJRRv_Q472Lj_T4xuT",
    },
    {
      id: "10",
      title: "Джон Уик",
      rating: "7.90",
      genre: ["боевик", "триллер"],
      likes: 222,
      dislikes: 111,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvB_E8q22HoTwdcog1YAFSQZsV8amHjQDVNA&s",
    },
  ],
  persons: [
    {
      id: "1",
      name: "Киану Ривз",
      englishName: "Keanu Reeves",
      career: ["Актер", "Продюсер"],
      height: "1.86 м",
      birthDate: "2 сентября 1964",
      zodiac: "Дева",
      age: 56,
      birthPlace: "Бейрует, Ливан",
      genres: ["Драма", "Экшн", "Фэнтези"],
      moviesCount: 70,
      yearsActive: "1985 — настоящее время",
      awards: ["Золотой глобус", "Сатурн"],
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbX9g1bV-4bqeWTJ7KFb2Sh0IQqWMoaexLXA&s",
    },
    {
      id: "2",
      name: "Леонардо ДиКаприо",
      englishName: "Leonardo DiCaprio",
      career: ["Актер", "Продюсер", "Сценарист"],
      height: "1.83 м",
      birthDate: "11 ноября 1974",
      zodiac: "Скорпион",
      age: 45,
      birthPlace: "Голливуд, Лос-Анджелес, Калифорния, США",
      genres: ["Драма", "Триллер", "Документальный"],
      moviesCount: 216,
      yearsActive: "1984 — 2021",
      awards: [],
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNk9fBNEphQSlstCAykySUmB1Lqmecn0G2AA&s",
    },
    {
      id: "3",
      name: "Мэрил Стрип",
      englishName: "Meryl Streep",
      career: ["Актриса", "Продюсер"],
      height: "1.63 м",
      birthDate: "22 июня 1949",
      zodiac: "Рак",
      age: 71,
      birthPlace: "Сума, Нью-Джерси, США",
      genres: ["Драма", "Комедия", "Мюзикл"],
      moviesCount: 129,
      yearsActive: "1977 — настоящее время",
      awards: ["Оскар", "Золотой глобус"],
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxLLbH2WuCTWu_sqgHr7BLqEDAZQFMW8uA3g&s",
    },
    {
      id: "4",
      name: "Джонни Депп",
      englishName: "Johnny Depp",
      career: ["Актер", "Продюсер"],
      height: "1.78 м",
      birthDate: "9 июня 1963",
      zodiac: "Близнецы",
      age: 57,
      birthPlace: "Оуэнсборо, Кентукки, США",
      genres: ["Драма", "Фэнтези", "Комедия"],
      moviesCount: 102,
      yearsActive: "1984 — настоящее время",
      awards: ["Золотой глобус", "Сатурн"],
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVjMssJMEdJ_cgcP6af-I5jDKOQEOcgCc2Bg&s",
    },
    {
      id: "5",
      name: "Эмма Стоун",
      englishName: "Emma Stone",
      career: ["Актриса", "Продюсер"],
      height: "1.68 м",
      birthDate: "6 ноября 1988",
      zodiac: "Скорпион",
      age: 32,
      birthPlace: "Скотсдейл, Аризона, США",
      genres: ["Драма", "Комедия", "Мюзикл"],
      moviesCount: 40,
      yearsActive: "2004 — настоящее время",
      awards: ["Оскар", "Золотой глобус"],
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6xEmYRmABpBDUNxIFXLok0It70XWU0KJ58Q&s",
    },
    {
      id: "6",
      name: "Том Хэнкс",
      englishName: "Tom Hanks",
      career: ["Актер", "Продюсер", "Режиссер"],
      height: "1.83 м",
      birthDate: "9 июля 1956",
      zodiac: "Рак",
      age: 64,
      birthPlace: "Конкорд, Калифорния, США",
      genres: ["Драма", "Комедия", "Приключения"],
      moviesCount: 95,
      yearsActive: "1978 — настоящее время",
      awards: ["Оскар", "Золотой глобус"],
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCheC8noyyHoN2rGqM5cpPu4A2EgCdJodWVA&s",
    },
    {
      id: "7",
      name: "Анжелина Джоли",
      englishName: "Angelina Jolie",
      career: ["Актриса", "Режиссер", "Продюсер"],
      height: "1.69 м",
      birthDate: "4 июня 1975",
      zodiac: "Близнецы",
      age: 45,
      birthPlace: "Лос-Анджелес, Калифорния, США",
      genres: ["Драма", "Экшн", "Приключения"],
      moviesCount: 70,
      yearsActive: "1993 — настоящее время",
      awards: ["Оскар", "Золотой глобус"],
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx9HpegOEXtfW4Z6MRPY7a92qSrx0gX2iczA&s",
    },
    {
      id: "8",
      name: "Уилл Смит",
      englishName: "Will Smith",
      career: ["Актер", "Продюсер", "Рэп-исполнитель"],
      height: "1.88 м",
      birthDate: "25 сентября 1968",
      zodiac: "Весы",
      age: 52,
      birthPlace: "Филадельфия, Пенсильвания, США",
      genres: ["Экшн", "Комедия", "Драма"],
      moviesCount: 70,
      yearsActive: "1986 — настоящее время",
      awards: ["Оскар", "Золотой глобус"],
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQZfoB7u20dREsRxPn_q7nA31nsqkn0bLHjQ&s",
    },
    {
      id: "9",
      name: "Кейт Бланшетт",
      englishName: "Cate Blanchett",
      career: ["Актриса", "Режиссер"],
      height: "1.74 м",
      birthDate: "14 мая 1969",
      zodiac: "Телец",
      age: 51,
      birthPlace: "Мельбурн, Австралия",
      genres: ["Драма", "Фэнтези", "Исторический"],
      moviesCount: 50,
      yearsActive: "1992 — настоящее время",
      awards: ["Оскар", "Золотой глобус"],
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2T2VqvqsmNi-4TcifhE_P161Ka7wWsojz2Q&s",
    },
    {
      id: "10",
      name: "Скарлетт Йоханссон",
      englishName: "Scarlett Johansson",
      career: ["Актриса", "Продюсер"],
      height: "1.60 м",
      birthDate: "22 ноября 1984",
      zodiac: "Стрелец",
      age: 36,
      birthPlace: "Нью-Йорк, США",
      genres: ["Драма", "Экшн", "Фэнтези"],
      moviesCount: 58,
      yearsActive: "1994 — настоящее время",
      awards: ["Золотой глобус", "Сатурн"],
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ7OHAjhJN7dOQsw7oXB9M_OL2LEOZ_SCx4w&s",
    },
    {
      id: "11",
      name: "Мэтт Дэймон",
      englishName: "Matt Damon",
      career: ["Актер", "Продюсер"],
      height: "1.78 м",
      birthDate: "8 октября 1970",
      zodiac: "Весы",
      age: 50,
      birthPlace: "Кембридж, Массачусетс, США",
      genres: ["Драма", "Экшн", "Триллер"],
      moviesCount: 69,
      yearsActive: "1988 — настоящее время",
      awards: ["Оскар", "Золотой глобус"],
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbXKRwBkqADyt6xJ8a21nLjs-N4VsWeoqYpQ&s",
    },
    {
      id: "12",
      name: "Хью Джекман",
      englishName: "Hugh Jackman",
      career: ["Актер", "Продюсер", "Режиссер"],
      height: "1.92 м",
      birthDate: "12 октября 1968",
      zodiac: "Весы",
      age: 52,
      birthPlace: "Сидней, Австралия",
      genres: ["Драма", "Экшн", "Мюзикл"],
      moviesCount: 60,
      yearsActive: "1994 — настоящее время",
      awards: ["Золотой глобус", "Сатурн"],
      image:
        "https://www.film.ru/sites/default/files/people/1455531-2783777.jpg",
    },
    {
      id: "13",
      name: "Галь Гадот",
      englishName: "Gal Gadot",
      career: ["Актриса", "Модель", "Продюсер"],
      height: "1.78 м",
      birthDate: "30 апреля 1985",
      zodiac: "Телец",
      age: 35,
      birthPlace: "Рош ха-Аин, Израиль",
      genres: ["Экшн", "Фэнтези", "Драма"],
      moviesCount: 26,
      yearsActive: "2004 — настоящее время",
      awards: ["Сатурн"],
      image:
        "https://upload.wikimedia.org/wikipedia/commons/5/5b/Gal_Gadot_cropped_lighting_corrected_2b.jpg",
    },
    {
      id: "14",
      name: "Роберт Дауни младший",
      englishName: "Robert Downey Jr.",
      career: ["Актер", "Продюсер"],
      height: "1.74 м",
      birthDate: "4 апреля 1965",
      zodiac: "Овен",
      age: 55,
      birthPlace: "Нью-Йорк, США",
      genres: ["Драма", "Экшн", "Комедия"],
      moviesCount: 79,
      yearsActive: "1970 — настоящее время",
      awards: ["Оскар", "Золотой глобус"],
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh-m7T4qByVPlpgRqtFLDKzk3mYecDuQtliw&s",
    },
  ],
};
