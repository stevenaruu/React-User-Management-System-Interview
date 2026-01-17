function Counter() {
  let age: number = 0;

  const increment = () => {
    age = age + 1;
  };

  const decrement = () => {
    age = age - 1;
  };

  return (
    <div>
      <button onClick={decrement}>-</button>
      <span style={{ margin: "0 8px" }}>Age: {age}</span>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default Counter;