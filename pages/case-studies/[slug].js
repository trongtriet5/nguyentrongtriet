import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Layout from '../../components/Layout';
import { caseStudies } from '../../data/caseStudies';

const CaseStudyDetail = () => {
  const router = useRouter();
  const { slug } = router.query;

  // Find the case study by slug
  const caseStudy = caseStudies.find(study => study.slug === slug);

  if (!caseStudy) {
    return (
      <Layout title="Case Study Not Found">
        <div className="text-center py-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Case Study Not Found</h1>
          <p className="text-gray-600 mb-8">The case study you&apos;re looking for doesn&apos;t exist.</p>
          <button 
            onClick={() => router.push('/')}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Back to Home
          </button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout 
      title={`${caseStudy.title} - Case Study | trongtriet5`}
      description={caseStudy.description}
    >
      {/* Back Button */}
      <div className="mb-8">
        <button 
          onClick={() => router.back()}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Portfolio
        </button>
      </div>

      {/* Case Study Content */}
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {caseStudy.title}
          </h1>
          <p className="text-xl text-gray-600">
            {caseStudy.description}
          </p>
        </div>

        {/* Power BI Dashboard PDF */}
        {caseStudy.pdfUrl && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Power BI Dashboard</h2>
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-yellow-500 rounded-lg">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 text-white">
                    <path fill="currentColor" d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Power BI Dashboard</h3>
                  <p className="text-sm text-gray-600">Power BI Template</p>
                </div>
              </div>
              
              {/* PDF Viewer */}
              <div className="border border-gray-300 rounded-lg overflow-hidden shadow-inner">
                <iframe
                  src={`${caseStudy.pdfUrl}#toolbar=0&navpanes=0&scrollbar=1&view=FitH`}
                  width="100%"
                  height="700"
                  className="w-full"
                  title={`${caseStudy.title} - Power BI Dashboard`}
                  style={{ border: 'none' }}
                />
              </div>
            </div>
          </div>
        )}

        {/* Description */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Overview</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            {caseStudy.fullDescription}
          </p>
        </div>
        {/* Key Achievements */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Achievements</h2>
          <ul className="space-y-3">
            {caseStudy.details.map((detail, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">{detail}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies Used */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Technologies Used</h2>
          <div className="flex flex-wrap gap-2">
            {['Python', 'Excel / Google Sheets', 'Power BI', 'Statistical Analysis'].map((tech) => (
              <span 
                key={tech}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CaseStudyDetail;
