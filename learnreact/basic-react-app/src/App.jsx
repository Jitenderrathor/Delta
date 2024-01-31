
import './App.css';
import Product from './Product';

function App() {

  return (
    <>
    <div className='product-box'>
     <Product title={"Luxe"} idx={0}/>
     <Product title={"Zen"} idx={1}/>
     <Product title={"Fitness"} idx={2}/>
     <Product title={"Gourmet"} idx={3}/>
    </div>
    </>
  )
}

export default App
