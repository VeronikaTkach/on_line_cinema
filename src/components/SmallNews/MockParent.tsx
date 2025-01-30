import { SmallNews } from "./SmallNews";

const mockData = [
  {
    id: "1",
    title: "Побег из Претории",
    rating: "6.70",
    date: "15 апреля 2020",
    description: "Описание фильма",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaOoN8kN6jA46g-oDZHf_WExHFvhr869H79Q&s",
  },
];

export function MockParent() {
  return (
    <div style={{ display: "flex", gap: "16px" }}>
      {mockData.map((mockData) => (
        <SmallNews
          key={mockData.id}
          image={mockData.image}
          title={mockData.title}
          date={mockData.date}
          description={mockData.description}
        />
      ))}
    </div>
  );
}
