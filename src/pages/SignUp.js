
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PageTransition from '../components/PagiTransition';
import InputField from '../components/InputField';
import Button from '../components/Button';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    password: '',
    companyName: '',
    isAgency: 'no'
  });
  
  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
    mobile: '',
    password: '',
    companyName: '',
    isAgency: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple validation
    const newErrors = {
      fullName: !formData.fullName ? 'Full name is required' : '',
      email: !formData.email ? 'Email is required' : 
             !/\S+@\S+\.\S+/.test(formData.email) ? 'Email is invalid' : '',
      mobile: !formData.mobile ? 'Mobile number is required' : 
              !/^\d{10}$/.test(formData.mobile) ? 'Mobile number must be 10 digits' : '',
      password: !formData.password ? 'Password is required' : 
                formData.password.length < 6 ? 'Password must be at least 6 characters' : '',
      companyName: !formData.companyName ? 'Company name is required' : '',
      isAgency: ''
    };
    
    setErrors(newErrors);
    
    // If no errors, proceed with signup
    if (Object.values(newErrors).every(error => !error)) {
      // For demo, just navigate to account page
      navigate('/account');
    }
  };

  return (
    <PageTransition className="min-h-screen flex flex-col p-6 bg-gradient-to-b from-white to-gray-50">
      <div className="mb-8">
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft size={20} className="mr-1" />
          <span>Back</span>
        </button>
      </div>
      
      <div className="w-full max-w-md mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="text-center mb-8"
        >
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Create Your NEWAPP Account</h1>
        </motion.div>

        <motion.form 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <InputField
            label="Full Name"
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            error={errors.fullName}
            autoComplete="name"
          />
          
          <InputField
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            autoComplete="email"
          />
          
          <InputField
            label="Mobile Number"
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            error={errors.mobile}
            autoComplete="tel"
          />
          
          <InputField
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            error={errors.password}
            autoComplete="new-password"
          />
          
          <InputField
            label="Company Name"
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            error={errors.companyName}
          />
          
          <div className="input-float">
            <label>Are you an agency?</label>
            <select
              name="isAgency"
              value={formData.isAgency}
              onChange={handleChange}
              className="w-full py-3 px-4 outline-none rounded-md appearance-none"
            >
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </select>
          </div>
          
          <div className="pt-4">
            <Button type="submit" fullWidth>Create Account</Button>
          </div>
        </motion.form>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          className="mt-8 text-center"
        >
          <p className="text-gray-600">
            Already have an account? <Link to="/login" className="text-purple-500 hover:text-purple-700 transition-colors">Login</Link>
          </p>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default SignUp;
