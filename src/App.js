//import logo from './logo.svg';
//import './App.css';

import Footer from './components/footer';
import Header from './components/header';


import {Reviews} from './components/reviews';
import {Routes, Route} from "react-router-dom";
import {WelcomePage} from "./components/welcomePage";
import {Offerings} from "./components/Offerings";
import About from "./components/about";
function App() {
  return (
    <div className="App">

        <Header />
        <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path={'/offerings'} element={<Offerings />} />
            <Route path={'/about'} element={<About />} />
            <Route path={'/reviews'} element={<Reviews />} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
