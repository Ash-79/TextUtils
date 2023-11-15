import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const[mode, setMode] = useState('light')
  
  const removeBodyClasses = ()=>{
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success');
  }
  
  const toggleMode = (cls)=>{
    removeBodyClasses();
    document.body.classList.add('bg-'+cls);
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('Dark mode has been Enabled', 'success');
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been Enabled', 'success');
    }
  }
  const[alert, setAlert] = useState(null);
  const showAlert = (text, type)=>{
    setAlert({
      msg: text,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} about="TextUtils's About"/>
        <Alert alert={alert}/>
        <div className="container my-3">
        <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<TextForm heading="Enter text to analyze " mode={mode}/>} />
        </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
