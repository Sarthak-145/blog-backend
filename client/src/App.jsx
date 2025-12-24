import { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const id = setTimeout(() => {
      setCount((count) => count + 1);
      return () => clearTimeout(id);
    }, 1000);
  }, []);
  return (
    <>
      <div>
        <p>I've rendered {count} times</p>
      </div>
    </>
  );
}

export default App;
