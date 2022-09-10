import './App.css';
import About from './Component/About';
import Navbar from './Component/Navbar';
import TextForm from './Component/TextForm';
import React, {useState} from 'react'
import Alert from './Component/Alert';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [mode ,setMode]=useState('light')
  const [slabel,setSlabel]=useState('Enable Dark Mode')
  const[alert,SetAlert]=useState(null)
  //Function to toggle mode
  const showMode=()=>{
        if(mode==='dark')
        {
          setMode('light');
          document.body.style.backgroundColor='white'
          setSlabel('Enable Dark Mode')
          showAlert("Light Mode Enabled",'success')
        }
        else
        {
          setMode('dark')
          document.body.style.backgroundColor='#4892ff'
          setSlabel('Enable Light Mode')
          showAlert("Dark Mode Enabled","success")
        }

  }
  //Function to show Alert
  const showAlert=(message,type)=>{
       SetAlert({
                 msg: message,
                 typ: type
              })
 setTimeout(() => {
  SetAlert(null)
 },1500);
  }
  //Function to remove Bg Class
  const removeBg=()=>{
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-secondary')
    document.body.classList.remove('bg-info')
  }
  //Function to set pelleat Color
  const setBg=(cls)=>{
    removeBg();
    document.body.classList.add('bg-'+cls)

  }
  return (
    <>  
     <BrowserRouter>
    
           <Navbar title="TextUtil" aboutText="About-Us" mode={mode} slabel={slabel} showMode={showMode} showAlert={showAlert} setBg={setBg}/>
           <Alert alert={alert}/>
        
            <div className="container my-3">
            <Routes> 
            <Route exact path="/about" element={<About/>}>
           </Route>
            <Route exact path="/" element={<TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert}/>}> 
           </Route>
          </Routes>
           </div>
    
    </BrowserRouter>
    </>
  );
}
export default App;
