import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import Banner from './components/Banner';
import Bestseller from './components/Bestseller';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Banner/>
      <Bestseller/>
    </div>
  );
}

export default App;
