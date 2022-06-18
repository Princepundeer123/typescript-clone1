import axios from 'axios';
import { useEffect, useState } from 'react';
import Path from './Path';

function App() {
  const [count, setCount] = useState(0)
 
  return (
    <div>
    <Path/>
     </div>
  )
}

export default App
