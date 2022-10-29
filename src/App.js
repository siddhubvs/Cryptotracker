import{BrowserRouter, Route,Routes}  from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import './App.css';
import CoinPage from "./pages/CoinPage";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",
  },
}));
function App() {
  const classes = useStyles();
  return (
    <BrowserRouter>
     
      <div className={classes.App}>
      <Header />
        <Routes>
        <Route path="/" element={<Homepage/>} exact/>
        <Route path="/coins/:id" element={<CoinPage/>} exact/>  
        
        </Routes>
      </div>
    
    </BrowserRouter>
    
  );
}

export default App;
