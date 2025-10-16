import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import LandingPage from './Pages/LandingPage';
import LoginPage from './Pages/LoginPage';
import SignUpPage from './Pages/SignUpPage';
import ProfilePage from './Pages/ProfilePage';
import NavigationBar from './Pages/NavigationBar';


function App() {
  return (
    <>
     <div className="min-h-screen flex justify-center items-center bg-gray-100">
          <Router>

          <ToastContainer 
            position="top-center"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
        />

            <div className="w-[375px] h-[580px] bg-white rounded-3xl shadow-lg overflow-hidden grid grid-rows-[1fr_auto]">
                    <div className="w-full overflow-y-auto">
                          <Routes>
                              <Route path="/" element={<LandingPage/>} />
                              <Route path="/login" element={<LoginPage />} />
                              <Route path="/signup" element={<SignUpPage />} />
                              <Route path="/profile" element={<ProfilePage />} />
                          </Routes>
                    </div>
                    <div className="w-full"><NavigationBar /></div>
            </div>
          </Router>
      </div>
    </>
  )
}

export default App