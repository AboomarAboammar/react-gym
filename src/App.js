import './App.css';
import Footer from './compenenets/Footer/Footer';
import Hero from './compenenets/Hreo/Hero';
import Join from './compenenets/Join/Join';
import Plan from './compenenets/Plan/Plan';
import Program from './compenenets/program/Program';
import Reasons from "./compenenets/Reasons/Reasons"
import Testemonials from './compenenets/Testemonials/Testemonials';
function App() {
  return (
    <div className="App">
         <Hero/>
         <Program/>
    <Reasons/>
    <Plan/>
    <Testemonials/>
  <Join/>
  <Footer/>
    </div>
  );
}

export default App;
