import { Link, Route, Routes } from 'react-router-dom';
import {RoutePath} from './router-config/routeConfig'
// import { AboutPage } from "./pages/aboutPage/AboutPage";
// import { MainPage } from "./pages/mainPage/MainPage";
// import { NotFoundPage } from './pages/NotFoundPage';


function App() {
  return (
    <>
      <div className="nav">
        <Link to={'/'}>Главная</Link>
        <Link to={'/about'}>О сайте</Link>
      </div>
      

      <Routes>
        { RoutePath.map(({path, element})=>
        <Route key={path} path={path} element={element}/>)}
        
      </Routes>

    </>

  );
}

export default App;
