import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Major } from './pages/major/organelles/Major';
import { Header } from './ui/header/organelles/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App_Actual">
        <Routes>
          <Route path="/" element={<Major />} />
          <Route path='*' element={<Major />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
