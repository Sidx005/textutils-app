import './App.css';
import About from './Components/About';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
    const [mode, setMode] = useState('light');
    const [alert, setAlert] = useState(null);

    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type
        });
        setTimeout(() => {
            setAlert(null);
        }, 4000);
    }

    const toggleMode = () => {
        if (mode === 'light') {
            setMode('dark');
            document.body.style.backgroundColor = 'rgba(33,37,41,1)';
            document.body.style.color = 'white';
            
            document.title = 'TextUtils-Dark Mode'
            showAlert("Dark mode enabled","success")
        } else {
            setMode('light');
            document.body.style.backgroundColor = 'white';
            document.body.style.color = '#000';
            
            document.title = 'TextUtils-Light Mode'

            showAlert("Light mode enabled","success")
        }  
    }

    const yellow = () => {
        if (mode === 'light') {
            setMode('yellow');
            document.body.style.backgroundColor = 'yellow';
            document.body.style.color = 'black';
            
            showAlert("Yellow mode enabled","success")
        } else {
            setMode('light');
            document.body.style.backgroundColor = 'white';
            document.body.style.color = '#000';
            
            document.querySelector('.yellow').style.backgroundColor = 'yellow';

            showAlert("Light mode enabled","success")
        }
    }

    const greenMode = () => {
        if (mode === 'light') {
            setMode('Green');
            document.body.style.backgroundColor = 'green';
            document.body.style.color = '#fff';
        
            document.querySelector('.green').style.backgroundColor = '#fff';
            showAlert("Green mode enabled","success")
        } else {
            setMode('light');
            document.body.style.backgroundColor = 'white';
            document.body.style.color = '#000';
            
            document.querySelector('.green').style.backgroundColor = 'green';

            showAlert("Light mode enabled","success")
        }
    }

    return (
        <Router>
            <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} yellow={yellow} greenMode={greenMode} />
            <Alert alert={alert} />
            <Routes>
                <Route path='/about' element={<About />} />
                <Route path='/' element={<div className="container my-5">
                    <TextForm showAlert={showAlert} heading="Enter the text to analyze" />
                    
                </div>} />
            </Routes>
        </Router>
    );
}

export default App;
