import React, {useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from "../context/AppContext";

const LandingPage = () => {

  const { currentPage, setCurrentPage } = useContext(AppContext);
  const navigate = useNavigate();
  return (
    
      <div className="w-full bg-gray-200 h-full flex items-end">
        <div className="w-full px-6 py-8 rounded-t-md shadow-sm mx-auto">
          <h1 className="text-2xl font-extrabold text-gray-900 mb-2">Welcome to PopX</h1>
          <p className="text-sm text-gray-500 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>

          <button onClick={()=>{setCurrentPage(3); navigate('/signup')}}
            className="w-full bg-[#6C25FF] hover:bg-violet-700 text-white font-semibold py-3 rounded-md mb-3 cursor-pointer"
            aria-label="Create Account"
          >
            Create Account
          </button>

          <button onClick={()=>{setCurrentPage(2); navigate('/login')}}
            className="w-full bg-violet-200 hover:bg-violet-300 text-violet-800 font-semibold py-3 rounded-md cursor-pointer"
            aria-label="Login"
          >
            Already Registered? Login
          </button>
        </div>
    </div>
  )
}

export default LandingPage
