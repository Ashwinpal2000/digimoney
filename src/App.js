import './App.css';

import {BrowserRouter,Routes,Route} from "react-router-dom";
import Header from './components/Header';
import HomePage from "./Pages/HomePage";
import CoinPage from "./Pages/CoinPage";
// import { makeStyles } from 'tss-react/mui';

function App() {

  // const useStyles= makeStyles(()=>({
  //   App:{
  //     backgroundColor:"#14161a",
  //     color:"white",
  //     minHeight:"100vh",
  //   },

  // }));
  // const classes =useStyles();


  return (
  
     <BrowserRouter>
         <div style={{backgroundColor:"#14161a",color:"white",
         minHeight:"100vh",}} className="App">
          <Header/>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
          </Routes>
          <Routes>
            <Route path='/coins/:id' element={<CoinPage/>}/>
          </Routes>
        </div>
     </BrowserRouter>

  );
}

export default App;
