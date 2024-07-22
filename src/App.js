
import './App.css';
import Nav from "./components/Nav.js"
import Intro1 from './components/Intro1';
import Intro2 from './components/intro2';
import Intro3 from './components/Intro3';
import Footer from './components/Footer';
import Promo from './components/Promo';

function App() {
  return (
    <div className="App">
      <Nav />
      <Promo />
      <Intro1 />
      <Intro2 />
      <Intro3 />
      <Footer />
    </div>
  );
}

export default App;
