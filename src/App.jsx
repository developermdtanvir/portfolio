import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='bg-dark'>
      <div className=' container mx-auto'>
        <Navbar />
        <Home />
        <Footer />
      </div>
    </div>
  )
}

export default App;
