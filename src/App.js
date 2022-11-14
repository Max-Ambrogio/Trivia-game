import logo from './logo.svg';
import './App.css';
import{
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import Search from './pages/Search';

function App() {
  return ( 
  <BrowserRouter>
    <div className='app'>
      <h1>Trivia Quiz</h1>
        <div className='options'>
        
            <Routes>
              <Route path='search' element={<Search />} />
            </Routes>
        </div>
    </div>
  </BrowserRouter>
  );
}

export default App;
