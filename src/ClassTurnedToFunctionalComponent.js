import React, { useEffect, useState } from "react";

export default function ClassTurnedToFunctionalComponent({ anotherCount }) {
  const [count, setCount] = useState(anotherCount);
  const [coffee, setCoffee] = useState([]);

  useEffect(() => {
    fetch("https://api.sampleapis.com/coffee/hot")
      .then((res) => res.json())
      .then((data) => setCoffee(data));
  }, []);
  return (
    <>
      <h1>This is a functional component{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
          setCoffee(coffee);
        }}
      >
        Add one
      </button>
      {coffee.map((coffee) => (
        <h1 key={coffee.id}>{coffee.title}</h1>
      ))}
    </>
  );
}
