
import './App.css';
import NavBar from './NavBar';
import DragDropFiles from './component/DragDropFiles';
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";
import Main from './component/main';
import About from './component/About';
import ModelDisciption from './component/ModelDesciption'
function App() {
  return (
  
    <div className="App">
   
 <Router>
      <div className="App-nav">
      
        <NavBar />
      
        </div>
      <Routes>
          <Route path="/" exact element={<DragDropFiles/>}/>
          <Route path="/about"  element={<About/>} />
          <Route path="/shop" element={<ModelDisciption/>} />
      </Routes>
      
    </Router>
   
    
      
    </div>
  );
}

export default App;
