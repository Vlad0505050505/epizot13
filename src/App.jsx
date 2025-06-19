import { useState } from 'react';

import Counter from './components/Counter/Counter.jsx';
import Header from './components/Header.jsx';
import { log } from './log.js';
import CofigureCount from './components/Counter/ConfigureCount.jsx';
function App() {
  log('<App /> rendered');


  const [chosenCount, setChosenCount] = useState(0);

  function handleSetCount(newCount){
    setChosenCount(newCount);
  }
  
  return (
    <>
      <Header />
      <main>
        <CofigureCount  onSet = {handleSetCount}/>
        <Counter key={chosenCount} initialCount={chosenCount} />
        <Counter initialCount={0} />
      </main>
    </>
  );
}

export default App;
