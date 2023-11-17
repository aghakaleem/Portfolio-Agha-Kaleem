//import logo from './logo.svg';
//import './App.css';

import Footer from './components/footer';
import Header from './components/header';
import {AllProjects} from './components/AllProjects';

import {Reviews} from './components/reviews';
import {Routes, Route} from "react-router-dom";
import {WelcomePage} from "./components/welcomePage";
function App() {
  return (
    <div className="App">

        <Header />
        <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path={'/all-projects'} element={<AllProjects />} />
            <Route path={'/reviews'} element={<Reviews />} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
