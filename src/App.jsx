import Header from './components/Header';
import Products from './components/Products';
import CardProvider from './context/CartProvider';
import { ToastContainer } from 'react-toastify';
function App() {
 

  return (
    <CardProvider>
       <ToastContainer autoClose={600} hideProgressBar={true} />
        <Header/>
        <Products/>
        
    </CardProvider>
  )
}

export default App
