import './App.css';
import './index.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar/Navbar';
import HeroBanner from './components/Hero/HeroBanner';
import Footer from './components/Footer/Footer';

function App() {
  const notify = ()=>{
    toast.warn('👷Under Construction !', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  }

  return (
    <div className="App">
      <header>
       <Navbar/>
       {/* <HeroBanner/>
       <Footer/> */}
      </header> 
    </div>
  );
}

export default App;
