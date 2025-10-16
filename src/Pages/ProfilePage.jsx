import { Camera } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { toast } from "react-toastify";
import defaultUserImage from '../assets/unknown-user.jpg';

const ProfilePage = () => {
   const [image,setImage] = useState(null); 
   const fileInputRef = useRef(null); // reference to hidden input

   // Get image from local storage
    useEffect(() => {
    const savedImage = localStorage.getItem("userImage");
    if (savedImage) {
      setImage(savedImage);
    }
  }, []);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setImage(reader.result); // base64 string
        localStorage.setItem("userImage", reader.result); // store in localStorage
        toast.success("Profile image updated successfully!");
      };

      reader.readAsDataURL(file); // convert file to base64 string
    }
  };

    const handleInputClick = () => {
      fileInputRef.current.click(); // trigger click on hidden input
    };

  return (
    <div className="w-full bg-white h-full flex items-start overflow-y-auto">
      <div className="w-full px-6 py-8 mx-auto">
        <h1 className="text-xl font-semibold text-gray-900 mb-6">
          Account Settings
        </h1>

        {/* Profile Section */}
        <div className="flex items-center gap-4 mb-6">
          <div className="relative">
            {/* Hidden file input */}
            <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleImageUpload}
                style={{ display: "none" }}
            />

            <img
              src={image || defaultUserImage}
              alt="Profile"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div onClick={handleInputClick} className="absolute bottom-0 right-0 bg-[#6C25FF] rounded-full p-1.5 cursor-pointer">
               <Camera className="w-3 h-3 text-white" />
            </div>
          </div>
          
          <div>
            <h2 className="text-base font-semibold text-gray-900">SHAIK RIYAZ</h2>
            <p className="text-sm text-gray-600">sshaikriyaz252@gmail.com</p>
          </div>
        </div>

        {/* Description Section */}
        <div className="border-t border-b border-gray-200 py-4">
           <h6>About Me</h6> 
          <p className="text-sm text-gray-700 leading-relaxed">
             I am an enthusiastic and driven web developer with a keen interest in designing modern, responsive applications. I thrive on solving complex problems, exploring new technologies, and leveraging them to build effective and user-centric solutions. I’m excited to contribute to impactful projects, continue growing my skills, and gain valuable real-world experience.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage