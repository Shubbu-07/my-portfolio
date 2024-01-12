import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';

function App() {
  return (
    <div className='app'>
      <Navbar />
      <About />
    </div>
  );
}

export default App;
