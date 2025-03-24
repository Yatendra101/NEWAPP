
import React, { useState ,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import PageTransition from '../components/PagiTransition';
import { motion } from 'framer-motion';
import { ArrowLeft, Camera } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';

const AccountSettings = () => {
  const navigate = useNavigate();


  const [userData, setUserData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    companyName: '',
    isAgency: 'no'
  });

  useEffect(() => {
    // Load user data from localStorage
    const storedData = localStorage.getItem('userData');
    if (storedData) {
      setUserData(JSON.parse(storedData));
    }
  }, []);

  return (
    <PageTransition className="min-h-screen bg-gray-50">
      <div className="max-w-md mx-auto bg-white min-h-screen">
        {/* Header */}
        <div className="p-4 border-b">
          <div className="flex items-center">
            <button 
              onClick={() => navigate(-1)} 
              className="mr-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft size={20} />
            </button>
            <h1 className="text-xl font-semibold text-gray-900">Account Settings</h1>
          </div>
        </div>
        
        {/* Profile Section */}
        <div className="p-6 border-b border-gray-100">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="flex items-start space-x-4"
          >
            <div className="relative">
              <Avatar className="w-16 h-16">
                <AvatarImage src="/placeholder.svg" alt={userData.fullName} />
                <AvatarFallback>{userData.fullName.charAt(0)}</AvatarFallback>
              </Avatar>
              <button className="absolute bottom-0 right-0 bg-purple-500 text-white p-1 rounded-full shadow-md hover:bg-purple-600 transition-colors">
                <Camera size={14} />
              </button>
            </div>
            
            <div>
              <h2 className="text-lg font-semibold">{userData.fullName}</h2>
              <p className="text-gray-600 text-sm">{userData.email}</p>
            </div>
          </motion.div>
        </div>
        
        {/* User Details Section (moved from Bio) */}
        <div className="p-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            <h3 className="text-md font-medium mb-4">User Details</h3>
            
            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-500">Mobile Number</p>
                <p className="text-gray-700">{userData.mobile}</p>
              </div>
              
              <div>
                <p className="text-sm text-gray-500">Company Name</p>
                <p className="text-gray-700">{userData.companyName}</p>
              </div>
              
              <div>
                <p className="text-sm text-gray-500">Agency Status</p>
                <p className="text-gray-700">{userData.isAgency === 'yes' ? 'Yes' : 'No'}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default AccountSettings;
