import logo from './logo.svg';
import './App.css';
import{
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Search from './pages/Search';
import FinalScreen from './pages/FinalScreen';
import Questions from './pages/Questions';


function App() {
  return ( 
  <BrowserRouter>
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
  </BrowserRouter>
  );
}

export default App;
