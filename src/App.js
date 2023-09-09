
import './App.css';
import Footer from './Footer';
import Home from './Home'
import Next from './Next';
import Technologies from './Technologies';
import ScrollToTopButton from './ScrollToTopButton';
function App() {
  
  return (
    <>
    <div className="app">
    <ScrollToTopButton />
    <Home/>
    <Next/>
    <Technologies/>
    <Footer/>
    </div>
    </>
  );
}

export default App;
