import './App.css';
import Navbar from "./Component/Navbar";
import TextProject from "./Component/TextProject";
import React, {useState} from 'react';
import Alert from "./Component/Alert";

function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);

  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 3000)
  }

  const togglestyle = () => {
    if (mode === 'light') {
      setmode('dark');
      showalert("Dark Mode Enabled", "Success");
      document.body.style.backgroundColor = '#042743';
    } else {
      setmode('light');
      showalert("Dark Mode Disabled", "Success");
      document.body.style.backgroundColor = 'white';
    }
  }
  return (<>
    <Navbar title="TextUtils" mode={mode} togglestyle={togglestyle}/>
    <Alert alert={alert}/>
    <div className="container">
      <TextProject heading="Enter your text below:" showalert={showalert} mode={mode}/>
    </div>
  </>);
}

export default App;
