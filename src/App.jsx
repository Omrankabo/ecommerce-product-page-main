import Header from "./components/Header";
import OverLay from "./components/OverLay";
import Home from "./pages/Home";
import Cart from './components/Cart';
const App = () => {
  return (
    <div className='overflow-hidden'>

      <Header/>
      <Home/>
      <Cart/>
      <OverLay/>
    </div>
  );
};

export default App;
