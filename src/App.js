import './App.css';

//bootstrap
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

//Navbar
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    <>
    <div className='wrapper'>
      <Navbar />
    </div>
    <Home />
    </>
  );
}

export default App;
