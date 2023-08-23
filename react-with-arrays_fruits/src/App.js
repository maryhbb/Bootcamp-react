import Card from "./components/Card";
import { v4 as uuidv4 } from "uuid";

export default function App() {
  const fruits = [
    {
      id: uuidv4(),
      name: "🍌 Banana",
      color: "yellow",
    },
    {
      id: uuidv4(),
      name: "🍎 Apple",
      color: "green",
    },

    {
      id: uuidv4(),
      name: "🍇 Grape",
      color: "purple",
    },
    {
      id: uuidv4(),
      name: "🍊 Orange",
      color: "orange",
    },
    {
      id: uuidv4(),
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
