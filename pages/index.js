import React from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import CaseCard from '../components/CaseCard';
import { caseStudies } from '../data/caseStudies';

const Home = () => {
  return (
    <Layout>
      {/* Header Section */}
      <Header />
      
      {/* Main Content - Two Column Layout for About and Work Experience */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-20">
        {/* Left Column - About Section */}
        <div className="space-y-10 animate-fade-in-up">
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/30 hover:shadow-2xl transition-all duration-500">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-white">
                  <path fill="currentColor" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              <div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent">
                  Summary
                </h2>
              </div>
            </div>
            
            <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
              <p className="animate-slide-in-left" style={{ animationDelay: '0.1s' }}>
                I am a Data Analyst with one year of experience in HR and E-commerce sectors. 
                I have the ability to transform complex data into valuable insights to support business decision-making.
              </p>
              
              <p className="animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
                With experience at KFC Vietnam and I-DENT GROUP, I have gained skills in building Power BI dashboards, 
                automating reporting processes and integrating data from multiple sources.
              </p>
              
              <p className="animate-slide-in-left" style={{ animationDelay: '0.3s' }}>
                I am passionate about learning and improving workflows through automation and data-driven solutions, 
                helping teams operate more efficiently and achieve business goals.
              </p>
            </div>
          </div>
        </div>
        
        {/* Right Column - Work Experience */}
        <div className="space-y-10 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/30 hover:shadow-2xl transition-all duration-500">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-white">
                  <path fill="currentColor" d="M20 6h-3V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zM9 4h6v2H9V4zm11 14H4V8h16v10z"/>
                </svg>
              </div>
              <div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent">
                  Work Experience
                </h2>
              </div>
            </div>
            
            <div className="space-y-8">
              {/* KFC Experience */}
              <div className="border-l-4 border-red-500 pl-6 animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <h3 className="text-xl font-bold text-gray-900">KFC Vietnam</h3>
                </div>
                <p className="text-sm text-gray-600 mb-2 font-medium">Dec 2024 - June 2025 | Data Analyst (HR Dept)</p>
                <div className="space-y-3 text-gray-700 text-sm">
                  <p>• Designed Power BI dashboards for employee engagement monitoring</p>
                  <p>• Built KPI tracking dashboards for Talent Acquisition Team</p>
                  <p>• Automated 300+ reports using Python and VBA</p>
                  <p>• Collaborated with HR department for data-driven insights</p>
                </div>
                <div className="mt-4 p-3 bg-red-500 rounded-lg">
                  <p className="text-sm font-semibold text-white mb-2">Key Achievement:</p>
                  <p className="text-sm text-white">Transformed manual Excel processes into automated Power BI dashboards</p>
                </div>
              </div>

              {/* I-DENT GROUP Experience */}
              <div className="border-l-4 border-blue-500 pl-6 animate-slide-in-left" style={{ animationDelay: '0.3s' }}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <h3 className="text-xl font-bold text-gray-900">I-DENT GROUP (Metadent)</h3>
                </div>
                <p className="text-sm text-gray-600 mb-2 font-medium">June 2025 - Present | Data Analyst (E-commerce Dept)</p>
                <div className="space-y-3 text-gray-700 text-sm">
                  <p>• Aggregated multi-source data from TikTok & Shopee Seller Centers</p>
                  <p>• Built scalable reporting system with Power BI dashboards</p>
                  <p>• Automated daily data update workflows</p>
                  <p>• Structured complex datasets for accurate analysis</p>
                </div>
                <div className="mt-4 p-3 bg-blue-500 rounded-lg">
                  <p className="text-sm font-semibold text-white mb-2">Key Achievement:</p>
                  <p className="text-sm text-white">Reduced manual reporting time by 80% through automation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Projects Section - Full Width Below */}
      <div className="mt-20 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/30 hover:shadow-2xl transition-all duration-500">
          <div className="flex items-center gap-4 mb-10">
              <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg">
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-white">
                <path fill="currentColor" d="M3 3h7v7H3V3zm11 0h7v7h-7V3zM3 14h7v7H3v-7zm11 0h7v7h-7v-7z"/>
              </svg>
            </div>
            <div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent">
                Featured Projects
              </h2>
            </div>
          </div>
          
          {/* Responsive grid: 2 columns on desktop, 1 on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((caseStudy, index) => (
              <div 
                key={caseStudy.slug} 
                className="animate-fade-in-up"
                style={{ animationDelay: `${0.5 + index * 0.1}s` }}
              >
                <CaseCard caseStudy={caseStudy} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
