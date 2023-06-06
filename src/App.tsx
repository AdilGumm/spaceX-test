import './App.css';
import './ui/fonts/museoSansCyrl/museoSans.css'
import { Route, Routes } from 'react-router-dom';
import { Major } from './pages/major/organelles/Major';
import { Header } from './ui/header/organelles/Header';
import DefaultBackground from './assets/major/defaultBackground.png'
import DefaultBackgroundOnlyPlanet from './assets/major/defaultBackgroundOnlyPlanet.png'

function App() {
  return (
    <div className="App">
      <img className="App__Planet" src={DefaultBackground} alt="Background Planet" />
      <img className="App__OnlyPlanet" src={DefaultBackgroundOnlyPlanet} alt="Background Only Planet" />
      <Header />
      <div className="App__Actual">
        <Routes>
          <Route path="/" element={<Major />} />
          <Route path='*' element={<Major />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
