
import React from 'react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PagiTransition';
import Button from '../components/Button';
import { motion } from 'framer-motion';

const Welcome = () => {
  return (
    <PageTransition className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-b from-white to-gray-50">
      <div className="w-full max-w-md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-3">Welcome to NEWAPP</h1>
          <p className="text-gray-600">Here you can use it after login or sign up</p>
        </motion.div>

        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            <Link to="/signup">
              <Button fullWidth>Create Account</Button>
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
          >
            <Link to="/login">
              <Button variant="outline" fullWidth>Already Registered / Login</Button>
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-xs text-gray-500">
            By continuing, you agree to our Terms of Service & Privacy Policy
          </p>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default Welcome;
