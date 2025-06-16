// src/data/artworks.ts

export const artworks = [
  {
    id: "1",
    src: "/1.png",
    artistName: "Винсент ван Гог",
    artistHandle: "@vincentvangogh",
    title: "Жұлдызды түн",
  },
  {
    id: "2",
    src: "/2.png",
    artistName: "Леонардо да Винчи",
    artistHandle: "@leonardodavinci",
    title: "Мона Лиза",
  },
  {
    id: "3",
    src: "/3.png",
    artistName: "Йоханнес Вермеер",
    artistHandle: "@johannesvermeer",
    title: "Інжу сырғасы бар қыз",
  },
  {
    id: "4",
    src: "/4.png",
    artistName: "Клод Моне",
    artistHandle: "@claudemonet",
    title: "Әсер, күннің шығуы",
  },
  {
    id: "5",
    src: "/5.png",
    artistName: "Густав Климт",
    artistHandle: "@gustavklimt",
    title: "Сүйіс",
  },
  {
    id: "6",
    src: "/6.png",
    artistName: "Фрида Кало",
    artistHandle: "@fridakahlo",
    title: "Екі Фрида",
  },
  {
    id: "7",
    src: "/7.png",
    artistName: "Сальвадор Дали",
    artistHandle: "@salvadordali",
    title: "Естелік тұрақтылығы",
  },
  {
    id: "8",
    src: "/8.png",
    artistName: "Пабло Пикассо",
    artistHandle: "@pablopicasso",
    title: "Герника",
  },
  {
    id: "9",
    src: "/9.png",
    artistName: "Рене Магритт",
    artistHandle: "@renemagritte",
    title: "Адам баласы",
  },
];

export type Artwork = (typeof artworks)[0];