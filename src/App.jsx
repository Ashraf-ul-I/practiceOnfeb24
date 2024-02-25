import React, { useContext } from 'react';
import CountContext from './context/CountContext';

import NewCountFile from './components/NewCountFile';
import PrentComponent from './components/expolringChildComponent/PrentComponent';
import Login from './LoginChallange/Login';
import SearchFunctionality from './searchFunctionality/SearchFunctionality';

function App() {
  const { count, setCount } = useContext(CountContext);

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount(prevCount => Math.max(0, prevCount - 1));
  };

  return (
    <div>
      {/* <h4>Welcome To Chalange of Login</h4>
      <Login />
      <h3>Count: {count}</h3>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleIncrement}>Increment</button>
      <NewCountFile />
      <PrentComponent /> */}

      <SearchFunctionality />
    </div>
  );
}

export default App;
