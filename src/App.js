import Header from './Header';
import Main from './Main';
import { ToastContainer } from 'react-toastify';

function App() {
  
  return (
    <div className="App">
      <Header />
      <Main />
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        className="cstToaster"
      />
    </div>
  );
}

export default App;
