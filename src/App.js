import Home from './components/Home';
import "./css/responsive.css";
import About from './components/About'
import Working from './components/Working'
import Join from './components/Join';
import Backed from './components/Backed';
import Community from './components/Community';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
     <Home/>
     <About/>
     <Working/>
     <Join/>
     <Backed/>
     <Community/>
     <Footer/>
    </div>
  );
}

export default App;
