import './App.css';

//bootstrap
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

//Navbar
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';


function App() {
  return (
    <>
    <div className='wrapper'>
      <Navbar />
    </div>
    <Home />
    <About />
    <Experience />
    </>
  );
}

export default App;
