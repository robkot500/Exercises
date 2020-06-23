import React from 'react'
import ReactDOM from "react-dom";
import './../scss/main.scss';
import Header from './components/Header';


const App = () => {

    return (
        <>
            <Header />
        </>
    )
}



ReactDOM.render(<App />, document.getElementById("app"));