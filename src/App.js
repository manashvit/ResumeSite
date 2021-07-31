import { createContext,useState } from 'react';
import Header from './Header';
import Main from './Main';
import { ToastContainer } from 'react-toastify';

export const TopContext = createContext()

function App() {
  const [name]=useState('Sachin')
  return (
    <div className="App">
      <Header />
      <TopContext.Provider value={{name}}>
        <Main />
      </TopContext.Provider>
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
