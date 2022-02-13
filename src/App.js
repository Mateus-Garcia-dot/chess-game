import { Routes, Route } from 'react-router-dom';

import  BoardConfig  from './components/BoardConfig/BoardConfig';

function App() {
  return (
    <Routes>
      
      <Route exact path='/config' element={<BoardConfig/>} />
    </Routes>
    );
}

export default App;
