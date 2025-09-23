import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';

const Header = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      href: 'https://www.linkedin.com/in/nguyentrongtriet/',
      color: 'text-blue-600'
    },
    {
      name: 'GitHub',
      icon: FaGithub,
      href: 'https://github.com/trongtriet5',
      color: 'text-blue-600'
    },
    {
      name: 'Facebook',
      icon: FaFacebook,
      href: 'https://www.facebook.com/nguyentrongtriet/',
      color: 'text-blue-600'
    }
  ];

  return (
    <header className="mb-16 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 rounded-3xl opacity-0"></div>
      
      {/* Content */}
      <div className="relative z-10 p-8">
        {/* Avatar */}
        <div className="flex justify-center mb-8">
          <div className="relative group">
            <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg transform group-hover:scale-110 transition-all duration-300 border-4 border-white/30">
              <Image
                src="/avatar.jpg"
                alt="Trong Triet - Data Analyst"
                width={128}
                height={128}
                className="w-full h-full object-contain bg-white"
                priority
                onError={(e) => {
                  // Fallback to gradient background if image fails to load
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = `
                    <div class="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" class="w-12 h-12 text-white">
                        <path fill="currentColor" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                    </div>
                  `;
                }}
              />
            </div>
            {/* Pulse animation ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 animate-ping opacity-20"></div>
          </div>
        </div>

        {/* Greeting */}
        <h1 className="text-6xl font-bold text-center bg-gradient-to-r from-gray-900 via-blue-600 to-blue-800 bg-clip-text text-transparent mb-4 leading-tight animate-fade-in">
          Hey ! I&apos;m Trong Triet
        </h1>

        {/* Job Title */}
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Data Analyst | BI Developer
        </h2>

        {/* Skills */}
        <div className="mb-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="flex flex-wrap justify-center gap-3">
            {/* Programming Languages */}
            <div className="flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full border border-blue-200">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-sm font-medium text-blue-800">Python</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full border border-blue-200">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-sm font-medium text-blue-800">SQL</span>
            </div>

            {/* Data Tools */}
            <div className="flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full border border-green-200">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm font-medium text-green-800">Power BI</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full border border-green-200">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm font-medium text-green-800">Excel</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full border border-green-200">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm font-medium text-green-800">Google Sheets</span>
            </div>

            {/* Data Analysis Skills */}
            <div className="flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full border border-purple-200">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span className="text-sm font-medium text-purple-800">Data Visualization</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full border border-purple-200">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span className="text-sm font-medium text-purple-800">Statistical Analysis</span>
            </div>

            {/* Machine Learning */}
            <div className="flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full border border-orange-200">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <span className="text-sm font-medium text-orange-800">Machine Learning</span>
            </div>
          </div>
        </div>

        {/* Social Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          {socialLinks.map((link, index) => {
            const IconComponent = link.icon;
            return (
              <Link
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-6 py-4 bg-white/80 backdrop-blur-sm rounded-xl hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border border-white/20 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <IconComponent className={`w-5 h-5 ${link.color} group-hover:scale-110 transition-transform duration-200`} />
                <span className="text-sm font-semibold text-gray-800 group-hover:text-gray-900">{link.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
};

export default Header;
