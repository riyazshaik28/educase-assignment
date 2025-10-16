import { useState } from 'react';
import { toast } from 'react-toastify';

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    password: '',
    companyName: '',
    isAgency: 'yes'
  });

  const handleCreateAccount = () => {
    // I can add signup logic here
    if (formData.fullName && formData.phoneNumber && formData.email && formData.password && formData.companyName) {
      toast.success("Account created successfully!");
      setFormData({
            fullName: '',
            phoneNumber: '',
            email: '',
            password: '',
            companyName: '',
            isAgency: 'yes'
    });

    } else {
      toast.error("Please fill in all fields.");
    }

    console.log('Create account with:', formData);
  };

  return (
    <div className="w-full bg-gray-200 h-full flex flex-col overflow-hidden">
      <div className="flex-1 px-4 py-3 overflow-y-auto">
        <h1 className="text-lg font-extrabold text-gray-900 mb-3">
          Create your PopX account
        </h1>

        <div className="mb-2">
          <label 
            htmlFor="fullName" 
            className="block text-xs font-medium text-[#6C25FF] mb-1"
          >
            Full Name*
          </label>
          <input
            type="text"
            id="fullName"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            placeholder="Marry Doe"
            className="w-full px-3 font-semibold  py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6C25FF] focus:border-transparent text-sm"
          />
        </div>

        <div className="mb-2">
          <label 
            htmlFor="phoneNumber" 
            className="block text-xs font-medium text-[#6C25FF] mb-1"
          >
            Phone number*
          </label>
          <input
            type="tel"
            id="phoneNumber"
            value={formData.phoneNumber}
            onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
            placeholder="Marry Doe"
            className="w-full px-3  font-semibold  py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6C25FF] focus:border-transparent text-sm"
          />
        </div>

        <div className="mb-2">
          <label 
            htmlFor="email" 
            className="block text-xs font-medium text-[#6C25FF] mb-1"
          >
            Email address*
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="Marry Doe"
            className="w-full px-3 font-semibold  py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6C25FF] focus:border-transparent text-sm"
          />
        </div>

        <div className="mb-2">
          <label 
            htmlFor="password" 
            className="block text-xs font-medium text-[#6C25FF] mb-1"
          >
            Password *
          </label>
          <input
            type="password"
            id="password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            placeholder="Marry Doe"
            className="w-full px-3 py-1.5 font-semibold  border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6C25FF] focus:border-transparent text-sm"
          />
        </div>

        <div className="mb-2">
          <label 
            htmlFor="companyName" 
            className="block text-xs font-medium text-[#6C25FF] mb-1"
          >
            Company name
          </label>
          <input
            type="text"
            id="companyName"
            value={formData.companyName}
            onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
            placeholder="Marry Doe"
            className="w-full px-3 py-1.5 border font-semibold  border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6C25FF] focus:border-transparent text-sm"
          />
        </div>

        <div className="mb-3">
          <label className="block text-xs font-medium text-gray-700 mb-1">
            Are you an Agency?*
          </label>
          <div className="flex items-center gap-6">
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="agency"
                value="yes"
                checked={formData.isAgency === 'yes'}
                onChange={(e) => setFormData({ ...formData, isAgency: e.target.value })}
                className="w-4 h-4 font-semibold  text-[#6C25FF] border-gray-300 focus:ring-[#6C25FF]"
              />
              <span className="ml-2 text-sm text-gray-700">Yes</span>
            </label>
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="agency"
                value="no"
                checked={formData.isAgency === 'no'}
                onChange={(e) => setFormData({ ...formData, isAgency: e.target.value })}
                className="w-4 h-4 text-[#6C25FF] border-gray-300 focus:ring-[#650ef3]"
              />
              <span className="ml-2 text-sm text-gray-700">No</span>
            </label>
          </div>
        </div>

        <button
          onClick={handleCreateAccount}
          className="w-full bg-[#6C25FF] hover:bg-[#5a1fdd] text-white font-semibold py-2 rounded-md transition-colors cursor-pointer"
          aria-label="Create Account"
        >
          Create Account
        </button>
      </div>
    </div>
  )
}

export default SignUpPage