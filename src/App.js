import './App.css';
import Intro from './Components/intro/Intro';
import About from './Components/about/About';
import ProductList from './Components/productlist/ProductList';
import Contact from './Components/contact/Contact';
import Toggle from "./Components/toggle/Toggle"
import { useContext } from 'react';
import { ThemeContext } from './context';

function App() {

  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode

  return (
    <div  style={{backgroundColor: darkMode ? "#222" : "beige", color: darkMode ? "white" : "black"}}>
      <Toggle/>
      <Intro/>
      <About/>
      <ProductList/>
      <Contact/>
    </div>
  );
}

export default App;
