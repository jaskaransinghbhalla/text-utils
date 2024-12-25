import NavBar from "../components/NavBar.jsx"
import TextForm from "../components/TextForm.jsx"
import AboutUs from "../components/AboutUs.jsx"
import React, { useState } from 'react'
import Alert from "../components/Alert.jsx";

import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom"


export default function Home() {
    const [mode, setMode] = useState('light');
    const [alert, setAlert] = useState(null);

    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type
        })
        setTimeout(() => {
            setAlert(null);
        }, 1500);

    }


    const toggleMode = () => {
        if (mode === 'light') {
            setMode('dark');
            document.body.style.backgroundColor = 'grey';
            showAlert(' Dark mode has been enabled', 'success')
            document.title = 'TextUtils - Dark Mode';

        }
        if (mode === 'dark') {
            setMode('light');
            document.body.style.backgroundColor = 'white';
            showAlert(' Light  mode has been enabled', 'success')
            document.title = 'TextUtils - Light Mode';
        }
    }

    return (
        <div>
            <Router>
                <NavBar title='TextUtils' mode={mode} toggleMode={toggleMode} />
                <Alert alert={alert} />
                <Routes>
                    <Route exact path="/about" element={<AboutUs mode={mode} /> }>

                    </Route>
                    <Route exact path="/" element={<div className="container mt-4">
                        <TextForm showAlert={showAlert} heading='Text Analyser' mode={mode} />
                    </div>}>
                    </Route>
                </Routes>
            </Router>
        </div>

    )
}