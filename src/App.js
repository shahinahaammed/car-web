import './App.css';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import About from './components/about/About';
import Detalis from './components/detalis/Detalis';
import Second from './components/second_header/Second';
import Footer from './components/footer/Footer';
function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Detalis />
      <Second />
      <Footer />
    </>
  );
}

export default App;
