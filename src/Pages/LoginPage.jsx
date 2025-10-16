import { useState } from 'react';
import { toast } from 'react-toastify';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleLogin = () => {

        if(email?.length > 0 && password?.length > 0){
        // I can call an API or perform login logic here -> can call thunk action
             toast.success("Logged in successfully!");
             setEmail('');
             setPassword('');
        }else{
             toast.error("Please enter both email and password.");
        }    

       // console.log('Login with:', email, password);
  };

  return (
    <div className="w-full bg-gray-200 h-full flex items-start">
      <div className="w-full px-6 py-8 mx-auto">
        <h1 className="text-2xl font-extrabold text-gray-900 mb-2">
          Signin to Your PopX account
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>

        <div className="mb-4">
          <label 
            htmlFor="email" 
            className="block text-sm font-medium text-[#6C25FF] mb-2"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email address"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
          />
        </div>

        <div className="mb-6">
          <label 
            htmlFor="password" 
            className="block text-sm font-medium text-[#6C25FF] mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
          />
        </div>

        <button
          onClick={handleLogin}
          className={`w-full ${email?.length > 0 && password?.length > 0 ? "bg-blue-600" : "bg-gray-300"} text-gray-700 font-semibold py-3 rounded-md transition-colors cursor-pointer`}
          aria-label="Login"
        >
          Login
        </button>
      </div>
    </div>
  )
}

export default LoginPage