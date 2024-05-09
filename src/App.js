import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import Banner from './components/Banner';
import Bestseller from './components/Bestseller';
import Dilfooter from './components/Dilfooter';
import Category from './components/Category';
import Banner1 from './components/Banner1';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Banner/>
      <Bestseller/>
      <Category />
      <Banner1/>
      <Dilfooter /> 
    </div>
  );
}

export default App;
