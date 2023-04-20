import React from 'react';
import ReactDOM from 'react-dom/client';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
import './index.css';
import App from './App';

// export default function App(){
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />}></Route>
//       </Routes>
//     </BrowserRouter>
//   )
// }
function handleLogin(event) {
    event.preventDefault();
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const username = usernameInput.value;
    const password = passwordInput.value;

    // Replace "your-username" and "your-password" with the desired username and password
    if (username === "admin" && password === "lighthouse") {
        window.location.href = "https://lpr-demo.vercel.app/";
    } else {
        alert("Incorrect password. Please try again.");
        passwordInput.value = "";
    }
}

const loginForm = document.getElementById("login-form");
if (loginForm) {
    loginForm.addEventListener("submit", handleLogin);
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <App />
);