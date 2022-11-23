import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GoRocket } from "react-icons/go";

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
      <header className="App-header">
      <GoRocket className='App-logo' style={{fontSize: "100px"}}/>
      <button onClick={notify} style={{padding: "10px", backgroundColor: "white"}}>
        Click Here
      </button>
      <ToastContainer>
      </ToastContainer>
      </header>
    </div>
  );
}

export default App;
