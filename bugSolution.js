import React, { useEffect, useState } from 'react';
import { useMountedState } from 'expo-hooks';

function MyComponent() {
  const isMounted = useMountedState();
  const [count, setCount] = useState(0);

  useEffect(() => {
    // instead of using isMounted directly inside useEffect, we use another state variable
    // to store if the component is mounted.
    let isMounted = true;

    const intervalId = setInterval(() => {
      if (!isMounted) return;
      setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
      isMounted = false;
    };
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
      {/* isMounted will not cause any problem here */}
      <p>Is mounted: {isMounted ? 'yes' : 'no'}</p> 
    </div>
  );
}
export default MyComponent;