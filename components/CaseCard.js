import React from 'react';
import Link from 'next/link';

const CaseCard = ({ caseStudy }) => {
  return (
    <Link href={`/case-studies/${caseStudy.slug}`}>
      <div className="group bg-white/70 backdrop-blur-sm rounded-2xl p-6 hover:bg-white hover:shadow-2xl transition-all duration-500 border border-white/30 shadow-lg hover:shadow-xl cursor-pointer transform hover:-translate-y-2 hover:scale-105 relative overflow-hidden">
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Content */}
        <div className="relative z-10">
          <div className="mb-6 relative overflow-hidden rounded-xl">
            <img 
              src={caseStudy.image} 
              alt={caseStudy.title}
              className="w-full h-40 object-cover rounded-xl group-hover:scale-110 transition-transform duration-500"
              loading="lazy"
              onError={(e) => {
                e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDQwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0yMDAgMTAwQzIwMCAxMzEuMDQ2IDE3NS4wNDYgMTU2IDE0NCAxNTZDMTA4LjU0NiAxNTYgODggMTM1LjQ1NCA4OCAxMDBDODggNjQuNTQ2IDEwOC41NDYgNDQgMTQ0IDQ0QzE3NS4wNDYgNDQgMjAwIDY4Ljk1NCAyMDAgMTAwWiIgZmlsbD0iIzlDQTNBRiIvPgo8dGV4dCB4PSIyMDAiIHk9IjExMCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmaWxsPSIjNkI3MjgwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5JbWFnZSBQbGFjZWhvbGRlcjwvdGV4dD4KPC9zdmc+';
              }}
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
          </div>
          
          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
            {caseStudy.title}
          </h3>
          <p className="text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
            {caseStudy.description}
          </p>
          
          {/* Read more indicator */}
          <div className="mt-4 flex items-center text-blue-600 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
            <span className="text-sm font-medium">Read More</span>
            <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CaseCard;
