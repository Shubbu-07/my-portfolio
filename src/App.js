import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Project from './components/Projects/Project';

function App() {
  return (
    <>
    <div className='app'>
      <main>
        <Navbar />
        <About />
        <Project />
      </main>
      
    </div>
    </>
  );
}

export default App;
