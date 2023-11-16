import { BrowserRouter, Routes, Route} from 'react-router-dom';
import About from "./Pages/About/About";
import Main from "./Pages/Main/Main";
import Header from './components/Header/Header';
import "./App.css";
import MainPage from 'components/StandardPage/StandardPage';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Header/>


      <Routes>
        <Route path="/" element= {<MainPage />}>
          <Route path="/" element={<Main/>}/>
          <Route path="/about-me" element={<About/>}/>
        </Route>


        <Route path="*" element={<div>Olá</div>}/>
      </Routes>


    </BrowserRouter>
  );
}

export default AppRoutes;
