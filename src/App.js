import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Etusivu from './pages/Etusivu';
import Uutiset from './pages/Uutiset';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Kartta from './pages/Kartta';
import Rata from './pages/Rata';
import UutisSivu from './pages/UutisSivu';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/WebProjekti" element={<Layout />}>
          <Route index element={<Etusivu />} />
          <Route path="kartta" element={<Kartta />} />
          <Route path="uutiset" element={<Uutiset />} />
          <Route path="uutisSivu" element={<UutisSivu />} />
          <Route path="rata" element={<Rata />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
  /*
  return (
    <div className="App">
      <Header/>
      <Body/>
    </div>
  );
  */
}

export default App;
