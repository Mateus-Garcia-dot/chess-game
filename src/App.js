import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ChessBoard from './components/ChessBoard/ChessBoard';
import  BoardConfig  from './components/BoardConfig/BoardConfig';

function App() {
  return (
    <React.StrictMode>
      <Routes>
        <Route  exact path="/play" element={<ChessBoard />} />
        <Route exact path='/' element={<BoardConfig/>} />
      </Routes>
    </React.StrictMode>
    );
}

export default App;
