import Card from "./components/Card";

export default function App() {
  const fruits = [
    {
      id: 1337,
      name: "🍌 Banana",
      color: "yellow",
    },
    {
      id: 42,
      name: "🍎 Apple",
      color: "green",
    },

    {
      id: 555,
      name: "🍇 Grape",
      color: "purple",
    },
    {
      id: 987,
      name: "🍊 Orange",
      color: "orange",
    },
    {
      id: 711,
      name: "🍓 Strawberry",
      color: "red",
    },
  ];
  return (
    <div className="app">
      {fruits.map((fruit) => {
        return <Card key={fruit.id} name={fruit.name} color={fruit.color} />;
      })}
    </div>
  );
}
