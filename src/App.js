import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import{
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Search from './pages/Search';
import FinalScreen from './pages/FinalScreen';
import Questions from './pages/Questions';
import { ScoreProvider } from './scoreContex';



function App() {
  const [score, setScore] = useState(0);
  const value = {score, setScore}

  return ( 
  <BrowserRouter>
    <ScoreProvider value={value}>      
      <div className='app'>
          <h1>Trivia Quiz</h1>
          <div className='options'>          
              <Routes>
                <Route path='/' element={<Search />} />
                <Route path='/questions' element={<Questions />} />
                <Route path='/score' element={<FinalScreen />} />
              </Routes>
          </div>
      </div>
    </ScoreProvider>
  </BrowserRouter>
  );
}

export default App;
