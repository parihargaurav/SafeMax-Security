import React from 'react';

const Footer = () => {
  return (
    <footer className="p-6 bg-blue-900 text-white text-center">
      <p>&copy; {new Date().getFullYear()} SafeMax Security. All rights reserved.</p>
      <div className="flex justify-center space-x-4 mt-4">
        <a href="https://legal.yahoo.com/us/en/yahoo/privacy/index.html" className="hover:underline">Privacy Policy</a>
        <a href="https://legal.yahoo.com/us/en/yahoo/terms/otos/index.html" className="hover:underline">Terms of Service</a>
        <a href="https://www.linkedin.com/company/safemax-security/" target="_blank" rel="noopener noreferrer" className="hover:underline">
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;
