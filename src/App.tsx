import { Link, Route, Routes } from 'react-router-dom';
import { AboutPage } from "./pages/aboutPage/AboutPage";
import { MainPage } from "./pages/mainPage/MainPage";
import { NotFoundPage } from './pages/NotFoundPage';


function App() {
  return (
    <>
      <div className="nav">
        <Link to={'/'}>Главная</Link>
        <Link to={'/about'}>О сайте</Link>
      </div>
      

      <Routes>
        <Route path={'/about'} element={<AboutPage />} />
        <Route path={'/'} element={<MainPage />} />
        <Route path={'*'} element={<NotFoundPage />} />
      </Routes>

    </>

  );
}

export default App;
