import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Project from './components/Projects/Project';
import About from './components/About/About';

function App() {
  return (
    <>
    <div className='app'>
      <main>
        <Navbar />
        <Home />
        <About />
        <Project />
      </main>
      
    </div>
    </>
  );
}

export default App;
